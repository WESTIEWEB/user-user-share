import express, {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import logger from 'morgan';

dotenv.config();
const app = express()
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', (req, res) => {
    res.send('hello')
})

const port = process.env.port || 3000 
app.listen(port, ()=> {
    console.log(`app is listening on: ${port}`)
})
export default app;