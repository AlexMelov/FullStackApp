import { Request, Response } from 'express';
import { todoModel } from './models/schema.js';
import { Handler } from './models/express';
import { deleteOneTodo, getAllTodos, postTodo } from './controlers/todos.js';
import { registerUser } from './controlers/register.js';
import { userModel } from './models/user.schema.js';
import { loginUserHandler } from './controlers/authentication.js';
import { deleteUser } from './controlers/users.js';

export const findHandler : Handler = (request : Request, response : Response) : void =>
{
	getAllTodos(request, response, todoModel);
};

export const saveHandler : Handler = (request : Request, response : Response) : void =>
{
	postTodo(request, response, todoModel);
};

export const deleteHandler : Handler = (request : Request, response : Response) : void =>
{
	deleteOneTodo(request, response, todoModel);
};

export const registerHandler : Handler = (request : Request, response : Response) : void =>
{
	registerUser(request, response, userModel);
};

export const loginHandler : Handler = (request : Request, response : Response) : void =>
{
	loginUserHandler(request, response, userModel);
};
export const deleteUserHandler : Handler = (request : Request, response : Response) : void =>
{
	deleteUser(request, response, userModel);
};
