import { NextFunction, Request, Response } from 'express';
import { sendLoginMail } from '../controllers/mailer.js';
import { RequestBody } from './middleware.interface';
import { userModel } from '../models/user.schema.js';

export const store : Map<string, number> = new Map();

export function challengeRegisterMiddleware(request : Request, response : Response, next : NextFunction) : void
{
	const { email, password, challenge } = (request.body as RequestBody);

	userModel.findOne(
		{
			email
		})
		.then(result =>
		{
			if (result)
			{
				response.status(401).send();
			}
			else
			{
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
		}).catch((error : Error) => response.status(401).json(error.message));
}

function createChallenge() : number
{
	return Math.floor(Math.random() * (10000 - 1001) + 1001);
}
