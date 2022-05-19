import { NextFunction, Request, Response } from 'express';
import { sendLoginMail } from '../controllers/mailer.js';
import { RequestInterface } from './middleware.interface';

export const store : Map<string, number> = new Map();

export function challengeRegisterMiddleware(request : Request, response : Response, next : NextFunction) : void
{
	const body : RequestInterface = request.body;
	const email : string = body.email;
	const password : string = body.password;
	const challenge : number = body.challenge;

	if (email && email.includes('@') && password && password.length > 5 && challenge && store.get(email) === Number(challenge))
	{
		next();
	}
	else
	{
		const createdChallenge : number = createChallenge();

		store.set(email, createdChallenge);
		sendLoginMail(email, createdChallenge);
		response.status(200).json(
		{
			action: 'request-challenge'
		});
	}
}

function createChallenge() : number
{
	return Math.floor(Math.random() * (10000 - 1001) + 1001);
}
