import express, { NextFunction, Request, Response } from 'express';
import { json } from 'body-parser';

import { getFibonnacciRouter } from './routes/get-fibonacci';

const app = express();

app.use(json());

app.use(getFibonnacciRouter);

export { app };