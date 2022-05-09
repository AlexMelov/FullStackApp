import { Request, Response } from 'express';
import { todoModel } from './models/schema.js';
import { Handler } from './models/express';
import { deleteOneTodo, getAllTodos, postTodo } from './controlers/todos.js';
import { registerUser } from './controlers/register.handler.js';
import { userModel } from './models/user.schema.js';
import { loginUserHandler } from './controlers/login.handler.js';
import { deleteUsersHandler } from './controlers/delete.users.handler.js';

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

export const deleteEmailHandler : Handler = (request : Request, response : Response) : void =>
{
	deleteUsersHandler(request, response, userModel);
};
