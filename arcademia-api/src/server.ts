import 'module-alias/register';

import * as express from 'express';
import  { createServer } from 'http'
import { Server, Socket } from 'socket.io';
import dotenv from 'dotenv'
// const dotenv = require('dotenv');

dotenv.config({
    path: 'src/config/config.env'
});

import app from '@/app';

const httpServer = createServer(app);   

const io = new Server(httpServer, {
   //options
});

io.on('connection', (socket: Socket) => {
    console.log("Socket connected: " + socket.id);
});

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

httpServer.listen(3000);


