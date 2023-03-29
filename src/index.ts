import express, {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import logger from 'morgan';
import { dbConnection } from './database';
import userRoute from './routes/users-route';


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

const port = process.env.port || 3000 
app.listen(port, ()=> {
    console.log(`app is listening on: ${port}`)
})
export default app;