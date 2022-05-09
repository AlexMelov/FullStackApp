import { Token, User } from '../models/user.interface';

export function tokenHelper(userData : User & {_id : string | {}}) : Token
{
	return{
		email: userData.email,
		userId: userData._id
	};
}
