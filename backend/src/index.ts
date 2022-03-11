import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';

import('dotenv/config');

import bodyParser from 'body-parser';

const server: Express = express();

server.use(bodyParser.json());
server.get('/', (request: Request, response: Response) =>
	response.send('NOTHING HERE')
);

mongoose.connect(process.env.DB_URL, () =>
	console.log('CONNECTED TO DATABASE')
);
server.listen(8000);
