import express, { Express, Request, Response } from 'express';
//various middlewares

import cors from 'cors';
import helmet from 'helmet';
import cookerParser from 'cookie-parser';

import authRouter from '@/routes/auth';

const app: Express = express();

app.use(express.json());
app.use(cookerParser());
app.use(helmet());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.use('/auth', authRouter);

export default app;