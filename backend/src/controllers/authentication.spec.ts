import supertest, { Response } from 'supertest';
import { server } from '../server';
import mongoose from 'mongoose';
import environment from '../environments/environment';
import { store } from '../middleware/challenge.js';

describe('Should test login', () =>
{
	beforeAll(async() => await mongoose.connect(process.env.DB_URL));

	it('Should check login without challenge', async() =>
	{
		const loginResponse : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email: 'test@test.com',
			password: '123456789'
		});
		const { token, action } = loginResponse.body;

		expect(token).not.toBeTruthy();
		expect(action).toBe('request-challenge');
		expect(loginResponse.statusCode).toBe(200);
	});

	it('Should check login with valid challenge', async() =>
	{
		const loginResponse : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email: 'test@test.com',
			password: '123456789',
			challenge: store.get('test@test.com')
		});
		const { token } = loginResponse.body;

		expect(token).toBeTruthy();
		expect(loginResponse.statusCode).toBe(200);
	});

	it('Should check login with invalid challenge', async() =>
	{
		const loginResponse : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email: 'test@test.com',
			password: '123456789',
			challenge: 9999
		});
		const { token, action } = loginResponse.body;

		expect(token).not.toBeTruthy();
		expect(action).not.toBeTruthy();
		expect(loginResponse.statusCode).toBe(401);
	});

	afterAll(() => mongoose.connection.close(true));
});
