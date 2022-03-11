import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//import { environment } from './environments/environment';
const server: Express = express();

server.use(bodyParser.json());

const todoSchema: any = new mongoose.Schema({
	title: {
		type: String,
		required: true
	}
});
const TodosSchema = mongoose.model('Todos', todoSchema);

server.get('/', (request: Request, response: Response) =>
	response.send('NOTHING HERE')
);

server.get('/todos', async (request: Request, response: Response) => 
{
	// return response.send(request);
	try 
	{
		const allTodos = await TodosSchema.find();

		response.send(allTodos);
	}
	catch (err) 
	{
		response.json({ message: err });
	}
});

server.post('/todos', (request, response) => 
{
	const todo = new TodosSchema({
		title: request.body.title
	});

	todo.save()
		.then((data: any) => response.json(data))
		.catch((err: any) => response.json({ message: err }));
});

mongoose.connect(process.env.DB_URL, () => 
{
	server.listen(8000);
	console.log('Connected to database');
});
