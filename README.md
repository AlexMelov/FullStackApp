# FullstackApp

> Simple todo application created in Express, MongoDb and Angular for posting sending and deleting todos.

## Installation

Clone the repository:

```
git clone https://github.com/AlexMelov/FullStackApp.git
```

Install the dependencies:

```
 npm install --prefix ./backend
```
```
 npm install --prefix ./frontend
```

## Setup

Create a .env file inside backend directory:

```
DB_URL=mongodb+srv://user:password@hostname
```

## Usage

Start the application with `local` environment:

```
npm run start:local --prefix ./backend
```

```
npm run start:local --prefix ./frontend
```

Browse your application on:

```
http://localhost:4200
```

Browse your backend api on:

```
http://localhost:8000/todos
```
