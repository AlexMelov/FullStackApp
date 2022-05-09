import { Token, User } from '../models/user.interface';
import jwt from 'jsonwebtoken';

export function tokenHelper(user : User) : Token
{
	const { sign } = jwt;

	return sign(
	{
		email: user.email,
		userId: user._id
	},
	process.env.JWT_SECRET,
	{
		expiresIn: '1h'
	});
}
