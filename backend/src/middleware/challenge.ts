import { NextFunction, Request, Response } from 'express';
import { sendLoginMail } from '../controllers/mailer.js';

const store : Map<string, number> = new Map();
//todo save the challenge into map
const testEmail : string = 'test@test.com';
const testChallenge : number = 1234;
const testForDestroy : string = 'jest.test@mail.com';

store.set(testEmail, testChallenge);
store.set(testForDestroy, testChallenge);

export function challengeMiddleware(request : Request, response : Response, next : NextFunction) : void
{
	//todo middleware procced when there is challenge in the request body
	//todo if there is no challenge you create new challenge and send the email
	//todo but you have to not create challenge if user and pass are incorrect
	const { email, challenge } = request.body;

	if (!challenge || store.get(email) !== challenge)
	{
		const createdChallenge : number = createChallenge();

		store.set(email, createdChallenge);
		sendLoginMail(email, createdChallenge);
		response.status(403).json(error =>
		{
			const { message } = error;

			return message;
		});
	}
	else
	{
		next();
	}
}

function createChallenge() : number
{
	//todo create unique challenge per user per scope
	return Math.floor(Math.random() * (10000 - 1001) + 1001);
}
//todo invalidate method challenge
//todo get the current challenge
