import { NextFunction, Request, Response } from 'express';
import { sendLoginMail } from '../controllers/mailer.js';
import { userModel } from '../models/user.schema.js';
import { compareSync } from 'bcrypt';

const store : Map<string, number> = new Map();

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
		if (result.compare || !challenge)
		{
			const createdChallenge : number = createChallenge();

			store.set(email, createdChallenge);
			sendLoginMail(email, createdChallenge);

			response.status(200).json(
			{
				action: 'request-challenge'
			});
		}
		else if (challenge && store.get('email') === challenge)
		{
			next();
		}
	}).catch((error : Error) => response.status(401).json(error.message));
}

function createChallenge() : number
{
	return Math.floor(Math.random() * (10000 - 1001) + 1001);
}
