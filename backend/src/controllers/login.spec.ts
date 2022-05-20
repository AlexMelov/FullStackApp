import supertest, { Response } from 'supertest';
import { server } from '../server';
import mongoose from 'mongoose';
import environment from '../environments/environment';
import { store } from '../middleware/login.js';

describe('Should test login', () =>
{
	beforeAll(async() => await mongoose.connect(process.env.DB_URL));

	it('Should create challenge', async() =>
	{
		const response : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email: 'test@test.com',
			password: '123456789'
		});
		const { token, action } = response.body;

		expect(token).not.toBeTruthy();
		expect(action).toBe('request-challenge');
		expect(response.statusCode).toBe(200);
	});

	it('Should check login with valid challenge', async() =>
	{
		const response : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email: 'test@test.com',
			password: '123456789',
			challenge: store.get('test@test.com')
		});
		const { token } = response.body;

		expect(token).toBeTruthy();
		expect(response.statusCode).toBe(200);
	});

	it('Should check login with invalid challenge #1', async() =>
	{
		const response : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email: 'test@test.com',
			password: '123456789',
			challenge: 9999
		});
		const { token, action } = response.body;

		expect(token).not.toBeTruthy();
		expect(action).not.toBeTruthy();
		expect(response.statusCode).toBe(401);
	});

	it('Should check login with invalid challenge #2', async() =>
	{
		const response : Response = await supertest(server).post(environment.apiRoutes.login).send(
		{
			email: 'test@test.com',
			password: '123456789',
			challenge: '9999'
		});
		const { token, action } = response.body;

		expect(token).not.toBeTruthy();
		expect(action).not.toBeTruthy();
		expect(response.statusCode).toBe(401);
	});

	afterAll(() => mongoose.connection.close(true));
});
