import mongoose from 'mongoose';

export const todoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	}
});
export const TodosSchema = mongoose.model('Todos', todoSchema);
