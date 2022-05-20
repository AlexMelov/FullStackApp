import { Request, Response } from 'express';
import { hash } from 'bcrypt';
import { HydratedDocument } from 'mongoose';
import { User } from '../models/user.interface.js';
import { userModel } from '../models/user.schema.js';
import { Register } from '../middleware/register.interface';
import { sendConfirmation } from './mailer.js';

export function registerHandler(request : Request, response : Response) : void
{
	const { email, password } = (request.body as Register);

	hash(password, 10)
		.then(hash =>
		{
			const user : HydratedDocument<User> = new userModel(
			{
				email,
				password: hash
			});

			user.save()
				.then(user =>
				{
					sendConfirmation(user);
					response.json(user);
				})
				.catch((error : Error) => response.status(403).json({ message: error.message }));
		})
		.catch((error : Error) => response.status(403).json({ message: error.message }));
}
