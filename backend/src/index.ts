import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const server: Express = express();

server.use(bodyParser.json());

const todoSchema: any = new mongoose.Schema({
	title: {
		type: String,
		required: true
	}
});

const TodosSchema: any = mongoose.model('Todos', todoSchema);

server.get('/', (request: Request, response: Response) =>
	response.sendStatus(404)
);

server.get('/todos', getHandler);

server.post('/todos', postHandler);

server.delete('/todos/:todoId', deleteHandler);

mongoose.connect(process.env.DB_URL, () => server.listen(8000));

function getHandler(request: Request, response: Response): any 
{
	TodosSchema.find()
		.then((data: any) => 
		{
			response.json(data);
		})
		.catch((error: any) => 
		{
			response.json({ message: error });
		});
}

function postHandler(request: Request, response: Response): void 
{
	const todo: any = new TodosSchema({
		title: request.body.title
	});

	todo.save()
		.then((data: any) => response.json(data))
		.catch((err: any) => response.json({ message: err }));
}

function deleteHandler(request: Request, response: Response) 
{
	TodosSchema.remove({ _id: request.params.todoId })
		.then((data: any) => response.json(data))
		.catch((error: any) => 
		{
			response.json({ message: error });
		});
}
