import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { deleteHandler, getHandler, postHandler } from './controller.js';
import cors from 'cors';
import environment from '../environments/environment.js';

const server : Express = express();

server.use(cors());
server.use(bodyParser.json());
server.get('/', (request : Request, response : Response) => response.sendStatus(500));
server.get(environment.apiRoutes.todos, getHandler);
server.post(environment.apiRoutes.todos, postHandler);
server.delete(environment.apiRoutes.todosWithId, deleteHandler);

mongoose.connect(process.env.DB_URL)
	.then(() =>
	{
		process.stdout.write('[' + environment.metadata.environment.toUpperCase() + '] CONNECTION TO DATABASED SUCCEED');
		server.listen(environment.apiPort);
	})
	.catch(() =>
	{
		process.stdout.write('[' + environment.metadata.environment.toUpperCase() + '] CONNECTION TO DATABASE FAILED');
		process.exit();
	});
export default server;
