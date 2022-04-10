# Fullstack todo application
> Simple todo application created in Express.ts, MongoDb and React.ts
for posting sending and deleting todos.
## Setup
> Clone the repository
```
git clone https://github.com/AlexMelov/FullStackApp.git
```
Install the dependencies:
```
 npm install --prefix ./backend
 npm install --prefix ./frontend
```
> Create .env file inside backend folder for mongodb connection example
 ```mognoose connection
DB_URL=mongodb+srv://<"mognodb-user">:<"mongodb-password">@cluster0.r00ao.mongodb.net/"cluster-name"?retryWrites=true&w=majority
```
> Start the application

```start app
npm run start:local --prefix ./backend
npm run start:local --prefix ./frontend
```
### Usage
- On localhost:3000 you have the frontend application, write todo on the text field, post it and if you want delete it.
- On localhost:8000/todos you have the backend server with the saved todos API's

### Testing
> Cypress.ts Test
```Testing
npm run e2e:local --prefix ./frontend
```
> Unit Test with Jest.ts
```Jest Test
npm run test:local --prefix ./backend
npm run test:local --prefix ./frontend
```
