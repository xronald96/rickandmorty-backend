import { Router } from 'express';
import { login } from '../controllers/login'
const loginRouter = Router();

loginRouter.post('', async (req, res) => {
	const response = await login(req.body);
	res.status(response.status).send(response)
});

export default loginRouter;
