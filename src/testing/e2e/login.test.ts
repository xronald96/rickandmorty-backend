import request from 'supertest';
import { app } from '../../index';
import { disconnect } from 'mongoose';
import { newUser } from '../mocks/userMocks';
import User from '../../schemas/User';
import { encrypPassword } from '../../utils/password';

describe('Login route', () => {
	beforeEach(async () => {
		jest.setTimeout(10000);
	});

	beforeAll(async () => {
		await User.deleteMany().exec();
	});

	afterAll(async () => {
		await User.deleteMany().exec();
		await disconnect();
	});

	it('login new user', async () => {
		const newUserTmp = await new User({ ...newUser, password: await encrypPassword(newUser.password) });
		await newUserTmp.save();
		await request(app)
			.post('/login')
			.send({ email: newUser.email, password: newUser.password })
			.expect(200)
			.expect('Content-Type', /application\/json/);
	});
});
