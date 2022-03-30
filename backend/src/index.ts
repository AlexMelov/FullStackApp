import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { deleteHandler, getHandler, postHandler } from './controller.js';
import cors from 'cors';
// import environment from '../environments/environment.dev.js';

const server : Express = express();

server.use(cors());
server.use(bodyParser.json());
server.get('/api', (request : Request, response : Response) => response.sendStatus(404));
server.get('/api/todos', getHandler);
server.post('/api/todos', postHandler);
server.delete('/api/todos/:todoId', deleteHandler);

mongoose.connect(process.env.DB_URL)
	.then(() =>
	{
		process.stdout.write('CONNECTION TO DATABASED SUCCEED');
		server.listen(8000);
	})
	.catch(() =>
	{
		process.stdout.write('CONNECTION TO DATABASE FAILED');
		process.exit();
	});
export default server;
