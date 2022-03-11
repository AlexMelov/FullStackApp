import mongoose from 'mongoose';
import e, { Response } from 'express';

const TodosSchema = mongoose.model('Todos', new mongoose.Schema({
	title: {
		type: String,
		required: true
	}
}));

export async function getHandler(response: Response): Promise<void>
{
	const allTodos = await TodosSchema.find();

	response.send(allTodos);
}

export async function postHandler(request: e.Request, response: e.Response): Promise<void>
{
	const todo = new TodosSchema({
		title: request.body.title
	});

	await todo.save()
		.then(data => response.json(data))
		.catch(error => response.json({ message: error }));
}
