import { Handler } from '../models/express';
import { Request, Response } from 'express';
import { hash } from 'bcrypt';
import { HydratedDocument } from 'mongoose';
import { User } from '../models/user.interface';
import { sendRegisterMail } from './mailer.js';
import { userModel } from '../models/user.schema.js';

export const registerHandler : Handler = (request : Request, response : Response) : void =>
{
	hash(request.body.password, 10)
		.then(hash =>
		{
			const user : HydratedDocument<User> = new userModel(
			{
				email: request.body.email,
				password: hash
			});

			user.save()
				.then(user =>
				{
					sendRegisterMail(user);
					response.json(user);
				})
				.catch(error => response.status(403).json({ message: error }));
		})
		.catch(error => response.json({ message: error }));
};
