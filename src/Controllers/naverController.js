import connection from '../Database/connection';
import { naverSchema } from '../Validations/validations';

const naverController = {
  store: async (request, response) => {
    const { userId } = request;

    if (!(await naverSchema.isValid(request.body))) {
      return response.status(401).json({ ERROR: 'validations fail' });
    }

    const { name, birthdate, admissionDate, jobRole, projects } = request.body;

    const insertedId = await connection('navers')
      .insert({
        name,
        birthdate,
        admissionDate,
        jobRole,
        user_id: userId,
      })
      .returning('id');

    const data = {
      name,
      birthdate,
      admissionDate,
      jobRole,
      user_id: userId,
    };

    if (!projects) {
      return response.json(data);
    }

    const projectNaver = projects.map((projectId) => {
      return {
        naver_id: insertedId[0],
        project_id: projectId,
      };
    });

    await connection('project_naver').insert(projectNaver);

    return response.json({ ...data, projects });
  },

  show: async (request, response) => {
    const { id } = request.params;
    const { userId } = request;

    const naver = await connection('navers')
      .where({ id })
      .where('user_id', userId)
      .select('navers.*')
      .first();

    if (!naver) {
      return response.status(400).json({ Message: 'Naver not found!' });
    }
    const projects = await connection('navers')
      .innerJoin('project_naver', 'navers.id', 'project_naver.naver_id')
      .innerJoin('projects', 'projects.id', 'project_naver.project_id')
      .where('project_naver.naver_id', id)
      .select('projects.id', 'projects.name');

    return response.json({ ...naver, projects });
  },

  index: async (request, response) => {
    const { name } = request.query;
    const { userId } = request;

    if (name) {
      const navers = await connection('navers')
        .where('user_id', userId)
        .where({ name })
        .select('navers.*');

      return response.json(navers);
    }

    const navers = await connection('navers')
      .where({ user_id: userId })
      .select('navers.*');

    return response.json(navers);
  },

  delete: async (request, response) => {
    const { id } = request.params;
    const { userId } = request;

    const naver = await connection('navers')
      .where({ id })
      .select('user_id')
      .first();

    if (!naver) {
      return response.status(404).json({ Message: 'naver not found!' });
    }

    if (naver.user_id !== userId) {
      return response.status(401).json({ Message: 'Operation not permitted!' });
    }
    await connection('project_naver').where('naver_id', id).delete();
    await connection('navers').where({ id }).delete();

    return response.status(204).send();
  },
};

export default naverController;
