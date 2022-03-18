import React, { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';
import axios from 'axios';
import environmentalStage from '../environments/environment.stage';

const NewTodo: React.FC = () =>
{
	const todosContext = useContext(TodosContext);
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) =>
	{
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0)
        {
        	return;
        }

        const sendTodo = async () =>
        {
        	 await axios.post(environmentalStage.apiUrl+environmentalStage.apiPort+environmentalStage.apiRoutes.todos, { title: enteredText });
        };

        todosContext.addTodo(enteredText);
        todoTextInputRef.current!.value = '';

        sendTodo();
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<label htmlFor="text">Todo text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
