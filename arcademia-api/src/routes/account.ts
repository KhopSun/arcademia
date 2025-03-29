import * as express from 'express'
import { authenToken } from '@/middlewares/auth';
const accRouter = express.Router();

accRouter
    .route('/')
    .get()