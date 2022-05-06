import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import { createHandler, deleteHandler, findHandler } from './controlers/todos.js';
import { registerHandler } from './controlers/register.js';
import { loginHandler } from './controlers/login.js';
import environment from './environments/environment.js';

const server : Express = express();
const db : Promise<typeof mongoose> = mongoose.connect(process.env.DB_URL);

server.use(cors());
server.use(bodyParser.json());
server.get('/', (request : Request, response : Response) => response.sendStatus(404));
server.get(environment.apiRoutes.todos, findHandler);
server.post(environment.apiRoutes.todos, createHandler);
server.delete(environment.apiRoutes.todosWithId, deleteHandler);
server.post(environment.apiRoutes.register, registerHandler);
server.post(environment.apiRoutes.login, loginHandler);

export { server, db };
