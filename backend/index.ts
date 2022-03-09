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
const server = express();
require("dotenv/config");

server.use(bodyParser.json());

// const PORT = 8000;
const PORT = 8000;

const postRoute = require("./routes/posts");

server.use(bodyParser.json());
server.use("/posts", postRoute);

server.get("/", (req, res) => res.send("On Homepage"));
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to mongo")
);
server.listen(8000);

// todo: that was not working for me
//import routes from './routes/posts';
//server.use('/posts', routes)
