import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { User } from '../models/user.interface';

export function sendRegisterMail(user : User) : void
{
	//todo add multi-language support
	//todo separate register message into other
	const registerMessage : {} =
	{
		from: '"Sender Name" <theExpressApp@example.net>',
		to: user.email,
		subject: 'Registration',
		text: 'Your registration is done!'
	};

	transport()
		.sendMail(registerMessage)
		.then(result => result)
		.catch(error => ({ message: error }));
}
export function sendLoginMail(user : User) : void
{
	//todo separate message and add multi language
	const loginMessage : {} =
		{
			from: '"Sender Name" <theExpressApp@example.net>',
			to: user.email,
			subject: 'Registration',
			text: 'Your registration is done!'
		};

	transport()
		.sendMail(loginMessage)
		.then(result => result)
		.catch(error => ({ message: error }));
}

//todo add environment variables

function transport() : Transporter<SMTPTransport.SentMessageInfo>
{
	return createTransport(
	{
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'rod.walter42@ethereal.email',
			pass: 'XFxApFCRdQCRFVGztK'
		}
	});
}

