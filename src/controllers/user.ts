import User from '../schemas/User';
import { CreateErrorResponse, CreateSuccessResponse } from '../utils/responses';
import bcrypt from 'bcryptjs';
import { ErrorResponse, SuccessResponse } from '../types/Responses';
import { UserEntity } from '../types/UserEntity';

const createUser = async ({
	name,
	surname,
	email,
	password,
	phone,
	birthday,
}: UserEntity): Promise<SuccessResponse | ErrorResponse> => {
	try {
		if (!(email && password && name && surname && phone && birthday))
			return CreateErrorResponse(400, 'All input is required');

		const user = await User.findOne({ email }).exec();

		if (user) return CreateErrorResponse(409, 'User Already Exist. Please Login');

		const encryptedPassword = await bcrypt.hash(password, 10);
		const newUser = await new User({ name, surname, email, password: encryptedPassword, phone, birthday });
		newUser.save();
		return CreateSuccessResponse(201, newUser);
	} catch (err) {
		return CreateErrorResponse(500, 'Internal Error', err);
	}
};

const getUserById = async (id: string) => {
	try {
		const user = await User.findById(id).exec();
		return CreateSuccessResponse(200, user);
	} catch (err) {
		return CreateErrorResponse(500, 'Internal Error', err);
	}
	
};

export { createUser, getUserById };
