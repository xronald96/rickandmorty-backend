import { Router } from 'express';
import { createUser } from '../controllers/user';
const userRouter = Router();

userRouter.post('/register', async (req, res) => {
    const response = await createUser(req.body)
    res.status(response.status).send(response)
});

export default userRouter;