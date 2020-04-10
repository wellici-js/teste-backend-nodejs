import { Router } from 'express';

import HomeController from '../app/controllers/HomeController';

const routes = new Router();

routes.use('/v1', HomeController.index);

export default routes;
