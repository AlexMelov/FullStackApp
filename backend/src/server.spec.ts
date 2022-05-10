import supertest, { Response } from 'supertest';
import mongoose from 'mongoose';
import { server } from './server.js';

describe('Server', () =>
{
	beforeAll(async() => await mongoose.connect(process.env.DB_URL));

	it('should GET root', async() =>
	{
		const response : Response = await supertest(server).get('/');

		expect(response.statusCode).toBe(404);
	});

	afterAll(() => mongoose.connection.close(true));
});
