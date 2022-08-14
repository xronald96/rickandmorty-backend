import request from 'supertest';
import { app } from '../../index';
import { disconnect } from 'mongoose';
import { newUser } from '../mocks/userMocks';
import User from '../../schemas/User';
//Lo que falla en github en la conexion base de datos
describe('User route', () => {
	beforeAll(async () => {
		jest.setTimeout(10000);
		await User.deleteMany();
	});
	afterAll(async () => {
		User.deleteMany();
		disconnect();
	});
	it('create new user', async () => {
		await request(app)
			.post('/user')
			.send(newUser)
			.expect(201)
			.expect('Content-Type', /application\/json/);
		expect(await User.findOne({ email: newUser.email })).toBeDefined();
	});
});
