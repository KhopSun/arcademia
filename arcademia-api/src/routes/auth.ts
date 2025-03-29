import * as express from 'express'

import { register, login, logout } from '@/controllers/auth';

const authRouter = express.Router();

// authRouter.post('/tryAddUser', tryAddUser );

authRouter.post('/register', register);

authRouter.post('/login', login);

authRouter.get('/logout', logout)

export default authRouter;