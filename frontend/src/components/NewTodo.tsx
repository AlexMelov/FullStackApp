import React, { useRef, useContext, useEffect } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';
import environment from '../environments/environment.dev.js';

const NewTodo: React.FC = () => {
	const todosContext = useContext(TodosContext);
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = todoTextInputRef.current!.value;
		if (enteredText.trim().length === 0) {
			return;
		}
		todosContext.addTodo(enteredText);
		todoTextInputRef.current!.value = '';
	};
	const url = 'https://jsonplaceholder.typicode.com/posts';

	const fetchPost = async () => {
		const response = await fetch('http//localhost:8000/todos');
		const responseData = await response.json();
		console.log(response, responseData);
	};
	fetchPost();

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<label htmlFor="text">Todo text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
