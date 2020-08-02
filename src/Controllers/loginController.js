import JWT from 'jsonwebtoken';

import authConfig from '../Config/auth';

import connection from '../Database/connection';

const loginController = {
  store: async (request, response) => {
    const { email, password } = request.body;

    const user = await connection('users')
      .where('users.email', email)
      .where('users.password', password)
      .first();

    if (!user) {
      return response.status(401).json({
        ERROR: 'Email or Password incorrects!',
      });
    }

    const { id, name } = user;

    return response.json({
      user: {
        id,
        name,
        email,
      },
      token: JWT.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  },
};

export default loginController;
