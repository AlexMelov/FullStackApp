<<<<<<< HEAD
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

import express from "express";
import mongoose from "mongoose";

import bodyParser from "body-parser";
const app = express();
require("dotenv/config");

app.use(bodyParser.json());

// const PORT = 8000;
const postRoute = require("./routes/posts");
app.use("/posts", postRoute);

app.get("/", (req, res) => res.send("On Homepage"));
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to mongo")
);
app.listen(8000);
=======
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

>>>>>>> c9db7ee366135ff51cd586e529b929cb7c44253e
