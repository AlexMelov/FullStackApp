import { NextFunction, Request, Response } from 'express';
import { sendChallenge } from '../controllers/mailer.js';
import { userModel } from '../models/user.schema.js';
import { compareSync } from 'bcrypt';
import { Login } from './login.interface';
import wording from '../controllers/wording.js';
import { Mailer } from '../controllers/wording.interface.js';

export const store : Map<string, number> = new Map();

export function loginMiddleware(request : Request, response : Response, next : NextFunction) : void
{
	const { email, password, challenge } = (request.body as Login);

	userModel.findOne(
	{
		email
	})
	.then(user =>
	{
		return { compare: compareSync(password, user.password), user };
	})
	.then(result =>
	{
		if (result.compare && store.has(email) && store.get(email) === Number(challenge))
		{
			store.delete(email);
			next();
		}
		else if (result.compare && !challenge)
		{
			const createdChallenge : number = createChallenge();
			const { subject, text } = (wording.login as Mailer );

			store.set(email, createdChallenge);
			sendChallenge(email, createdChallenge, subject, text);
			response.status(200).json(
			{
				action: 'request-challenge'
			});
		}
		else
		{
			response.status(401).send();
		}
	})
	.catch((error : Error) => response.status(401).json(error.message));
}

function createChallenge() : number
{
	return Math.floor(Math.random() * (10000 - 1001) + 1001);
}
