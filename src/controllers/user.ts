import User from '../schemas/User';
import { CreateErrorResponse, CreateSuccessResponse } from '../utils/responses';
import bcrypt from 'bcryptjs';
import { ErrorResponse, SuccessResponse } from '../types/Responses';
import { UserEntity } from '../types/UserEntity';


const createUser = async ({ name, surname, email, password, phone }: UserEntity): Promise<SuccessResponse | ErrorResponse> => {
	try {
		if (!(email && password && name && surname && phone)) return CreateErrorResponse(400, 'All input is required');

		const user = await User.findOne({ email }).exec();

		if (user) return CreateErrorResponse(409, 'User Already Exist. Please Login');

		const encryptedPassword = await bcrypt.hash(password, 10);
		const newUser = await User.create({ name, surname, email, password: encryptedPassword, phone })
        
		return CreateSuccessResponse(201, newUser)
	} catch (err) {
		return CreateErrorResponse(500, 'Internal Error');
	}
};

export { createUser };
