import React, { useContext, useReducer } from 'react';
import styles from './styles/NewTodo.module.css';
import { TodosContext } from '../store/todos-context';
import axios from 'axios';
import environment from '../environments/environment.dev';
import { TodosContextModel } from './models/TodosContext';
import { Action, State, StateTodo } from './models/Todo';

const NewTodo : React.FC = () =>
{

	const todosContext : TodosContextModel = useContext(TodosContext);
	const initialState : StateTodo = { title: '', url: '', description: '' };
	const [ todoInputs, dispatchTodoInputs ] = useReducer(reducerHandler, initialState);

	function reducerHandler(state : State, action : Action)
	{
		switch (action.type)
		{
		case 'TODO_TITLE':
			return { ...state, title: action.value };

		case 'TODO_URL':
			return { ...state, url: action.value };

		case 'TODO_DESCRIPTION':
			return { ...state, description: action.value };

		case 'CLEAR':
			return initialState;

		default:
			return initialState;
		}
	}
	async function sendTodo (title : string, description : string, url : string)
	{
		await axios.post(environment.apiUrl+environment.apiPort+environment.apiRoutes.todos, { title, description, url });
	}

	function submitHandler (event : React.FormEvent)
	{
		event.preventDefault();

		if (todoInputs.title.trim().length !== 0)
		{
			todosContext.addTodo(todoInputs.title, todoInputs.description, todoInputs.url);
			sendTodo(todoInputs.title, todoInputs.description, todoInputs.url);
			dispatchTodoInputs({ type:'CLEAR', value:'' });
		}
	}

	function titleHandler(event : React.ChangeEvent<HTMLInputElement> )
	{
		dispatchTodoInputs({ type: 'TODO_TITLE', value : event.target.value });
	}
	function urlHandler(event : React.ChangeEvent<HTMLInputElement>)
	{
		dispatchTodoInputs({ type: 'TODO_URL', value: event.target.value });
	}
	function descriptionHandler(event : React.ChangeEvent<HTMLInputElement>)
	{
		dispatchTodoInputs({ type: 'TODO_DESCRIPTION', value: event.target.value });
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<label htmlFor="text">Todo text</label>
			<input type="text" id="text" value={todoInputs.title} onChange={titleHandler} data-test="title-input"/>
			<label htmlFor="description">Todo description</label>
			<input id='description' type='text' placeholder='Describe your Todo' value={todoInputs.description} onChange={descriptionHandler} data-test="description-input" />
			<label htmlFor='image'>Place your Image URL</label>
			<input type='url' placeholder='Your image URL' value={todoInputs.url} onChange={urlHandler} data-test="url-input" />
			<button type='submit' data-test="add-button">Add Todo</button>
		</form>
	);
};

export default NewTodo;
