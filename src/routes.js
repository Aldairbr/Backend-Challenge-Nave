import { Router } from 'express';

import userController from './Controllers/userController';

import loginController from './Controllers/loginController';

import naverController from './Controllers/naverController';

import projectController from './Controllers/projectController';

import authMidleware from './Midlewares/userAuth';

const routes = new Router();

routes.post('/signup', userController.store);
routes.post('/login', loginController.store);

routes.use(authMidleware);

routes.post('/navers', naverController.store);
routes.get('/navers', naverController.index);
routes.get('/navers/:id', naverController.show);
routes.delete('/navers/:id', naverController.delete);

routes.get('/projects', projectController.index);
routes.get('/projects', projectController.show);
routes.post('/projects', projectController.Store);

export default routes;
