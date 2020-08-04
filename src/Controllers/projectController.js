import connection from '../Database/connection';
import { projectSchema } from '../Validations/validations';

const projectController = {
  Store: async (request, response) => {
    const { userId } = request;

    if (!(await projectSchema.isValid(request.body))) {
      return response.status(401).json({ ERROR: 'validations fails' });
    }

    const { name, navers } = request.body;

    const insertedId = await connection('projects')
      .insert({
        name,
        user_id: userId,
      })
      .returning('id');

    if (!navers) {
      return response.json({ name });
    }

    const projectNaver = navers.map((naverId) => {
      return {
        naver_id: naverId,
        project_id: insertedId[0],
      };
    });

    await connection('project_naver').insert(projectNaver);

    return response.json({
      name,
      navers,
    });
  },

  index: async (request, response) => {
    const { userId } = request;
    const { name } = request.query;

    if (!name) {
      const projects = await connection('projects')
        .where('user_id', userId)
        .select('id', 'name');

      return response.json(projects);
    }

    const projects = await connection('projects')
      .Where('user_id', userId)
      .Where({ name })
      .select('projects.id', 'projects.name');

    return response.json(projects);
  },

  show: async (request, response) => {
    const { id } = request.params;
    const { userId } = request;

    const project = await connection('projects')
      .where({ id })
      .where('user_id', userId)
      .select('id', 'name')
      .first();

    if (!project) {
      return response.status(400).json({ Message: 'project not found!' });
    }
    const navers = await connection('projects')
      .innerJoin('project_naver', 'projects.id', 'project_naver.project_id')
      .innerJoin('navers', 'navers.id', 'project_naver.naver_id')
      .where('project_naver.project_id', id)
      .select('navers.*');

    return response.json({ ...project, navers });
  },

  delete: async (request, response) => {
    const { id } = request.params;

    const { userId } = request.userId;

    const project = await connection('projects')
      .where('id', id)
      .select('user_id')
      .first();

    if (!project) {
      return response.status(404).json({ error: 'Project not found' });
    }
    if (project.user_id !== userId) {
      return response.status(401).json({ error: 'Operation not  permitted.' });
    }

    await connection('project_naver').where('project_id', id).delete();
    await connection('projects').where('id', id).delete();

    return response.status(204).send();
  },
};

export default projectController;
