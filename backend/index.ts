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
