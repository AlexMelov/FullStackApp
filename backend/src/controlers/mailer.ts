import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { User } from '../models/user.interface';
import { Message } from './mailer.interface';
import { response } from 'express';
import wording from './wording.js';

export function sendRegisterMail(user : User) : void
{
	//todo add multi-language support
	const { subject, message } = wording.register;
	const registerMessage : Message =
	{
		//todo set from into environmental files
		from: '"Sender Name" <theExpressApp@example.net>',
		to: user.email,
		subject,
		text: message
	};

	transport()
		.sendMail(registerMessage)
		.catch(error => ({ message: error }));
}

export function sendLoginMail(user : User) : void
{
	//todo separate message and add multi language
	const { subject, text } = wording.login;
	const loginMessage : Message =
	{
		//todo set from into environment file
		from: '"Sender Name" <theExpressApp@example.net>',
		to: user.email,
		subject,
		text
	};

	transport()
		.sendMail(loginMessage)
		.catch(error => response.status(404).json({ message: error }));
}

function transport() : Transporter<SMTPTransport.SentMessageInfo>
{
	return createTransport(
	{
		host: 'smtp.ethereal.email',
		port: 587,
		auth:
		{
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASSWORD
		}
	});
}
