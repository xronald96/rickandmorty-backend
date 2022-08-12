import { Schema, model } from 'mongoose';
interface IUser {
	_id: string,
	name: string;
	surname: string;
	email: string;
	birthday: string;
	password: string;
	token: string;
	phone: string;
}

const userSchema = new Schema<IUser>({
	_id: { type: String, required: false },
	name: { type: String, required: true },
	surname: { type: String, required: true },
	email: { type: String, required: true },
	birthday: { type: String, required: true },
	password: { type: String, required: true },
	phone: { type: String, required: true },
	token: { type: String, required: false },
});

export default model<IUser>('User', userSchema);
