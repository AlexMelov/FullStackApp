import { NextFunction, Request, Response } from 'express';
import { sendLoginMail } from '../controllers/mailer.js';
import { Register } from './register.middleware.interface';
import { userModel } from '../models/user.schema.js';
import { validateEmail } from './middleware.helper.js';

export const store : Map<string, number> = new Map();

export function challengeRegisterMiddleware(request : Request, response : Response, next : NextFunction) : void
{
	const { email, password, challenge } = (request.body as Register);

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
			//todo set else if instead of else and inside if
			// else if (validateEmail(email) && validatePassword(password) && store.has(email) && store.get(email) === Number(challenge))
			else
			{
				if (validateEmail(email, password, challenge))
				{
					store.delete(email);
					next();
				}
				//todo add if conditions to check if the email is correct and the password is correct
				// else if(validateEmail(email) && validatePassword(password))
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

