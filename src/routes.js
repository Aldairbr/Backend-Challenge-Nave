import { Router } from 'express';

import userController from './Controllers/userController';

import loginController from './Controllers/loginController';

import naverController from './Controllers/naverController';

import projectController from './Controllers/projectController';

import authMidleware from './Midlewares/userAuth';

const routes = new Router();

routes.post('/signup', userController.Store);
routes.post('/login', loginController.Store);

routes.use(authMidleware);

routes.get('/navers', naverController.Index);
routes.post('/navers', naverController.Store);
routes.get('/navers/:id', naverController.Show);
routes.delete('/navers/:id', naverController.Delete);
// routes.put('/navers/:id', naverController.Update);

routes.get('/projects', projectController.Index);
routes.post('/projects', projectController.Store);
routes.get('/projects/:id', projectController.Show);
routes.delete('/projects/:id', projectController.Delete);
// routes.put('/projects/:id', projectController.Update);

export default routes;
