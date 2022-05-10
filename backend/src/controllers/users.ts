import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { User } from '../models/user.interface';
import wording from './wording.js';

export function deleteUser(request : Request, response : Response, userModel : Model<User>) : void
{
	const { deleteUserErrorMessage } = wording.deleteUser;

	userModel.deleteOne({ _id: request.params.userId })
		.then(data => response.json(data))
		.catch(error => response.status(403).json({ message: deleteUserErrorMessage, error }));
}
