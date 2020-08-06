/* eslint-disable import/prefer-default-export */
import connection from '../Database/connection';

export const getUser = async (email, password) => {
  const user = await connection('users')
    .where({ email })
    .where({ password })
    .first();

  return user;
};
