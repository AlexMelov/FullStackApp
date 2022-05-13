import { Request, Response } from 'express';
import { User } from '../models/user.interface';
import { compareSync } from 'bcrypt';
import { Model } from 'mongoose';
import { tokenHelper } from './token.helper.js';
import wording from './wording.js';

export function loginUserHandler(request : Request, response : Response, userModel : Model<User>) : void
{
	const { email, password, challenge } = request.body;
	const { tokenCompareErrorMessage } = wording.login;

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
				token: tokenHelper(result.user),
				challenge: challenge as string
			});
		}
		return response.status(401).json(
		{
			message: tokenCompareErrorMessage
		});

	})
	.catch((error : Error) => response.status(401)
		.json({ message: error.message }));
}
