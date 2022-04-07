import supertest, { Response } from 'supertest';
import mongoose from 'mongoose';
import { server } from './server.js';

let todoId : string;

describe( 'Server', () =>
{
	it('should GET all todos from /todos', async() =>
	{
		const response : Response = await supertest(server).get('/todos');

		expect(response.statusCode).toBe(200);
	});

	it('should POST todo on route /todos', async() =>
	{
		const response : Response = await supertest(server).post('/todos')
			.send({ title : 'Todo From Jest!' }).expect(200);
		const sendedData : {title : string, _id : string} = await response.body;

		todoId = await sendedData._id;
		expect(response.headers).toBeDefined();
		expect(sendedData.title).toContain('Todo From Jest!');
		expect(sendedData._id).toContain(todoId);
	});

	it('should DELETE /todos/lastTodo ', async() =>
	{
		const response : Response = await supertest(server).delete(`/todos/${todoId}`);

		expect(response.statusCode).toEqual(200);
	});

	afterAll(done =>
	{
		mongoose.connection.close();
		done();
	});
});
