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
var express = require("express");
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var PORT = 8000;
var postRoute = require('./routes/posts');
app.use('/posts', postRoute);
app.get('/', function (req, res) { return res.send('On Homepage'); });
mongoose.connect("mongodb+srv://alex:Ma1802989483008@cluster0.r00ao.mongodb.net/todo-list?retryWrites=true&w=majority", function () { return console.log('Connected to mongo'); });
app.listen(8000);
