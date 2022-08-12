import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../schemas/User';

// eslint-disable-next-line @typescript-eslint/ban-types
export const login = async ({ email, password }: { email: string; password: string }): Promise<{ status: number; response: string | Object }> => {
	try {
		if (!(email && password)) return { status: 400, response: 'All input is required' };

		const user = await User.find({ email }).exec();
		if (user[0] && (await bcrypt.compare(password, user[0].password))) {
			const token = jwt.sign({ user_id: user[0]._id, email }, process.env.JWT_TOKEN || '', {
				expiresIn: '2h',
			});
			user[0].token = token;
			return { status: 200, response: user[0] };
		} else return { status: 400, response: 'Invalid Credentials' };
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);
        return { status: 500, response: 'Error interno' };
	}
};
