import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const loginRouter = Router();

loginRouter.post('', async (req, res) => {
	try {
		const { email, password } = req.body;

		// Validate user input
		if (!(email && password)) {
			res.status(400).send('All input is required');
		}
		// Validate if user exist in our database
		const [user] = await dbConnection.promise().query(`SELECT * FROM user WHERE user.email = "${email}"`);
		if (user[0] && (await bcrypt.compare(password, user[0].password))) {
			// Create token
			const token = jwt.sign({ user_id: user[0].id, email }, 'TOKEn que debe estar en el env', {
				expiresIn: '2h',
			});

			// save user token
			user[0].token = token;
			await dbConnection.promise().query(`UPDATE user SET connected = 1 WHERE id = '${user[0].id}'`);
			// user
			res.status(200).send(user[0]);
		} else res.status(400).send('Invalid Credentials');
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);
	}
});

export default loginRouter;
