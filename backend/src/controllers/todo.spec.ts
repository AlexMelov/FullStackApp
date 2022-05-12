import supertest, { Response } from 'supertest';
import mongoose from 'mongoose';
import { server } from '../server';
import { DirtyTodo, TestTodo } from '../models/todo';
import environment from '../environments/environment';

describe('Todos', () =>
{
	let recievedToken : string;

	beforeAll(async() =>
	{
		await mongoose.connect(process.env.DB_URL);
		const loginResponse : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email : process.env.TEST_EMAIL,
			password : process.env.TEST_PASSWORD
		});
		const { token } = loginResponse.body;

		recievedToken = token;
	});

	it('Should Test if the routes are protected', async() =>
	{
		const response : Response = await supertest(server).get(environment.apiRoutes.login);
		const { Authorization } = response.headers;

		expect(response.statusCode).toBe(404);
		expect(Authorization).not.toBeDefined();
	});

	it('should GET all todos', async() =>
	{
		const response : Response = await supertest(server).get(environment.apiRoutes.todos).set('Authorization', 'Bearer ' + recievedToken);
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
		await supertest(server).post(environment.apiRoutes.login).send(
		{
			email : 'jest.test.user@express.com',
			password : '123456789'
		});
		const response : Response = await supertest(server).post(environment.apiRoutes.todos).send(
		{
			title : 'Todo from Jest!'
		}).set('Authorization', 'Bearer ' + recievedToken);
		const body : DirtyTodo = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.title).toContain('Todo from Jest!');
	});

	it('Should GET last added todo from list and delete it', async() =>
	{
		const response : Response = await supertest(server).get(environment.apiRoutes.todos).set('Authorization', 'Bearer ' + recievedToken);
		const body : TestTodo[] = await response.body;
		const todoArray : TestTodo[] = await body.filter(todo => todo.title === 'Todo from Jest!' );

		expect(response.statusCode).toBe(200);
		expect(body).not.toHaveLength(0);
		expect(body.forEach(todo =>
		{
			expect(todo.title).toBeTruthy();
		}));
		await supertest(server).delete(environment.apiRoutes.todos + '/' + todoArray[0].id).set('Authorization', 'Bearer ' + recievedToken).then(user =>
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
		}).set('Authorization', 'Bearer ' + recievedToken);
		const body : DirtyTodo = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.title).toContain('Todo for delete from Jest!');

		const deleteResponse : Response = await supertest(server).delete(environment.apiRoutes.todos + '/' + body._id).set('Authorization', 'Bearer ' + recievedToken);

		expect(deleteResponse.statusCode).toBe(200);
		expect(deleteResponse.body).toEqual(
		{
			acknowledged: true,
			deletedCount: 1
		});
	});

	afterAll(() => mongoose.connection.close(true));
});
