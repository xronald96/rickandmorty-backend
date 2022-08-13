import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../schemas/User';
import { ErrorResponse, SuccessResponse } from '../types/Responses';
import { LOCAL_URI_DB } from '../utils/constsnts';
import { CreateErrorResponse, CreateSuccessResponse } from '../utils/responses';

// eslint-disable-next-line @typescript-eslint/ban-types
export const login = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}): Promise<SuccessResponse | ErrorResponse> => {
	try {
		if (!(email && password)) return CreateErrorResponse(400, 'All input is required');

		const user = await User.find({ email }).exec();
		if (user[0] && (await bcrypt.compare(password, user[0].password))) {
			const token = jwt.sign({ user_id: user[0]._id, email }, process.env.JWT_TOKEN || LOCAL_URI_DB, {
				expiresIn: '2h',
			});
			user[0].token = token;
			return CreateSuccessResponse(200, user[0]);
		} else return CreateErrorResponse(400, 'Invalid Credentials');
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);
		return CreateErrorResponse(500, 'Internal error');
	}
};
