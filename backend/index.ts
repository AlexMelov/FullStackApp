// const express = require("express");
//
//
// import todoRoutes from './routes/todos'
// let bodyParser = require('body-parser')
//
// const app = express();
//
// app.use(todoRoutes)
// app.use(bodyParser.json())
//
// app.listen(8000)
//


const express = require("express")
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PORT = 8000;
const postRoute = require('./routes/posts')

app.use('/posts', postRoute)

app.get('/', (req, res) => res.send('On Homepage'));
mongoose.connect("mongodb+srv://alex:Ma1802989483008@cluster0.r00ao.mongodb.net/todo-list?retryWrites=true&w=majority",()=>console.log('Connected to mongo'))

app.listen(8000);

