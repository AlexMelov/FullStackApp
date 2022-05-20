import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { response } from 'express';

import { Message, RegisterMailer } from './mailer.interface.js';
import environment from '../environments/environment.js';
import { User } from '../models/user.interface.js';
import wording from './wording.js';

export function sendChallenge(email : string, challenge : number, subject : string, text : string) : void
{
	const message : Message =
		{
			from: '"' + environment.mailer.from.name + '" <' + environment.mailer.from.email + '>',
			to: email,
			subject,
			text: text + challenge
		};

	transport()
		.sendMail(message)
		.catch((error : Error) => response.status(404).json({ message: error.message }));
}

export function sendConfirmation(user : User) : void
{
	const register : RegisterMailer = (wording.register as RegisterMailer);
	const { subject, text } = register.confirmation;
	const registerMessage : Message =
		{
			from: '"' + environment.mailer.from.name + '" <' + environment.mailer.from.email + '>',
			to: user.email,
			subject,
			text
		};

	transport()
		.sendMail(registerMessage)
		.catch((error : Error) => ({ message: error.message }));
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
