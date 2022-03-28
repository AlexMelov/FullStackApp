import mongoose, { Schema, Model } from 'mongoose';
import { Todo } from './todo';

export const todoSchema : Schema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});
export const todoModel : Model<Todo> = mongoose.model('Todos', todoSchema);
