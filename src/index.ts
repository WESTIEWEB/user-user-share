import express, {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import logger from 'morgan';
import { dbConnection } from './database';
import userRoute from './routes/users-route';
const socketIO = require("socket.io");
import http from "http";



dotenv.config();
const app = express()
const DB_URL = process.env.DB_URI || 'mongodb://localhost:27017/ecommerce';
try{
    dbConnection(DB_URL);
} catch(err) {
    console.log(err)
}

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/users', userRoute);
app.use('/', (req, res) => {
    res.send('hello')
})

// socket io 
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket: any) => {
    console.log("New client connected");
    socket.on("disconnect", () => console.log("Client disconnected"));
});

const port = process.env.port || 3000 
server.listen(port, ()=> {
    console.log(`server is listening on: ${port}`)
})
export default app;