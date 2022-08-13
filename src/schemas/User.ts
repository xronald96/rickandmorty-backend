import { Schema, model } from 'mongoose';
import { UserEntity } from '../types/UserEntity';


const userSchema = new Schema<UserEntity>({
	_id: { type: String, required: false },
	name: { type: String, required: true },
	surname: { type: String, required: true },
	email: { type: String, required: true },
	birthday: { type: String, required: true },
	password: { type: String, required: true },
	phone: { type: String, required: true },
	token: { type: String, required: false },
});

export default model<UserEntity>('User', userSchema);
