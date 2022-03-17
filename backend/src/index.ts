import { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import environment from '../../frontend/src/environments/environment.dev.js';
import { deleteHandler, getHandler, postHandler, server } from './controller.js';

server.use(bodyParser.json());

server.get(environment.apiUrl, (request: Request, response: Response) =>
	response.sendStatus(404)
);

server.get(environment.apiRoutes.todos, getHandler);

server.post(environment.apiRoutes.todos, postHandler);

server.delete(environment.apiRoutes.todos.concat('/:todoId'), deleteHandler);

mongoose.connect(process.env.DB_URL, mongooseFunction);

export function mongooseFunction() :void
{
	try
	{
		process.stdout.write('CONNECTION TO DATABASED SUCCEED');
		server.listen(environment.apiPort);

	}
	catch (error)
	{
		process.stdout.write('CONNECTION TO DATABASE FAILED');
		process.exit();

	}

}
