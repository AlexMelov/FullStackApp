import React, { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';
import axios from 'axios';
import environmentalStage from '../environments/environment.stage';
import { TodosContextObj } from './models/TodosContext';

const NewTodo: React.FC = () =>
{
	const todosContext:TodosContextObj = useContext(TodosContext);
	const todoTextInputRef: React.MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	async function sendTodo (titleText:string): Promise<void>
	{
		await axios.post(environmentalStage.apiUrl + environmentalStage.apiPort + environmentalStage.apiRoutes.todos, { title: titleText });
	}

	function submitHandler (event: React.FormEvent)
	{
        event.preventDefault();
        const enteredText:string = todoTextInputRef.current.value;

        if (enteredText.trim().length !== 0)
        {
			todosContext.addTodo(enteredText);
			todoTextInputRef.current.value = '';
			sendTodo(enteredText);
        }
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<label htmlFor="text" >Todo text</label>
			<input type="text" id="text" ref={todoTextInputRef} data-test="text-input"/>
			<button data-test="add-button">Add Todo</button>
		</form>
	);
};

export default NewTodo;
