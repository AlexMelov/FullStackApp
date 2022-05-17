import supertest, { Response } from 'supertest';
import { server } from '../server';
import mongoose from 'mongoose';
import environment from '../environments/environment';

describe('Should test login', () =>
{
	beforeAll(async() => await mongoose.connect(process.env.DB_URL));

	it('Should get token from login', async() =>
	{
		const loginResponse : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email : 'test@test.com',
			password : '123456789',
			challenge : 1234
		});
		const { token } = loginResponse.body;

		expect(token).toBeTruthy();
		expect(token).not.toHaveLength(0);
	});

	it('Should check login with wrong challenge', async() =>
	{
		const loginResponse : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email : 'test@test.com',
			password : '123456789',
			challenge: 1233
		});

		expect(loginResponse.statusCode).toBe(403);
	});

	it('Should check login without challenge', async() =>
	{
		const loginResponse : Response = await supertest(server).post(environment.apiRoutes.login).send(
			{
				email : 'test@test.com',
				password : '123456789'
			});

		expect(loginResponse.statusCode).toBe(403);
	});

	afterAll(() => mongoose.connection.close(true));
});