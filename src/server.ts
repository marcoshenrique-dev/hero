import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import 'express-async-errors';

import './database';
import AppError from './errors/AppError';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
   if (err instanceof AppError) {
      response.status(err.statusCode).json({
         status: 'error',
         message: err.message,
      });
   }

   console.error(err);

   return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
   });
});

app.listen(3333, () =>
   console.log('😀 server started at http://localhost:3333'),
);
