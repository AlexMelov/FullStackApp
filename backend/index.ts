import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const PORT = 8000;
const server = express();

server.use(bodyParser.json());

// todo: that was not working for me
//import routes from './routes/posts';
//server.use('/posts', routes)

server.get('/', (req, res) => res.send('On Homepage'));
mongoose.connect("mongodb+srv://alex:Ma1802989483008@cluster0.r00ao.mongodb.net/todo-list?retryWrites=true&w=majority",()=>console.log('Connected to mongo'))

server.listen(PORT);

