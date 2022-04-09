# Fullstack todo application
Simple todo application created in
- backend part : Express.ts, MongoDb with mongoose,
- frontend part : React.ts,

for posting sending and deleting todos also for testing todos and runing ci github pipeline

## Setup

- [x] git clone https://github.com/AlexMelov/FullStackApp.git
```
 npm install --prefix ./backend
 npm install --prefix ./frontend
```
- [x] Create .env file inside backend folder for mongodb connection example
 ```mognoose connection
DB_URL=mongodb+srv://<"mognodb-user">:<"mongodb-password">@cluster0.r00ao.mongodb.net/"cluster-name"?retryWrites=true&w=majority
```
- [x] Start the application

```start app
npm run start:local --prefix ./backend
npm run start:local --prefix ./frontend
```
### Usage
- On localhost:3000 you have the frontend application, write todo on the text field, post it and if you want delete it.
- On localhost:8000/todos you have the backend server with the saved todos API's
### Building
```Build
npm run build:local --prefix ./backend
npm run build:local --prefix ./frontend
```
### Testing
- [x] Cypress.ts Test
```Testing
npm run e2e:local --prefix ./frontend
```
- [x] Unit Test with Jest.ts
```Jest Test
npm run test:local --prefix ./backend
npm run test:local --prefix ./frontend
```
### GITHUB/VERCEL -  CI/CD

```Vercel
npm install -g vercel
```
- Initialize project for vercel PRODUCT_ID and ORG_ID on root with command
```vercel command
vercel
```
- [x] Follow the steps on the IDE terminal
- [x] Get the PRODUCT_ID and ORG_ID form vercel folder
##### On the GitHub repository

> - settings -> Environments -> New Environment
- For master branch name it STAGE
- For develop branch name it DEV
- Add PRODUCT_ID and ORG_ID as secrets
- name it VERCEL_PRODUCT_ID and VERCEL_ORG_ID
- Set the MongoDb URL as secret too as DB_URL
> - Create Vercel token inside settings -> tokens and name it VERCEL_TOKEN
- Set the token inside Environment as secret and name it VERCEL_TOKEN
> - Inside Vercel initialized project Settings -> Environments
- Add new environment for MongoDb and name it DB_URL with the string connection
- Add another environment and name it EXPRESS_APP_ENV and set the secret "stage" without quotation
- [x] Push the branch to see the actions
- [x] Get the link from action deploy stage inside Run amondnet/vercel-action@v20.0.1 field :+1:

# Backend
Uses Express.ts as a middleware and mongoDb as a database.
The application is linted with eslint and prettier and also uses Husky pre-commit tool.
It contains database of API's, for this example todo objects with title and id
For testing uses Jest.ts and supertest

# Frontend
React.ts application which is not running separate from the backend.
Uses backend server for api, sending and listing the todos through axios.
The react part is linted with eslint styleling and prettier and also uses Husky pre-commit tool.
Also for the testing part it uses Cypress.ts and Jest.ts with Enzyme.

![Build Status](https://img.shields.io/appveyor/build/AlexMelov/FullStackApp?style=plastic)
