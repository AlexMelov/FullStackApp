import supertest, { Response } from 'supertest';
import { server } from './server.js';

describe( 'Server', () =>
{
	it('GET /todos', async() =>
	{
		const response : Response = await supertest(server).get('/todos');

		expect(response.status).toBe(200);
	});
});
