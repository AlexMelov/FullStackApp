import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import
{
	deleteUserHandler,
	deleteHandler,
	findHandler,
	loginHandler,
	registerHandler,
	saveHandler
} from './controller.js';
import cors from 'cors';
import 'dotenv/config';
import environment from './environments/environment.js';

const server : Express = express();
const db : Promise<typeof mongoose> = mongoose.connect(process.env.DB_URL);

server.use(cors());
server.use(bodyParser.json());
server.get('/', (request : Request, response : Response) => response.sendStatus(404));
server.get(environment.apiRoutes.todos, findHandler);
server.post(environment.apiRoutes.todos, saveHandler);
server.delete(environment.apiRoutes.todosWithId, deleteHandler);
server.post(environment.apiRoutes.register, registerHandler);
server.post(environment.apiRoutes.login, loginHandler);
server.delete(environment.apiRoutes.userWithId, deleteUserHandler);

export { server, db };
