import { Router } from 'express';
import characterRouter from './character';
import episodeRouter from './episode';
import locationRouter from './location';
import loginRouter from './login';
import userRouter from './user';
const routes = Router();

routes.use('/login', loginRouter);
routes.use('/user', userRouter);
routes.use('/location', locationRouter);
routes.use('/episode', episodeRouter);
routes.use('/character', characterRouter)
export default routes;
