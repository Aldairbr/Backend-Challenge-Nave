import connection from '../Database/connection';
import { projectSchema } from '../Validations/validations';
import {
  getNaverProjectInf,
  getProject,
  projectExists,
  delProjectById,
  delProjectNaverById,
  projectFilter,
  getUpdatedProject,
} from '../Services/projectServices';

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

    if (navers === undefined) {
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

  Index: async (request, response) => {
    const { userId } = request;
    const { name } = request.query;

    try {
      const projects = await projectFilter(userId, name);

      return response.json(projects);
    } catch (error) {
      return response.json({ error });
    }
  },

  Show: async (request, response) => {
    const { id } = request.params;
    const { userId } = request;

    try {
      const project = await getProject(id, userId);

      const navers = await getNaverProjectInf(id);

      return response.json({ ...project, navers });
    } catch (error) {
      return response.status(404).json({ error: 'Project not found!' });
    }
  },

  Delete: async (request, response) => {
    const { id } = request.params;
    const { userId } = request;

    try {
      const project = await projectExists(id);

      if (!project) {
        return response.status(404).json({ error: 'Project not found' });
      }

      if (project.user_id !== userId) {
        return response
          .status(401)
          .json({ error: 'Operation not  permitted.' });
      }

      await delProjectById(id);

      return response.status(204).send();
    } catch (error) {
      return response.status(401).json({ error });
    }
  },
  Update: async (request, response) => {
    const { userId } = request;
    const { id } = request.params;

    const { name, navers } = request.body;

    if (!(await projectSchema.isValid(request.body))) {
      return response.status(401).json({ ERROR: 'validations fail' });
    }
    try {
      const updatedProject = await getUpdatedProject(userId, id, name);

      if (!updatedProject) {
        return response.status(400).json({ ERROR: 'UPDATE ERROR' });
      }

      const projectNaver = navers.map((naverId) => {
        return {
          naver_id: naverId,
          project_id: id,
        };
      });

      await delProjectNaverById(id);
      await connection('project_naver').insert(projectNaver);
      return response.json({
        name,
        navers,
      });
    } catch (error) {
      return response.json({ error });
    }
  },
};

export default projectController;
