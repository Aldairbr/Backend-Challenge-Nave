/* eslint-disable no-throw-literal */
import connection from '../Database/connection';

export const getProject = async (id, userId) => {
  const project = await connection('projects')
    .where({ id })
    .where({ user_id: userId })
    .select('id', 'name')
    .first();
  if (!project) {
    throw 'project not found';
  }

  return project;
};

export const getNaverProjectInf = async (id) => {
  const navers = await connection('navers')
    .innerJoin('project_naver', 'navers.id', 'project_naver.naver_id')
    .innerJoin('projects', 'projects.id', 'project_naver.project_id')
    .where('project_naver.project_id', id)
    .select('navers.*');

  return navers;
};

export const projectExists = async (id) => {
  const project = await connection('projects')
    .where({ id })
    .select('user_id')
    .first();

  return project;
};

export const delProjectById = async (id) => {
  const destroyProject = await connection('projects').where({ id }).delete();

  return destroyProject;
};
