import supertest, { Response } from 'supertest';
import mongoose from 'mongoose';
import { server } from '../server';
import { DirtyTodo, TestTodo } from '../models/todo';

describe('Todos', () =>
{
	beforeAll(async() => await mongoose.connect(process.env.DB_URL));

	it('should GET all todos', async() =>
	{
		const response : Response = await supertest(server).get('/todos');
		const body : DirtyTodo[] = await response.body;

		expect(response.statusCode).toBe(200);
		expect(body).not.toHaveLength(0);
		expect(body.forEach(todo =>
		{
			expect(todo.title).toBeTruthy();
		}));
	});

	it('should CREATE a todo', async() =>
	{
		const response : Response = await supertest(server).post('/todos').send(
		{
			title : 'Todo from Jest!'
		});
		const body : DirtyTodo = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.title).toContain('Todo from Jest!');
	});

	it('Should GET last added todo from list and delete it', async() =>
	{
		const response : Response = await supertest(server).get('/todos');
		const body : TestTodo[] = await response.body;
		const todoArray : TestTodo[] = await body.filter(todo => todo.title === 'Todo from Jest!' );

		expect(response.statusCode).toBe(200);
		expect(body).not.toHaveLength(0);
		expect(body.forEach(todo =>
		{
			expect(todo.title).toBeTruthy();
		}));
		await supertest(server).delete('/todos/' + todoArray[0].id).then(user =>
		{
			expect(user.statusCode).toBe(200);
			expect(user.body).toEqual(
			{
				acknowledged: true,
				deletedCount: 1
			});
		});
	});

	it('should create and DELETE same todo', async() =>
	{
		const response : Response = await supertest(server).post('/todos').send(
		{
			title : 'Todo for delete from Jest!'
		});
		const body : DirtyTodo = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.title).toContain('Todo for delete from Jest!');

		const deleteResponse : Response = await supertest(server).delete('/todos/' + body._id);

		expect(deleteResponse.statusCode).toBe(200);
		expect(deleteResponse.body).toEqual(
		{
			acknowledged: true,
			deletedCount: 1
		});
	});

	afterAll(() => mongoose.connection.close(true));
});
