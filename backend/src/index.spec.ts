import server from './index';
import request from 'supertest';

describe('respond with status 200', ()=>
{
	test('should respond with 200 status code', async ()=>
	{
		const response = await request(server).post('/todos').send({
			title: 'Backend Jest test'
		});

		expect(response.statusCode).toBe(200);
	});
});
