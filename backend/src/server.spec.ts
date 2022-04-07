import supertest from 'supertest';
import { server } from './server.js';

describe( 'Server', () =>
{
	it('GET /todos', async() =>
	{
		await supertest(server).get('/todos').expect(200);
	});
});
