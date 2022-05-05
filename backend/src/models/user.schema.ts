import mongoose, { Schema, Model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { User } from './user.interface';

export const userSchema : Schema = new mongoose.Schema(
{
	email:
	{
		type: String,
		required: true,
		unique : true
	},
	password:
	{
		type: String,
		required: true
	}
});

userSchema.plugin(mongooseUniqueValidator);
export const userModel : Model<User> = mongoose.model('Users', userSchema);
