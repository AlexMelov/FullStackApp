import mongoose, { Schema, Model } from 'mongoose';
import { User } from './user.interface';

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
