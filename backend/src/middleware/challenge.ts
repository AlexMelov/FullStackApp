import { NextFunction, Request, Response } from 'express';
import { sendLoginMail } from '../controllers/mailer.js';
import { userModel } from '../models/user.schema.js';
import { compareSync } from 'bcrypt';

const store : Map<string, number> = new Map();
// todo: move this to spec file
const testEmail : string = 'test@test.com';
const testChallenge : number = 1234;
const testForDestroy : string = 'jest.test@mail.com';

store.set(testEmail, testChallenge);
store.set(testForDestroy, testChallenge);

export function challengeMiddleware(request : Request, response : Response, next : NextFunction) : void
{
	const { email, challenge, password } = request.body;

	userModel.findOne(
		{
			email
		})
		.then(user =>
		{
			return { compare: compareSync(password, user.password), user };
		}).then(result =>
		{
			if (result.compare)
			{
				if (!challenge)
				{
					const createdChallenge : number = createChallenge();

					store.set(email, createdChallenge);
					sendLoginMail(email, createdChallenge);

					response.status(200).json(
						{
							action: 'request-challenge'
						});
				}
				else
				{
					next();
				}
			}
			else
			{
				response.status(401).json((error : Error) =>error.message);
			}
		}).catch((error : Error) => error.message);
}

function createChallenge() : number
{
	return Math.floor(Math.random() * (10000 - 1001) + 1001);
}
