import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { RegisterMailer, Message } from './mailer.interface';
import { response } from 'express';
import wording from './wording.js';
import environment from '../environments/environment.js';

export function sendRegisterConfirmationMail(email : string) : void
{
	const register : RegisterMailer = (wording.register as RegisterMailer);
	const { subject, text } = register.confirmation;
	const registerMessage : Message =
	{
		from: '"' + environment.mailer.from.name + '" <' + environment.mailer.from.email + '>',
		to: email,
		subject,
		text
	};

	send(registerMessage);
}

export function sendRegisterChallengeMail(email : string, challenge : number) : void
{
	const register : RegisterMailer = (wording.register as RegisterMailer);
	const { subject, text } = register.challenge;
	const registerMessage : Message =
	{
		from: '"' + environment.mailer.from.name + '" <' + environment.mailer.from.email + '>',
		to: email,
		subject,
		text: text + challenge
	};

	send(registerMessage);
}

export function sendLoginChallengeMail(email : string, challenge : number) : void
{
	const { subject, text } = wording.login;
	const loginMessage : Message =
	{
		from: '"' + environment.mailer.from.name + '" <' + environment.mailer.from.email + '>',
		to: email,
		subject,
		text: text + challenge
	};

	send(loginMessage);
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

function send(message : Message) : void
{
	transport()
		.sendMail(message)
		.catch((error : Error) => response.status(404).json({ message: error.message }));
}
