import JWT from 'jsonwebtoken';

import authConfig from '../Config/auth';
import { getUser } from '../Services/loginServices';

const loginController = {
  Store: async (request, response) => {
    const { email, password } = request.body;

    const user = await getUser(email, password);

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
