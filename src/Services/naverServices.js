/* eslint-disable import/prefer-default-export */
import connection from '../Database/connection';

export const getNaver = async (id, userId) => {
  const naver = await connection('navers')
    .where({ id })
    .where({ user_id: userId })
    .select('navers.*')
    .first();

  return naver;
};

export const getProjectNaverInf = async (id) => {
  const projects = await connection('navers')
    .innerJoin('project_naver', 'navers.id', 'project_naver.naver_id')
    .innerJoin('projects', 'projects.id', 'project_naver.project_id')
    .where('project_naver.naver_id', id)
    .select('projects.id', 'projects.name');

  return projects;
};

export const naverExists = async (id) => {
  const naver = await connection('navers')
    .where({ id })
    .select('navers.user_id')
    .first();

  return naver;
};

export const delNaverById = async (id) => {
  const destroyNaver = await connection('navers').where({ id }).delete();

  return destroyNaver;
};
