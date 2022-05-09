import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { User } from '../models/user.interface';

export function deleteUsersHandler(request : Request, response : Response, userModel : Model<User>) : void
{
	userModel.deleteOne({ _id: request.params.userId })
		.then(data => response.json(data))
		.catch(error => response.status(403).json({ message: 'Failed to delete user', error }));
}
