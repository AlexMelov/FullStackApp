import mongoose, { Schema, Model } from 'mongoose';
import { Todo } from './todo';
import { User } from './user.interface';

export const todoSchema : Schema = new mongoose.Schema(
{
	title:
	{
		type: String,
		required: true
	}
});

export const todoModel : Model<Todo> = mongoose.model('Todos', todoSchema);

export const userSchema : Schema = new mongoose.Schema(
	{
		email:
			{
				type: String,
				required: true
			},
		password:
			{
				type: String,
				required: true
			}
	});

export const userModel : Model<User> = mongoose.model('Users', userSchema);
