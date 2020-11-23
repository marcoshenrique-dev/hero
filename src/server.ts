import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import 'express-async-errors';

import './database';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(3333, () =>
   console.log('😀 server started at http://localhost:3333'),
);
