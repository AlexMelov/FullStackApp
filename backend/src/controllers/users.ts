import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { User } from '../models/user.interface';

//todo get todos only for authenticated user
export function deleteUser(request : Request, response : Response, userModel : Model<User>) : void
{
	userModel.deleteOne({ _id: request.params.userId })
		.then(data => response.json(data))
		.catch((error : Error) => response.status(403).json({ message: error.message }));
}
