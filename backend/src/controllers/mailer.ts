import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { User } from '../models/user.interface';
import { RegisterMailer, Message } from './mailer.interface';
import { response } from 'express';
import wording from './wording.js';
import environment from '../environments/environment.js';

//todo: get rid of the destructing here and reduce the overhead be introducing a common send method

/*
send(
{
	from: '"' + environment.mailer.from.name + '" <' + environment.mailer.from.email + '>',
	to: 'replace this',
	subject: wording.register.confirmation.subject,
	text: wording.register.confirmation.subject
});
 */

export function sendRegisterConfirmationMail(user : User) : void
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

export function sendRegisterChallengeMail(email : string, challenge : number) : void
{
	const register : RegisterMailer = (wording.register as RegisterMailer);
	const { subject, text } = register.challenge;
	const loginMessage : Message =
	{
		from: '"' + environment.mailer.from.name + '" <' + environment.mailer.from.email + '>',
		to: email,
		subject,
		text: text + challenge
	};

	transport()
		.sendMail(loginMessage)
		.catch((error : Error) => response.status(404).json({ message: error.message }));
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
