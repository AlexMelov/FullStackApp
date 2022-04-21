import supertest, { Response } from 'supertest';
import mongoose from 'mongoose';
import { server } from './server.js';
import { Body } from './server.interface.js';

describe('Server', () =>
{
	it('should GET root', async() =>
	{
		const response : Response = await supertest(server).get('/');

		expect(response.statusCode).toBe(404);
	});

	it('should GET all todos', async() =>
	{
		const response : Response = await supertest(server).get('/todos');
		const body : Body[] = await response.body;

		expect(response.statusCode).toBe(200);
		expect(body).not.toHaveLength(0);
		expect(body.forEach(todo =>
		{
			expect(todo.title).toBeTruthy();
		}));
	});

	it('should CREATE a todo', async() =>
	{
		const response : Response = await supertest(server).post('/todos').send({ title : 'Todo from Jest!' });
		const body : Body = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.title).toContain('Todo from Jest!');
	});

	it('should DELETE todo', async() =>
	{
		const response : Response = await supertest(server).post('/todos').send({ title : 'Todo for delete from Jest!' });
		const body : Body = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.title).toContain('Todo for delete from Jest!');

		const deleteResponse : Response = await supertest(server).delete('/todos/' + body._id);

		expect(deleteResponse.statusCode).toBe(200);
		expect(deleteResponse.body).toEqual(
			{
				acknowledged:true, deletedCount:1
			});
	});

	afterAll(() => mongoose.connection.close());
});
