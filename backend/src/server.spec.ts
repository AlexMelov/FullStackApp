import supertest, { Response } from 'supertest';
import mongoose from 'mongoose';
import { server } from './server.js';

let todoId : string;

describe( 'Server', () =>
{
	it('GET /todos', async() =>
	{
		const response : Response = await supertest(server).get('/todos');

		expect(response.statusCode).toBe(200);
	});

	it('POST /todos', async() =>
	{
		const response : Response = await supertest(server).post('/todos')
			.send({ title : 'Todo From Jest!' }).expect(200);
		const sendedData : {title : string, _id : string} = await response.body;

		todoId = await sendedData._id;
		expect(response.headers).toBeDefined();
		expect(sendedData.title).toContain('Todo From Jest!');
		expect(sendedData._id).toContain(todoId);
	});

	afterAll(done =>
	{
		mongoose.connection.close();
		done();
	});
});
