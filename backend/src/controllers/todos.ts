import { Request, Response } from 'express';
import { HydratedDocument, Model } from 'mongoose';
import { DirtyTodo, Todo } from '../models/todo';
import wording from './wording.js';

const { findErrorMessage, postErrorMessage, deleteErrorMessage } = wording.todos;

export function getAllTodos(request : Request, response : Response, todoModel : Model<Todo>) : void
{
	todoModel.find()
		.then(data => response.json(mapData(data)))
		.catch(error => response.status(403).json({ message: findErrorMessage, error }));
}

export function postTodo(request : Request, response : Response, todoModel : Model<Todo>) : void
{
	const todo : HydratedDocument<Todo> = new todoModel(request.body);

	todo.save()
		.then(data => response.json(data))
		.catch(error => response.status(403).json({ message: postErrorMessage, error }));
}

export function deleteOneTodo(request : Request, response : Response, todoModel : Model<Todo>) : void
{
	todoModel.deleteOne({ _id: request.params.todoId })
		.then(data => response.json(data))
		.catch(error => response.status(403).json({ message: deleteErrorMessage, error }));
}

function mapData(data : DirtyTodo[])
{
	return data.map(item =>({ id: item._id, title: item.title }));
}
