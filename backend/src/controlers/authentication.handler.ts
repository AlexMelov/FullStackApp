import { Request, Response } from 'express';
import { User } from '../models/user.interface';
import { compare } from 'bcrypt';
import pkg from 'jsonwebtoken';
import { Token } from 'nodemailer/lib/xoauth2';
import { Model } from 'mongoose';
import { tokenHelper } from './token.helper.js';

export function loginUserHandler(request : Request, response : Response, userModel : Model<User>) : void
{
	const { email, password } = request.body;
	let userData : User & {_id : string | {}};

	userModel.findOne(
	{
		email
	})
		.then(user =>
		{
			userData = user;
			return compare(password, user.password);
		})
		.then(result =>
		{
			if(!result)
			{
				return response.status(401).json(
				{
					message: 'Authentication failed on user'
				});
			}
			const { sign } = pkg;
			const token : Token = sign(
				tokenHelper(userData),
				'secret_this_should_be_long',
				{ expiresIn: '1h' });

			response.status(200).json(
			{
				token
			});
		})
		.catch(error => response.status(401)
			.json({ message: 'Authentication failed on entire', error }));
}
