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
	response.sendStatus(404)
);

server.get('/todos', getHandler);

server.post('/todos', postHandler);

mongoose.connect(process.env.DB_URL, () =>
	server.listen(8000, () => console.log('Connected to database'))
);

function getHandler(request: Request, response: Response): any 
{
	TodosSchema.find()
		.then((data: any) => 
		{
			response.send(data);
		})
		.catch((error: any) => 
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
		.catch((err: any) => response.json({ message: err }));
}
