import * as Yup from 'yup';
import connection from '../Database/connection';

const userController = {
  store: async (request, response) => {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(401).json({ ERROR: 'validations fail' });
    }

    const { name, email, password } = request.body;

    const userExists = await connection('users').where('email', email).first();

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
