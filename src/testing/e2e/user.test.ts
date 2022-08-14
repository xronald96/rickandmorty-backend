import request from 'supertest';
import { app } from '../../index';
import { disconnect } from 'mongoose';
import { newUser } from '../mocks/userMocks';
import User from '../../schemas/User';
import { populateDb } from '../utils/populateDB';
//Lo que falla en github en la conexion base de datos
describe('User route', () => {
	let idUser = '';
	beforeEach(async () => {
		jest.setTimeout(10000);
	});

	beforeAll(async () => {
		await populateDb()
		await User.deleteMany().exec();
	});

	afterAll(async () => {
		await User.deleteMany().exec();
		await disconnect();
	});

	it('create new user', async () => {
		const result = await request(app).post('/user').send(newUser);
		expect(result.status).toEqual(201);
		idUser = result.body?.response?._id;
		expect(await User.findById(idUser).exec()).toBeDefined();
	});

	it('get user by id', async () => {
		const result = await request(app).get(`/user/${idUser}`);
		expect(result.status).toEqual(200);
		expect(result.body.response).toBeDefined();
	});
});
