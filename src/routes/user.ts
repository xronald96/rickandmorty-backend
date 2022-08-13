import { Router } from 'express';
import { createUser } from '../controllers/user';
const userRouter = Router();

userRouter.post('/', async (req, res) => {
    const response = await createUser(req.body)
    res.status(response.status).json(response)
});

userRouter.get('/', (_req, res)=> {
    res.send('hola')
})
export default userRouter;