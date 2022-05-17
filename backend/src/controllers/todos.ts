import { Request, Response } from 'express';
import { HydratedDocument, Model } from 'mongoose';
import { DirtyTodo, Todo } from '../models/todo';
import { todoModel } from '../models/schema.js';

export function getAllTodos(request : Request, response : Response) : void
{
	todoModel.find()
		.then(data => response.json(mapData(data)))
		.catch((error : Error) => response.status(403).json({ message: error.message }));
}

export function postTodo(request : Request, response : Response, todoModel : Model<Todo>) : void
{
	const todo : HydratedDocument<Todo> = new todoModel(request.body);

	todo.save()
		.then(data => response.json(data))
		.catch((error : Error) => response.status(403).json({ message: error.message }));
}

export function deleteOneTodo(request : Request, response : Response, todoModel : Model<Todo>) : void
{
	todoModel.deleteOne({ _id: request.params.todoId })
		.then(data => response.json(data))
		.catch((error : Error) => response.status(403).json({ message: error.message }));
}

function mapData(data : DirtyTodo[])
{
	return data.map(item =>({ id: item._id, title: item.title }));
}
