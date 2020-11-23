import { Router } from 'express';

import herosRouter from './heros.routes';

const routes = Router();

routes.use('/heros', herosRouter);

export default routes;
