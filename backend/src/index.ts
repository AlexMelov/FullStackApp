import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { deleteHandler, editHandler, getHandler, postHandler } from './controller.js';
import cors from 'cors';
import environment from '../environments/environment.dev.js';

const server : Express = express();

server.use(cors());
server.use(bodyParser.json());
server.get(`${environment.apiUrl}:`, (request : Request, response : Response) => response.sendStatus(404));
server.get(environment.apiRoutes.todos, getHandler);
server.post(environment.apiRoutes.todos, postHandler);
server.delete(environment.apiRoutes.todosWithId, deleteHandler);
server.patch(environment.apiRoutes.todosWithId, editHandler);

mongoose.connect(process.env.DB_URL)
	.then(() =>
	{
		process.stdout.write('CONNECTION TO DATABASED SUCCEED');
		server.listen(process.env.PORT || environment.apiPort);
	})
	.catch(() =>
	{
		process.stdout.write('CONNECTION TO DATABASE FAILED');
		process.exit();
	});
