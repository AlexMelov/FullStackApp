import React, { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';
import axis from 'axios';
import environmentalStage from '../environments/environment.stage';

const NewTodo: React.FC = () =>
{
	const todosContext = useContext(TodosContext);
	const todoTextInputRef: React.MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	function submitHandler (event: React.FormEvent)
	{
        event.preventDefault();
        const enteredText:string = todoTextInputRef.current.value;

        if (enteredText.trim().length !== 0)
        {
        	async function sendTodo (): Promise<void>
        	{
        		await axis.post(environmentalStage.apiUrl + environmentalStage.apiPort + environmentalStage.apiRoutes.todos, { title: enteredText });
        	};

			todosContext.addTodo(enteredText);
			todoTextInputRef.current.value = '';
			sendTodo();
        }
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<label htmlFor="text" >Todo text</label>
			<input type="text" id="text" ref={todoTextInputRef} data-test='textInput'/>
			<button data-test='addBtn'>Add Todo</button>
		</form>
	);
};

export default NewTodo;
