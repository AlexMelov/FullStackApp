import supertest, { Response } from 'supertest';
import { server } from '../server';
import environment from '../environments/environment';
import { User } from '../models/user.interface';
import mongoose from 'mongoose';
import { store } from '../middleware/register.middleware';

describe('Should test user registration', ()=>
{
	beforeAll(async() => await mongoose.connect(process.env.DB_URL));

	it('Should register new user and delete it', async() =>
	{
		await supertest(server).post(environment.apiRoutes.register).send(
		{
			email : 'jest.email@mail.com',
			password : '123456'
		});
		const response : Response = await supertest(server).post(environment.apiRoutes.register).send(
			{
				email : 'jest.email@mail.com',
				password : '123456',
				challenge : store.get('jest.email@mail.com')
			});
		const body : User = await response.body;

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(body.email).toContain('jest.email@mail.com');
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

	it('Should register new user, try to register with same user, ' +
		'return 403 status code and delete the created one', async() =>
	{
		await supertest(server).post(environment.apiRoutes.register).send(
		{
			email : 'jest_repeat.email@mail.com',
			password : '123456'
		});
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
				password : '123456',
				challenge : store.get('jest_repeat.email@mail.com')
			});

		const { _id } = response.body;

		expect(repeatedUserResponse.statusCode).toBe(403);

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
