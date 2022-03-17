import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';

export const server: Express = express();

export const todoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	}
});
const TodosSchema = mongoose.model('Todos', todoSchema);

export function getHandler(request: Request, response: Response)
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

export function postHandler(request: Request, response: Response): void
{
	const todo = new TodosSchema({
		title: request.body.title
	});

	todo.save()
		.then((data: any) => response.json(data))
		.catch((err: string) => response.json({ message: err }));

}

export function deleteHandler(request: Request, response: Response)
{
	TodosSchema.remove({ _id: request.params.todoId })
		.then(data => response.json(data))
		.catch(error =>
		{
			response.json({ message: error });
		});

}

