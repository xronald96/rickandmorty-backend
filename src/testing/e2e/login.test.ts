import request from 'supertest';
import { app } from '../../index';
import { disconnect } from 'mongoose';
import { newUser } from '../mocks/userMocks';
import User from '../../schemas/User';
import { encrypPassword } from '../../utils/password';

describe('Login route', () => {
	beforeAll(async () => {
		await User.deleteMany();
		const newUserTmp = await new User({...newUser , password: await encrypPassword(newUser.password)});
		await newUserTmp.save();
	});
	afterAll(async () => {
		await User.deleteMany();
		await disconnect();
	});
	it.only('login new user', async () => {
       await request(app)
			.post('/login')
			.send({ email: newUser.email, password: newUser.password })
			.expect(200)
			.expect('Content-Type', /application\/json/);
	});
});
