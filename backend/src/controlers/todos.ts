import { Request, Response } from 'express';
import { HydratedDocument, Model } from 'mongoose';
import { DirtyTodo, Todo } from '../models/todo';

export function getAllTodos(request : Request, response : Response, todoModel : Model<Todo>) : void
{
	todoModel.find()
		.then(data => response.json(mapData(data)))
		.catch(error => response.json({ message: error }));
}

export function postTodo(request : Request, response : Response, todoModel : Model<Todo>) : void
{
	const todo : HydratedDocument<Todo> = new todoModel(request.body);

	todo.save()
		.then(data => response.json(data))
		.catch(error => response.json({ message: error }));
}

export function deleteOneTodo(request : Request, response : Response, todoModel : Model<Todo>) : void
{
	todoModel.deleteOne({ _id: request.params.todoId })
		.then(data => response.json(data))
		.catch(error => response.json({ message: error }));
}

function mapData(data : DirtyTodo[])
{
	return data.map(item =>({ id: item._id, title: item.title }));
}
