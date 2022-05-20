import supertest, { Response } from 'supertest';
import { server } from '../server';
import environment from '../environments/environment';
import { User } from '../models/user.interface';
import mongoose from 'mongoose';
import { store } from '../middleware/register';

describe('Should test user registration', ()=>
{
	beforeAll(async() => await mongoose.connect(process.env.DB_URL));

	it('Should create challenge', async() =>
	{
		const response : Response = await supertest(server).post(environment.apiRoutes.register).send(
			{
				email : 'new@test.com',
				password : '123456'
			});
		const { action } = response.body;

		expect(response.statusCode).toBe(200);
		expect(action).toBe('request-challenge');
	});

	it('Should register new user and delete it', async() =>
	{
		const response : Response = await supertest(server).post(environment.apiRoutes.register).send(
		{
			email : 'new@test.com',
			password : '123456',
			challenge : store.get('new@test.com')
		});
		const body : User = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.email).toContain('new@test.com');
		expect(body.password).not.toHaveLength(0);

		const { _id } = response.body;

		await supertest(server).delete('/users/' + _id).then(user =>
		{
			expect(user.statusCode).toBe(200);
			expect(user.body).toEqual(
			{
				acknowledged: true,
				deletedCount: 1
			});
		});
	});
	it ('Should create challenge for new user', async() =>
	{
		const response : Response = await supertest(server).post(environment.apiRoutes.register).send(
		{
			email : 'jest_repeat.email@mail.com',
			password : '123456'
		});
		const { action } = response.body;

		expect(response.statusCode).toBe(200);
		expect(action).toBe('request-challenge');
	});

	it('Should try to register with the same user', async() =>
	{
		const response : Response = await supertest(server).post(environment.apiRoutes.register).send(
		{
			email : 'jest_repeat.email@mail.com',
			password : '123456',
			challenge : store.get('jest_repeat.email@mail.com')
		});
		const body : User = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.email).toContain('jest_repeat.email@mail.com');
		expect(body.password).not.toHaveLength(0);

		const repeatedUserResponse : Response = await supertest(server)
			.post(environment.apiRoutes.register)
			.send(
			{
				email : 'jest_repeat.email@mail.com',
				password : '123456'
			});

		const { _id } = response.body;

		expect(repeatedUserResponse.statusCode).toBe(401);

		await supertest(server).delete('/users/' + _id).then(user =>
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
