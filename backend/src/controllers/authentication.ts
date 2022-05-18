import { Request, Response } from 'express';
import { compareSync } from 'bcrypt';
import { tokenHelper } from './token.helper.js';
import wording from './wording.js';
import { userModel } from '../models/user.schema.js';

export function loginHandler(request : Request, response : Response) : void
{
	const { email, password } = request.body;
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
				token: tokenHelper(result.user)
			});
		}
		return response.status(401).json(
		{
			message: tokenCompareErrorMessage
		});
	})
	.catch((error : Error) => response.status(401).json({ message: error.message }));
}
