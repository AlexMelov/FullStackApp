import { Request, Response } from 'express';
import { User } from '../models/user.interface';
import { compare } from 'bcrypt';
import { Model } from 'mongoose';
import { tokenHelper } from './token.helper.js';

export function loginUserHandler(request : Request, response : Response, userModel : Model<User>) : void
{
	const { email, password } = request.body;
	//todo change userData into usee
	let userData : User & {_id : string | {}};

	userModel.findOne(
	{
		email
	})
		//todo put everything in one then unify user and user data
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
					//todo add message:  from wording file
					message: 'Authentication failed on user'
				});
			}
			response.status(200).json(
			{
				token : tokenHelper(userData)
			});
		})
		//todo add message:  from wording file
		.catch(error => response.status(401)
			.json({ message: 'Authentication failed on entire', error }));
}
