import request from 'supertest';
import { app } from '../../index';
import { HTTP_STATUS } from '../../utils/constants';

describe('Episode route', () => {
	it('get episodes', async () => {
		const result = await request(app).get(`/episode/`);
		expect(result.status).toEqual(HTTP_STATUS.OK);
		expect(result.body.response).toBeDefined();
	});

	it('get sigle episodes', async () => {
		const result = await request(app).get(`/episode/1`);
		expect(result.status).toEqual(HTTP_STATUS.OK);
		expect(result.body.response).toBeDefined();
	});

	it('invalid id', async () => {
		const result = await request(app).get(`/episode/null`);
		expect(result.status).toEqual(HTTP_STATUS.INTERNAL_ERROR);
	});
});
