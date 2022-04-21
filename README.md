# FullstackApp

> Simple todo application created in Express, MongoDb and React for posting sending and deleting todos.

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

Check your application on:

```frontend
http://localhost:4200
```

You can check your backend api on:

```backend
http://localhost:8000/todos
```
