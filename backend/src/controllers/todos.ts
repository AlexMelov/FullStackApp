import { Request, Response } from 'express';
import { HydratedDocument } from 'mongoose';
import { DirtyTodo, Todo } from '../models/todo.interface';
import { todoModel } from '../models/schema.js';

export function findHandler(request : Request, response : Response) : void
{
	todoModel.find()
		.then(data => response.json(mapData(data)))
		.catch((error : Error) => response.status(403).json({ message: error.message }));
}

export function saveHandler(request : Request, response : Response) : void
{
	const todo : HydratedDocument<Todo> = new todoModel(request.body);

	todo.save()
		.then(data => response.json(data))
		.catch((error : Error) => response.status(403).json({ message: error.message }));
}

export function deleteHandler(request : Request, response : Response) : void
{
	todoModel.deleteOne({ _id: request.params.todoId })
		.then(data => response.json(data))
		.catch((error : Error) => response.status(403).json({ message: error.message }));
}

function mapData(data : DirtyTodo[])
{
	return data.map(item =>({ id: item._id, title: item.title }));
}
