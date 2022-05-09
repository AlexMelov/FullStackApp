import supertest, { Response } from 'supertest';
import { server } from '../server';
import { User } from '../models/user.interface.js';
import mongoose from 'mongoose';

describe('Should test login', () =>
{
	beforeAll(async() => await mongoose.connect(process.env.DB_URL));

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
