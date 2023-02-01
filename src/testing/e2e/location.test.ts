import request from 'supertest';
import { app } from '../../index';
import { HTTP_STATUS } from '../../utils/constants';

describe('Location route', () => {
	it('get locations', async () => {
		const result = await request(app).get(`/location/`);
		expect(result.status).toEqual(HTTP_STATUS.OK);
		expect(result.body.response).toBeDefined();
	});

	it('get sigle locations', async () => {
		const result = await request(app).get(`/location/1`);
		expect(result.status).toEqual(HTTP_STATUS.OK);
		expect(result.body.response).toBeDefined();
	});

	it('invalid id', async () => {
		const result = await request(app).get(`/location/23423`);
		expect(result.status).toEqual(HTTP_STATUS.INTERNAL_ERROR);
	});
});
