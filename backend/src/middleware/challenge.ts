import { NextFunction, Request, Response } from 'express';
import { sendLoginMail } from '../controllers/mailer.js';

const store : Map<string, number> = new Map();
// todo: move this to spec file
const testEmail : string = 'test@test.com';
const testChallenge : number = 1234;
const testForDestroy : string = 'jest.test@mail.com';

store.set(testEmail, testChallenge);
store.set(testForDestroy, testChallenge);

//todo set error handling if user and pass are not correct not to send mails

export function challengeMiddleware(request : Request, response : Response, next : NextFunction) : void
{
	const { email, challenge } = request.body;

	// todo: validate email and password against database
	if (!challenge)
	{
		const createdChallenge : number = createChallenge();

		store.set(email, createdChallenge);
		sendLoginMail(email, createdChallenge);

		response.status(200).json(
		{
			name: 'request-challenge'
		});
	}
	else
	{
		next();
	}
}

function createChallenge() : number
{
	return Math.floor(Math.random() * (10000 - 1001) + 1001);
}
