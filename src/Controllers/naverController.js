import connection from '../Database/connection';
import { naverSchema } from '../Validations/validations';
import {
  getNaver,
  getProjectNaverInf,
  naverExists,
  delNaverById,
  delProjectNaverById,
  naverFilter,
  getUpdatedNaver,
} from '../Services/naverServices';

const naverController = {
  Store: async (request, response) => {
    const { userId } = request;

    if (!(await naverSchema.isValid(request.body))) {
      return response.status(401).json({ ERROR: 'validations fail' });
    }

    const { name, birthdate, admissionDate, jobRole, projects } = request.body;
    const data = {
      name,
      birthdate,
      admissionDate,
      jobRole,
      user_id: userId,
    };

    const insertedId = await connection('navers').insert(data).returning('id');

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

  Show: async (request, response) => {
    const { id } = request.params;
    const { userId } = request;
    try {
      const naver = await getNaver(id, userId);

      if (!naver) {
        return response.status(404).json({ Message: 'Naver not found!' });
      }
      const projects = await getProjectNaverInf(id, userId);

      return response.json({ ...naver, projects });
    } catch (error) {
      return response.json({ error });
    }
  },

  Index: async (request, response) => {
    const { name, admissionDate, jobRole } = request.query;
    const { userId } = request;

    try {
      const navers = await naverFilter(userId, name, admissionDate, jobRole);

      return response.json(navers);
    } catch (error) {
      return response.json({ error });
    }
  },

  Delete: async (request, response) => {
    const { id } = request.params;
    const { userId } = request;

    try {
      const naver = await naverExists(id);

      if (!naver) {
        return response.status(404).json({ Message: 'naver not found!' });
      }

      if (naver.user_id !== userId) {
        return response
          .status(401)
          .json({ Message: 'Operation not permitted!' });
      }

      await delNaverById(id);

      return response.status(204).send();
    } catch (error) {
      return response.status(401).json({ error });
    }
  },

  Update: async (request, response) => {
    const { userId } = request;
    const { id } = request.params;

    const { name, birthdate, admissionDate, jobRole, projects } = request.body;

    if (!(await naverSchema.isValid(request.body))) {
      return response.status(401).json({ ERROR: 'validations fail' });
    }
    const naver = { name, birthdate, admissionDate, jobRole };

    try {
      const updatedNaver = await getUpdatedNaver(
        userId,
        id,
        name,
        birthdate,
        admissionDate,
        jobRole
      );
      if (!updatedNaver) {
        return response.status(400).json({ ERROR: 'UPDATE ERROR' });
      }

      const projectNaver = projects.map((projectId) => {
        return {
          naver_id: id,
          project_id: projectId,
        };
      });

      await delProjectNaverById(id);
      await connection('project_naver').insert(projectNaver);

      return response.json({
        ...naver,
        projects,
      });
    } catch (error) {
      return response.status(401).json({ error: 'update Error' });
    }
  },
};

export default naverController;
