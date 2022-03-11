import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { getHandler, postHandler } from './controller.js';
//import environment from './environments/environment.js';

const server: Express = express();

server.use(bodyParser.json());
server.get('/', (request: Request, response: Response) => response.sendStatus(404));
server.get('/todos', getHandler);
server.post('/todos', postHandler);

mongoose.connect(process.env.DB_URL, () =>
	server.listen(8000, () => console.log('Connected to database'))
);
