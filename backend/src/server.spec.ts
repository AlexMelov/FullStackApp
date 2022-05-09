import supertest, { Response } from 'supertest';
import mongoose from 'mongoose';
import { server } from './server.js';
import { Body } from './server.interface.js';
import { User } from './models/user.interface';
import { TestTodo } from './models/todo';
import environment from './environments/environment';

describe('Server', () =>
{
	beforeAll(async() => await mongoose.connect(process.env.DB_URL));

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
		const response : Response = await supertest(server).post('/todos').send(
		{
			title : 'Todo from Jest!'
		});
		const body : Body = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.title).toContain('Todo from Jest!');
	});

	it('Should GET last added todo from list and delete it', async() =>
	{
		const response : Response = await supertest(server).get('/todos');
		const body : TestTodo[] = await response.body;

		expect(response.statusCode).toBe(200);
		expect(body).not.toHaveLength(0);
		const todoArray : TestTodo[] = body.filter(todo => todo.title === 'Todo from Jest!' );

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
		const body : Body = await response.body;

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

	it('Should register new user and delete it', async() =>
	{
		const response : Response = await supertest(server).post(environment.apiRoutes.register).send(
		{
			email : 'jest.email@mail.com',
			password : '123456'
		});
		const body : User = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.email).toContain('jest.email@mail.com');
		expect(body.password).not.toHaveLength(0);

		const { _id } = response.body;

		await supertest(server).delete('/register/' + _id).then(user =>
		{
			expect(user.statusCode).toBe(200);
			expect(user.body).toEqual(
			{
				acknowledged: true,
				deletedCount: 1
			});
		});
	});

	it('Should register new user, try to register with same user, ' +
		'return 403 status code and delete the created one', async() =>
	{
		const response : Response = await supertest(server).post('/register').send(
		{
			email : 'jest_repeat.email@mail.com',
			password : '123456'
		});
		const body : User = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.email).toContain('jest_repeat.email@mail.com');
		expect(body.password).not.toHaveLength(0);

		const repeatedUserResponse : Response = await supertest(server)
			.post('/register')
			.send(
			{
				email : 'jest_repeat.email@mail.com',
				password : '123456'
			});

		expect(repeatedUserResponse.statusCode).toBe(403);

		const { _id } = response.body;

		await supertest(server).delete('/register/' + _id).then(user =>
		{
			expect(user.statusCode).toBe(200);
			expect(user.body).toEqual(
			{
				acknowledged: true,
				deletedCount: 1
			});
		});
	});

	it('Should get token from login', async() =>
	{
		const response : Response = await supertest(server).post('/register').send(
		{
			email : 'jestForLogin.email@mail.com',
			password : '123456'
		});
		const body : User = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.email).toContain('jestForLogin.email@mail.com');
		expect(body.password).not.toHaveLength(0);

		const loginResponse : Response = await supertest(server).post('/login').send(
		{
			email : 'jestForLogin.email@mail.com',
			password : '123456'
		});
		const { token } = loginResponse.body;

		expect(token).toBeTruthy();
		expect(token).not.toHaveLength(0);

		const { _id } = response.body;

		await supertest(server).delete('/register/' + _id).then(user =>
		{
			expect(user.statusCode).toBe(200);
			expect(user.body).toEqual(
			{
				acknowledged: true,
				deletedCount: 1
			});
		});
	});

	afterAll(() => mongoose.connection.close(true));
});
