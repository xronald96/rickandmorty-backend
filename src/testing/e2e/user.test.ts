import request from 'supertest';
import { app, server } from '../../index';
import { disconnect } from 'mongoose';
import { newUser } from '../mocks/userMocks';
import User from '../../schemas/User';
describe('User rout', () => {
    beforeEach(()=>{
        jest.setTimeout(100000)
    })
	beforeAll(async () => {
		await User.deleteMany();
	});
	afterAll(async () => {
		server.close();
		await disconnect();
	});
	it('create new user', async () => {
		await request(app)
			.post('/user')
			.send(newUser)
			.expect(201)
			.expect('Content-Type', /application\/json/);
        expect(await User.findOne({email: newUser.email})).toBeDefined()
	});
});
