# Full Stack Todo-Application
This is todo application for posting listing and deleting todos.
The entire application including the testing part is with typescript.
### setup
```
npm install --prefix ./backend && npm install --prefix ./frontend
```


# backend
It uses Express.ts as a middleware and mongoDb as a database.
The application is linted with eslint and prettier and also uses Husky pre-commit tool.
It contains database of API's for this example todos with title and id

## setup
You need to create .env file with your private connection key from your cluster
from mongoDb.
For the backend-environmental file (.env) file has to contain database url connection from mongo db
for example DB_URL=mongodb+srv://<mognodb-user>:<mongodb-password>@cluster0.r00ao.mongodb.net/cluster-name?retryWrites=true&w=majority
You can start the application with

```
npm start:local --prefix ./backend
```

or if you are already inside backend folder
```
npm start:local
```

this will return you string inside terminal telling you that the connections is established with mongo db or connection is failed.
On "localhost:8000/todos" you'll see the database api
If you want to start the application on the vercel server you'll need to run

```
npm run start:dev --prefix ./backend
```

Or

```
npm run start:stage --prefix ./backend
```

## usage
It runs as a part from the entire application but can be used separated
from the frontend through postman for sending, receiving and deleting todos.


# frontend
It is React.ts application which is not running separate from the backend.
It uses the mongoDb to get all todos and show them as list-items inside unordered list.
The react part is linted with eslint styleling and prettier and also uses Husky pre-commit tool.
Also for the testing part it uses Cypress and Jest.

## setup
For starting the application first you need to start the backend server
with the database (to return you the todos).
After that you neeed to run

```
npm run start:local --prefix ./frontend
```

or if you are already inside frontend folder

```
npm start:local
```

If you want to start the application on the vercel server you'll need to run

```
npm run start:dev --prefix ./frontend
```

Or

```
npm run start:stage --prefix ./frontend
```

## usage
You write todo and posted, and you get it back a list with all todos.
You can also delete one.
For running the tests you need to run
###For Cypress testing - Yarn run cypress open
###For Jest testing - npm run test

