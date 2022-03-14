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
const TodosSchema = mongoose.model('Todos', todoSchema);

server.get('/', (request: Request, response: Response) =>
	response.sendStatus(404)
);

server.get('/todos', getHandler);

server.post('/todos', postHandler);

// server.delete('/todo:todoId', (req, res) => {
// 	todoSchema
// 		.remove(req.params.todoId)
// 		.then((data: any) => console.log(data))
// 		.catch((error: any) => {
// 			res.json({ message: error });
// 		});
// });

mongoose.connect(process.env.DB_URL, () =>
	server.listen(8000, () => console.log('Connected to database'))
);

function getHandler(request: Request, response: Response): any {
	TodosSchema.find()
		.then((data: any) => {
			response.json(data);
		})
		.catch((error: any) => {
			response.json({ message: error });
		});
}

function postHandler(request: Request, response: Response): void {
	const todo = new TodosSchema({
		title: request.body.title
	});

	todo.save()
		.then((data: any) => response.json(data))
		.catch((err: any) => response.json({ message: err }));
}
