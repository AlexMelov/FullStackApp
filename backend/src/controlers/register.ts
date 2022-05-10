import { Request, Response } from 'express';
import { hash } from 'bcrypt';
import { HydratedDocument, Model } from 'mongoose';
import { User } from '../models/user.interface.js';
import { sendRegisterMail } from './mailer.js';
import wording from './wording.js';

export function registerUser(request : Request, response : Response, userModel : Model<User>) : void
{
	const { email, password } = request.body;
	const { registrationErrorMessage, userRegisterErrorMessage } = wording.register;

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
				.catch(error => response.status(403).json({ message: userRegisterErrorMessage, error }));
		})
		.catch(error => response.status(403).json({ message:registrationErrorMessage, error }));
}
