import { Handler } from './models/express';
import { Request, Response } from 'express';
import { compare, hash } from 'bcrypt';
import mongoose, { HydratedDocument, Model, Schema } from 'mongoose';
import { User } from './models/user.interface';
import pkg from 'jsonwebtoken';
import { Token } from 'nodemailer/lib/xoauth2';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { sendRegisterMail } from './controlers/mailer.js';

export const userSchema : Schema = new mongoose.Schema(
{
	email:
	{
		type: String,
		required: true,
		unique : true
	},
	password:
	{
		type: String,
		required: true
	}
});

userSchema.plugin(mongooseUniqueValidator);
export const userModel : Model<User> = mongoose.model('Users', userSchema);

export const registerHandler : Handler = (request : Request, response : Response) : void =>
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
		.catch(error => response.json({ message: error }));
};

export const loginHandler : Handler = (request : Request, response : Response) : void =>
{
	const { email, password } = request.body;
	let userData : User & {_id : {}};

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
					}
				);
			}
			const { sign } = pkg;
			const token : Token = sign(
			{
				email: userData.email,
				userId: userData._id
			},
				'secret_this_should_be_long',
			{ expiresIn: '1h' });

			response.status(200).json(
			{
				token
			});
		})
		.catch(error =>
		{
			return response.status(401).json(
			{
				message: 'Authentication failed on entire', error
			}
			);
		});
};
