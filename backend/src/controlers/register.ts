import { Handler } from '../models/express';
import { Request, Response } from 'express';
import { hash } from 'bcrypt';
import { HydratedDocument } from 'mongoose';
import { User } from '../models/user.interface';
import { userModel } from '../models/user.schema.js';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { createTransport, getTestMessageUrl } from 'nodemailer';

export const registerHandler : Handler = (request : Request, response : Response) : void =>
{
	hash(request.body.password, 10)
		.then(hash =>
		{
			const user : HydratedDocument<User> = new userModel(
				{
					email: request.body.email,
					password: hash
				});

			let info : SMTPTransport.SentMessageInfo;

			user.save()
				.then(credentials =>
				{
					if (credentials)
					{
						const message : {} =
							{
								from: '"Sender Name" <theExpressApp@example.net>',
								to: credentials.email,
								subject: 'Registration',
								text: 'Your registration is done!'
							};

						createTransport(
							{
								host: 'smtp.ethereal.email',
								port: 587,
								auth: {
									user: 'rod.walter42@ethereal.email',
									pass: 'XFxApFCRdQCRFVGztK'
								}
							})
							.sendMail(message)
							.then(result =>
							{
								info = result;
								return result;
							}).catch(error => ({ message: error }));
						getTestMessageUrl(info);
					}
					return response.json(credentials);
				})
				.catch(error => response.status(403).json({ message: error }));
		})
		.catch(error => response.json({ message: error }));
};
