import connection from '../Database/connection';

const naverController = {
  store: async (request, response) => {
    const { userId } = request;
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

    const projectNaver = projects.map((projectId) => {
      return {
        naver_id: insertedId[0],
        projectId,
      };
    });

    await connection('project_naver').insert(projectNaver);

    return response.json({
      name,
      birthdate,
      admissionDate,
      jobRole,
      projectNaver,
    });
  },
};
export default naverController;
