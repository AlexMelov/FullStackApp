import { MessageModel } from './message.model';
import { User } from '../models/user.interface';

export function MessageContext(user : User) : MessageModel
{
	const message : MessageModel =
	{
		from: '"Sender Name" <theExpressApp@example.net>',
		to: user.email,
		subject: 'Registration',
		text: 'Your registration is done!'
	};

	return message;
}
