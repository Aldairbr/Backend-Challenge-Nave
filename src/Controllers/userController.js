import connection from '../Database/connection';
import { userSchema } from '../Validations/validations';

const userController = {
  Store: async (request, response) => {
    if (!(await userSchema.isValid(request.body))) {
      return response.status(401).json({ ERROR: 'validations fail' });
    }

    const { name, email, password } = request.body;

    const userExists = await connection('users').where({ email }).first();

    if (userExists) {
      return response.status(401).json({ Error: 'User already exists' });
    }

    await connection('users').insert({
      name,
      email,
      password,
    });

    return response.json({ name, email, password });
  },
};

export default userController;
