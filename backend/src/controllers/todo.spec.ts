import supertest, { Response } from 'supertest';
import mongoose from 'mongoose';
import { server } from '../server';
import { DirtyTodo, TestTodo } from '../models/todo.interface';
import { Token } from '../models/token.type';
import { store } from '../middleware/challenge';
import environment from '../environments/environment';

describe('Todos', () =>
{
	let token : Token;

	beforeAll(async() =>
	{
		await supertest(server).post(environment.apiRoutes.login).send(
		{
			email: 'test@test.com',
			password: '123456789'
		});
		const loginResponse : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email: 'test@test.com',
			password: '123456789',
			challenge: store.get('test@test.com')
		});

		token = await loginResponse.body;
		await mongoose.connect(process.env.DB_URL);
	});

	it('Should Test if the routes are protected', async() =>
	{
		const response : Response = await supertest(server).get(environment.apiRoutes.todos);

		expect(response.statusCode).toBe(401);
	});

	it('should GET all todos', async() =>
	{
		const response : Response = await supertest(server).get(environment.apiRoutes.todos).set('Authorization', 'Bearer ' + token.token);
		const body : DirtyTodo[] = await response.body;

		expect(response.statusCode).toBe(200);
		expect(body).not.toHaveLength(0);
		body.forEach(todo =>
		{
			expect(todo.title).toBeTruthy();
		});
	});

	it('should CREATE a todo', async() =>
	{
		const response : Response = await supertest(server).post(environment.apiRoutes.todos).send(
		{
			title : 'Todo from Jest!'
		})
		.set('Authorization', 'Bearer ' + token.token);
		const body : DirtyTodo = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.title).toContain('Todo from Jest!');
	});

	it('Should GET last added todo from list and delete it', async() =>
	{
		const response : Response = await supertest(server).get(environment.apiRoutes.todos).set('Authorization', 'Bearer ' + token.token);
		const body : TestTodo[] = await response.body;
		const todoArray : TestTodo[] = await body.filter(todo => todo.title === 'Todo from Jest!' );
		const todoId : string = todoArray[0].id;

		expect(response.statusCode).toBe(200);
		expect(body).not.toHaveLength(0);
		body.forEach(todo =>
		{
			expect(todo.title).toBeTruthy();
		});
		await supertest(server).delete(environment.apiRoutes.todos + '/' + todoId).set('Authorization', 'Bearer ' + token.token).then(user =>
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
		const response : Response = await supertest(server).post(environment.apiRoutes.todos).send(
		{
			title : 'Todo for delete from Jest!'
		})
		.set('Authorization', 'Bearer ' + token.token);
		const body : DirtyTodo = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.title).toContain('Todo for delete from Jest!');

		const deleteResponse : Response = await supertest(server).delete(environment.apiRoutes.todos + '/' + body._id).set('Authorization', 'Bearer ' + token.token);

		expect(deleteResponse.statusCode).toBe(200);
		expect(deleteResponse.body).toEqual(
		{
			acknowledged: true,
			deletedCount: 1
		});
	});

	afterAll(() => mongoose.connection.close(true));
});
