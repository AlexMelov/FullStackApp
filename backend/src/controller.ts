import mongoose from 'mongoose';
import { Response } from 'express';

const todoSchema: any = new mongoose.Schema({
	title: {
		type: String,
		required: true
	}
});
const TodosSchema = mongoose.model('Todos', todoSchema);

export function getHandler(response: Response): void 
{
	const allTodos = TodosSchema.find();

	response.send(allTodos);
}
//@ts-ignore
export function postHandler(request: Request, response: Response): void 
{
	const todo = new TodosSchema({
		title: request.body.title
	});

	todo.save()
		.then((data: any) => response.json(data))
		.catch((err: any) => response.json({ message: err }));
}
