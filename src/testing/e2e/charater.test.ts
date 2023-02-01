import request from 'supertest';
import { app } from '../../index';
import { HTTP_STATUS } from '../../utils/constants';

describe('Character route', () => {
	it('get characters', async () => {
		const result = await request(app).get(`/character/`);
		expect(result.status).toEqual(HTTP_STATUS.OK);
		expect(result.body.response).toBeDefined();
	});

	it('get sigle characters', async () => {
		const result = await request(app).get(`/character/1`);
		expect(result.status).toEqual(HTTP_STATUS.OK);
		expect(result.body.response).toBeDefined();
	});

	it('invalid id', async () => {
		const result = await request(app).get(`/character/null`);
		expect(result.status).toEqual(HTTP_STATUS.INTERNAL_ERROR);
	});
});
