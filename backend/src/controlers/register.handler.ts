import { Request, Response } from 'express';
import { hash } from 'bcrypt';
import { HydratedDocument, Model } from 'mongoose';
import { User } from '../models/user.interface.js';
import { sendRegisterMail } from './mailer.js';

export function registerUser(request : Request, response : Response, userModel : Model<User>) : void
{
	const { email, password } = request.body;

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
					sendRegisterMail(user);
					response.json(user);
				})
				.catch(error => response.status(403).json({ message: error }));
		})
		.catch(error => response.status(403).json({ message: 'Failed to hash the password', error }));
}
