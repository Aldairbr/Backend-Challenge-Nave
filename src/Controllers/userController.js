import connection from '../Database/connection';
import { userSchema } from '../Validations/validations';
import { generatePasswordHashed } from '../Services/userServices';

const userController = {
  Store: async (request, response) => {
    if (!(await userSchema.isValid(request.body))) {
      return response.status(401).json({ ERROR: 'validations fail' });
    }

    const { name, email, password } = request.body;

    const passwordHashed = generatePasswordHashed(password);
    const userExists = await connection('users').where({ email }).first();

    if (userExists) {
      return response.status(401).json({ Error: 'User already exists' });
    }

    await connection('users').insert({
      name,
      email,
      password: passwordHashed,
    });

    return response.json({ name, email, passwordHashed });
  },
};

export default userController;
