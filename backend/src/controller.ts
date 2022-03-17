import express, { Express, Request, Response } from 'express';
import { TodosSchema } from './models/mongooseModel.js';

export const server: Express = express();

export function getHandler(request: Request, response: Response): void
{
	TodosSchema.find()
		.then(data =>
		{
			response.json(data);
		})
		.catch(error =>
		{

			response.json({ message: error });
		});
}

export function postHandler(request:Request, response: Response): void
{
	const todo = new TodosSchema({
		title: request.body.title
	});

	try
	{
		const savedTodo: Promise<object> = todo.save();

		response.json(savedTodo);
	}
	catch (error)
	{
		response.json({ message: error });
	}

}

export function deleteHandler(request: Request, response: Response): void
{
	try
	{
		const deletedData = TodosSchema.remove({ _id: request.params.todoId });

		response.json(deletedData);
	}
	catch (error)
	{
		response.json({ message: error });
	}
}

