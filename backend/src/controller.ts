import mongoose from 'mongoose';
import { Request, Response } from 'express';

const TodosSchema: any = mongoose.model(
	'Todos',
	new mongoose.Schema({
		title: {
			type: String,
			required: true
		}
	})
);

const TodosSchema: any = mongoose.model('Todos', todoSchema);

export function getHandler(request: Request, response: Response): any 
{
	TodosSchema.find()
		.then((data: any) => 
		{
			response.send(data);
		})
		.catch((error: any) => 
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
		.catch((error: string) => response.json({ message: error }));
}
