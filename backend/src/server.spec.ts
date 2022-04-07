import supertest, { Response } from 'supertest';
import mongoose from 'mongoose';
import { server } from './server.js';

describe( 'Server', () =>
{
	beforeAll(done => 
	{
		done();
	});
	it('GET /todos', async() =>
	{
		const response : Response = await supertest(server).get('/todos');

		expect(response.statusCode).toBe(200);
	});
	afterAll(done => 
	{
		mongoose.connection.close();
		done();
	});
});
