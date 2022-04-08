import supertest, { Response } from 'supertest';
import mongoose from 'mongoose';
import { server } from './server.js';
import { Body } from './server.interface.js';

describe('Server', () =>
{
	afterAll(done =>
	{
		mongoose.connection.close().then(() => done()).catch(() => done('error'));
	});

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
		expect((body[0])._id).toBeDefined();
	});

	it('should CREATE a todo', async() =>
	{
		const response : Response = await supertest(server).post('/todos').send({ title : 'Todo from Jest!' });
		const body : Body = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.title).toContain('Todo from Jest!');
		await supertest(server).delete('/todos/' + body._id);
	});

	it('should not DELETE todo', async() =>
	{
		const responseCreate : Response = await supertest(server).post('/todos').send({ title : 'Todo from Jest!' });
		const bodyCreate : Body = await responseCreate.body;
		const responseDelete : Response = await supertest(server).delete('/todos/' + bodyCreate._id);

		expect(responseDelete.statusCode).toEqual(200);
	});

	it.skip('should not DELETE invalid todo', async() =>
	{
		const response : Response = await supertest(server).delete('/todos/123456');

		expect(response.statusCode).toEqual(404);
	});
});
