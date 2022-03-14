import mongoose from 'mongoose';
import { Request, Response } from 'express';

const TodosSchema = mongoose.model(
	'Todos',
	new mongoose.Schema({
		title: {
			type: String,
			required: true
		}
	})
);

const todosSchema = mongoose.model('Todos', TodosSchema);

export function getHandler(request: Request, response: Response): any {
	todosSchema
		.find()
		.then((data) => {
			response.send(data);
		})
		.catch((error) => {
			response.json({ message: error });
		});
}

export function postHandler(request: Request, response: Response): void {
	const todo = new TodosSchema({
		title: request.body.title
	});

	todo.save()
		.then((data) => response.json(data))
		.catch((error: string) => response.json({ message: error }));
}
