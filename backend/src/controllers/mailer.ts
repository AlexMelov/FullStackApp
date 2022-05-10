import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { User } from '../models/user.interface';
import { Message } from './mailer.interface';
import { response } from 'express';
import wording from './wording.js';
import environment from '../environments/environment.js';

export function sendRegisterMail(user : User) : void
{
	//todo add multi-language support
	const { subject, message } = wording.register;
	const registerMessage : Message =
	{
		from: '"' + environment.mailer.from.name + '" <' + environment.mailer.from.email + '>',
		to: user.email,
		subject,
		text: message
	};

	transport()
		.sendMail(registerMessage)
		.catch((error : Error) => ({ message: error.message }));
}

export function sendLoginMail(user : User) : void
{
	//todo separate message and add multi language
	const { subject, text } = wording.login;
	const loginMessage : Message =
	{
		from: '"' + environment.mailer.from.name + '" <' + environment.mailer.from.email + '>',
		to: user.email,
		subject,
		text
	};

	transport()
		.sendMail(loginMessage)
		.catch((error : Error) => response.status(404).json({ message: error.message }));
}

function transport() : Transporter<SMTPTransport.SentMessageInfo>
{
	return createTransport(
	{
		host: environment.mailer.host,
		port: environment.mailer.port,
		auth:
		{
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASSWORD
		}
	});
}
