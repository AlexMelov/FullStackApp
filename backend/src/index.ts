import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

const server = express();

import postRoute from './routes/posts';

require('dotenv/config');

// const PORT = 8000;

server.use(bodyParser.json());
server.use('/posts', postRoute);

server.get('/', (req: any, res: any) => res.send('On Homepage'));
mongoose.connect(process.env.DB_CONNECTION, () =>
	console.log('Connected to mongo')
);
server.listen(8000);

// console.log(process.env.EXPRESS_APP_ENV);
// process.exit(0);
