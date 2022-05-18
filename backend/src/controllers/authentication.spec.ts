import supertest, { Response } from 'supertest';
import { server } from '../server';
import mongoose from 'mongoose';
import environment from '../environments/environment';
import { store } from '../middleware/challenge.js';

describe('Should test login', () =>
{
	beforeAll(async() => await mongoose.connect(process.env.DB_URL));

	it('Should get token from login', async() =>
	{
		const response : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email : 'test@test.com',
			password : '123456789'
		});

		expect(response.statusCode).toBe(200);
	});

	it('Should check login with wrong challenge', async() =>
	{
		const loginResponse : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email : 'test@test.com',
			password : '123456789',
			challenge: store.get('test@test.com')
		});
		const { token } = loginResponse.body;

		expect(token).toBeTruthy();
		expect(loginResponse.statusCode).toBe(200);
	});

	it('Should check login without challenge', async() =>
	{
		const loginResponse : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email : 'test@test.com',
			password : '123456789'
		});
		const { token, action } = loginResponse.body;

		await expect(token).not.toBeTruthy();
		await expect(action).toBe( 'request-challenge');
		await expect(loginResponse.statusCode).toBe(200);
	});

	afterAll(() => mongoose.connection.close(true));
});
