import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import environment from '../../frontend/src/environments/environment.dev.js';

const server: Express = express();

server.use(bodyParser.json());

const todoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	}
});

const TodosSchema = mongoose.model('Todos', todoSchema);

server.get(environment.apiUrl, (request: Request, response: Response) =>
	response.sendStatus(404)
);

server.get(environment.apiRoutes.todos, getHandler);

server.post(environment.apiRoutes.todos, postHandler);

server.delete(environment.apiRoutes.todos.concat('/:todoId'), deleteHandler);

mongoose.connect(process.env.DB_URL).then(() =>
{
	process.stdout.write('CONNECTION TO DATABASED SUCCEED');
	server.listen(environment.apiPort);
}).catch(() =>
{
	process.stdout.write('CONNECTION TO DATABASE FAILED');
	process.exit();
});

function getHandler(request: Request, response: Response)
{
	TodosSchema.find()
		.then(data =>
		{
			response.json(data);
		})
		.catch(error =>
		{

			response.json({ message: error });
		});
}

function postHandler(request: Request, response: Response): void
{
	const todo = new TodosSchema({
		title: request.body.title
	});

	todo.save()
		.then((data: any) => response.json(data))
		.catch((err: string) => response.json({ message: err }));
}

function deleteHandler(request: Request, response: Response)
{
	TodosSchema.remove({ _id: request.params.todoId })
		.then(data => response.json(data))
		.catch(error =>
		{
			response.json({ message: error });
		});
}
