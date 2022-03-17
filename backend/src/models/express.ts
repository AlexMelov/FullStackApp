import { Request, Response } from 'express';

export type Handler = (request: Request, response: Response) => void;
