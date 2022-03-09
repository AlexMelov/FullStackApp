import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
const server = express()

import postRoute from './routes/posts'

require('dotenv/config')

const PORT = 8000

server.use(bodyParser.json())
server.use('/posts', postRoute)

server.get('/', (req, res) => res.send('On Homepage'))
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log('Connected to mongo')
)
server.listen(8000)

// todo: that was not working for me
//import routes from './routes/posts';
//server.use('/posts', routes)
