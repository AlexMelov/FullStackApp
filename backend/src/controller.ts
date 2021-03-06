import { Request, Response } from 'express';
import { todoModel } from './models/schema.js';
import { HydratedDocument } from 'mongoose';
import { Todo, DirtyTodo } from './models/todo';
import { Handler } from './models/express';

export const getHandler : Handler = (request : Request, response : Response) : void =>
{
	todoModel.find()
		.then(data => response.json(mapData(data)))
		.catch(error => response.json({ message: error }));
};

export const postHandler : Handler = (request : Request, response : Response) : void =>
{
	const todo : HydratedDocument<Todo> = new todoModel(request.body);

	todo.save()
		.then(data => response.json(data))
		.catch(error => response.json({ message: error }));
};

export const deleteHandler : Handler = (request : Request, response : Response) : void =>
{
	todoModel.deleteOne({ _id: request.params.todoId })
		.then(data => response.json(data))
		.catch(error => response.json({ message: error }));
};

function mapData(data : DirtyTodo[])
{
	return data.map(item =>({ id: item._id, title: item.title }));
}
