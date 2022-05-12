import { User } from '../models/user.interface';
import jwt from 'jsonwebtoken';
import { Token } from '../models/token.type';

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
		expiresIn: 3600
	});
}
