import { Request, Response } from 'express';
import { userModel } from '../models/user.schema.js';

export function deleteUserHandler(request : Request, response : Response) : void
{
	userModel.deleteOne({ _id: request.params.userId })
		.then(data => response.json(data))
		.catch((error : Error) => response.status(403).json({ message: error.message }));
}
