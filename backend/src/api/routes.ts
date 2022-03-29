import environment from '../../environments/environment.dev';
import { Request, Response } from 'express';
import server from '../index';

server.get(`${environment.apiUrl}:`, (request : Request, response : Response) => response.sendStatus(404));
