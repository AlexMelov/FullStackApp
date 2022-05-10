import { Request, Response } from 'express';
import { User } from '../models/user.interface';
import { compareSync } from 'bcrypt';
import { Model } from 'mongoose';
import { tokenHelper } from './token.helper.js';

export function loginUserHandler(request : Request, response : Response, userModel : Model<User>) : void
{
	const { email, password } = request.body;

	userModel.findOne(
	{
		email
	})
	.then(user =>
	{
		return { compare: compareSync(password, user.password), user };
	})
	.then(result =>
	{
		if(result.compare)
		{
			return response.status(200).json(
			{
				token: tokenHelper(result.user)
			});
		}
		return response.status(401).json(
		{
			//todo add message:  from wording file
			message: 'Authentication failed on user'
		});

	})
	//todo add message:  from wording file
	.catch(error => response.status(401)
		.json({ message: 'Authentication failed on entire', error }));
}
