import { Router } from 'express';
import loginRouter from './login';

const routes = Router();

routes.use('/login', loginRouter);

export default routes;
