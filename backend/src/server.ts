import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import environment from './environments/environment.js';

import { authenticationMiddleware } from './middleware/authentication.js';
import { loginMiddleware } from './middleware/login.js';
import { deleteHandler, findHandler, saveHandler } from './controllers/todos.js';
import { registerHandler } from './controllers/register.js';
import { loginHandler } from './controllers/login.js';
import { deleteUserHandler } from './controllers/users.js';
import { registerMiddleware } from './middleware/register.js';

const server : Express = express();
const db : Promise<typeof mongoose> = mongoose.connect(process.env.DB_URL);

server.use(cors());
server.use(bodyParser.json());
server.get('/', (request : Request, response : Response) => response.sendStatus(404));
server.get(environment.apiRoutes.todos, authenticationMiddleware, findHandler);
server.post(environment.apiRoutes.todos, authenticationMiddleware, saveHandler);
server.delete(environment.apiRoutes.todosWithId, authenticationMiddleware, deleteHandler);
server.post(environment.apiRoutes.register, registerMiddleware, registerHandler);
server.post(environment.apiRoutes.login, loginMiddleware, loginHandler);
server.delete(environment.apiRoutes.userWithId, deleteUserHandler);

export { server, db };
