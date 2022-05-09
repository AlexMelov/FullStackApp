import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { User } from '../models/user.interface';
import { MessageModel } from './message.model';
import { response } from 'express';
import wording from './wording.js';

export function sendRegisterMail(user : User) : void
{
	//todo add multi-language support
	//todo separate register message into other
	const { subject, message } = wording.register;
	const registerMessage : MessageModel =
	{
		//todo set from into environmental files
		from: '"Sender Name" <theExpressApp@example.net>',
		to: user.email,
		subject,
		text: message
	};

	transport()
		.sendMail(registerMessage)
		.then(result => result)
		.catch(error => ({ message: error }));
}

export function sendLoginMail(user : User) : void
{
	//todo separate message and add multi language
	const loginMessage : MessageModel =
	{
		from: '"Sender Name" <theExpressApp@example.net>',
		to: user.email,
		subject: 'Registration',
		text: 'Your registration is done!'
	};

	transport()
		.sendMail(loginMessage)
		.then(result => result)
		.catch(error => response.json({ message: error }));
}

//todo add environment variables

function transport() : Transporter<SMTPTransport.SentMessageInfo>
{
	return createTransport(
	{
		host: process.env.MAIL_HOST,
		port: parseInt(process.env.MAIL_PORT),
		auth:
		{
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASSWORD
		}
	});
}

