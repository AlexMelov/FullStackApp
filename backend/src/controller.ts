import mongoose from 'mongoose';
import e from 'express';

const TodosSchema = mongoose.model('Todos', new mongoose.Schema({
	title: {
		type: String,
		required: true
	}
}));

export async function getHandler(request: e.Request, response: e.Response): Promise<void>
{
	try
	{
		const allTodos = await TodosSchema.find();

		response.send(allTodos);
	}
	catch
	{
		response.sendStatus(404);
	}
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
