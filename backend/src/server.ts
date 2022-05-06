import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { deleteHandler, findHandler, saveHandler } from './controller.js';
import cors from 'cors';
import 'dotenv/config';
import environment from './environments/environment.js';
import { registerHandler, loginHandler } from './authentication.js';

const server : Express = express();
const db : Promise<typeof mongoose> = mongoose.connect(process.env.DB_URL);

server.use(cors());
server.use(bodyParser.json());
server.get('/', (request : Request, response : Response) => response.sendStatus(404));
server.get(environment.apiRoutes.todos, findHandler);
server.post(environment.apiRoutes.todos, saveHandler);
server.delete(environment.apiRoutes.todosWithId, deleteHandler);
server.post('/register', registerHandler);
server.post('/login', loginHandler);

export { server, db };
