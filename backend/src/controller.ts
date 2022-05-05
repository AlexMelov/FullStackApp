import { Request, Response } from 'express';
import { todoModel, userModel } from './models/schema.js';
import { HydratedDocument } from 'mongoose';
import { Todo, DirtyTodo } from './models/todo';
import { Handler } from './models/express';
import { User } from './models/user.interface';
import { hash } from 'bcrypt';
import { createTransport, getTestMessageUrl } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

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

export const registerHandler : Handler = (request : Request, response : Response) : void =>
{
	hash(request.body.password, 10)
		.then(hash =>
		{
			const user : HydratedDocument<User> = new userModel(
				{
					email: request.body.email,
					password : hash
				});

			let info : SMTPTransport.SentMessageInfo;

			user.save()
				.then(credentials =>
				{
					if(credentials)
					{
						const message : {} =
							{
								from: '"Sender Name" <theExpressApp@example.net>',
								to: credentials.email,
								subject: 'Hello from express nodemailer',
								text: 'Hello world2?'
							};

						createTransport(
							{
								host: 'smtp.ethereal.email',
								port: 587,
								auth: {
									user: 'rod.walter42@ethereal.email',
									pass: 'XFxApFCRdQCRFVGztK'
								}
							})
							.sendMail(message)
							.then(result =>
							{
								info = result;
								return result;
							}).catch(error => ({ message:error }));
						getTestMessageUrl(info);
					}
					return response.json(credentials);
				})
				.catch(error => response.json({ message:error }));
		})
		.catch(error => response.json({ message : error }));
};

export const loginHandler : Handler = (request : Request, response : Response) : void =>
{
	request.body;
	response.json;
};

function mapData(data : DirtyTodo[])
{
	return data.map(item =>({ id: item._id, title: item.title }));
}

