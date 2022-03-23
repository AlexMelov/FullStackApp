#Full Stack Todo-Application
This is todo application for posting listing and deleting todos.
The entire application including the testing part is with typescript.

# backend
It uses Express.ts as a middleware and mongoDb as a database.
The application is linted with eslint and prettier and also uses Husky pre-commit tool.

## setup
You can start the application with
####npm start
But firs you need to create .env file with your private connection key from your cluster
from mongoDb.

## usage
It runs as a part from the entire application but can be used separated
from the frontend through postman for sending, receiving and deleting todos.


# frontend
It is React.ts application which is not running separate from the backend.
It uses the mongoDb to get all todos and show them as list-items inside unordered list.
The react part is linted with eslint styleling and prettier and also uses Husky pre-commit tool.
Also for the testing part it uses Cypress and Jest.

## setup
You can start the application with npm start but first you need to start the backend server
with the database (to return you the todos).

## usage
You write todo and posted, and you get it back a list with all todos.
You can also delete one.
For running the tests you need to run
###For Cypress testing - Yarn run cypress open
###For Jest testing - npm run test
