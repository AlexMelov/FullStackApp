import { NextFunction, Request, Response } from 'express';
import { sendRegisterChallengeMail } from '../controllers/mailer.js';
import { Register } from './register.interface';
import { userModel } from '../models/user.schema.js';
import { validateChallenge, validateEmail, validatePassword } from './middleware.helper.js';
import wording from '../controllers/wording.js';

export const store : Map<string, number> = new Map();

export function registerMiddleware(request : Request, response : Response, next : NextFunction) : void
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
			response.status(403).send();
		}
		else if (validateEmail(email) && validatePassword(password) && validateChallenge(challenge, email, store))
		{
			store.delete(email);
			next();
		}
		else if(validateEmail(email) && validatePassword(password) && validateChallenge(challenge, email, store))
		{
			const { error } = wording.register;

			response.status(401).json({ message: error }).send();
		}
		else if(validateEmail(email) && validatePassword(password))
		{
			const createdChallenge : number = createChallenge();

			store.set(email, createdChallenge);
			sendRegisterChallengeMail(email, createdChallenge);
			response.status(200).json(
			{
				action: 'request-challenge'
			});
		}
	}).catch((error : Error) => response.status(401).json(error.message));
}

function createChallenge() : number
{
	return Math.floor(Math.random() * (10000 - 1001) + 1001);
}

