import { Router } from 'express';

import userController from './Controllers/userController';
import loginController from './Controllers/loginController';

const routes = new Router();

routes.post('/signup', userController.store);
routes.post('/login', loginController.store);

export default routes;
