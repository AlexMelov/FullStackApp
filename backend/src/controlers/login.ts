import { Handler } from '../models/express';
import { Request, Response } from 'express';

export const loginHandler : Handler = (request : Request, response : Response) : void =>
{
	request.body;
	response.json;
};
