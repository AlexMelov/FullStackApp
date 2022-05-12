import jwt from 'jsonwebtoken';
import wording from '../controllers/wording.js';
import { NextFunction, Response, Request } from 'express';

export function middleware(request : Request, response : Response, next : NextFunction) : void
{
	try
	{
		const token : string = request.headers.authorization.split('Bearer ')[1];
		const { verify } = jwt;

		verify(token, process.env.JWT_SECRET);
		next();
	}
	catch
	{
		const { error } = wording.middleware;

		response.status(401).json({ message: error });
	}
}
