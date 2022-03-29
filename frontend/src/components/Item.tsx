import React, { useContext, useState } from 'react';
import styles from './styles/Item.module.css';
import { TodosContextModel } from './models/TodosContext';
import { TodosContext } from '../store/todos-context';
import axios from 'axios';
import environment from '../environments/environment.dev';

const Item : React.FC<{
	title : string;
	description : string;
	url : string;
	onRemoveTodo : () => void;
	hyperlinkHandler : () => void;
	dataKey : number;
	_id : number;
	isOpenHandler : (value : boolean) => void;
}> = props =>

{
	const todosContext : TodosContextModel = useContext(TodosContext);
	const [ title, setTitle ] = useState<string>('');
	const [ url, setUrl ] = useState<string>('');
	const [ description, setDescription ] = useState<string>('');
	const [ isOpen, setIsOpen ] = useState<boolean>(false);

	function submitHandler(event : React.FormEvent)
	{
		event.preventDefault();
		axios.patch(environment.apiUrl+environment.apiPort+environment.apiRoutes.todos + '/' + props._id, { title, url, description });
		setTitle('');
		setUrl('');
		setDescription('');
		setIsOpen(false);
		props.isOpenHandler(false);
	}

	function editTodo() : void
	{
		todosContext.editTodo( props._id);
		setTitle(props.title);
		setUrl(props.url);
		setDescription(props.description);
		setIsOpen(true);
		props.isOpenHandler(true);
	}

	function titleHandler(event : React.ChangeEvent<HTMLInputElement>)
	{
		setTitle(event.target.value);
	}

	function urlHandler(event : React.ChangeEvent<HTMLInputElement>)
	{
		setUrl(event.target.value);
	}

	function descriptionHandler(event : React.ChangeEvent<HTMLInputElement>)
	{
		setDescription(event.target.value);
	}
	function cancelHandler()
	{
		setIsOpen(false);
		setTitle('');
		setUrl('');
		setDescription('');
		localStorage.setItem('key', '0');
		props.isOpenHandler(false);
	}
	return (
		<li className={styles.item} data-test="item">
			{
				isOpen && <form className={styles.editForm} onSubmit={submitHandler}>
					<label>Title</label>
					<input type='text' value={title} onChange={titleHandler} data-test="edit-title"/>
					<label>Description</label>
					<input type='text' value={description} onChange={descriptionHandler} data-test="edit-decsription"/>
					<label>Url</label>
					<input type='text' value={url} onChange={urlHandler} data-test="edit-url"/>
					<div className={styles.buttons}>
						<button type='submit' data-test='patch-todo'>Save</button>
						<button onClick={cancelHandler}>Cancel</button>
					</div>
				</form>
			}
			<h4>{props.title}</h4>
			<p>{props.description}</p>
			<img src={props.url} alt={props.title} onClick={props.hyperlinkHandler}/>
			<div className={styles.buttons}>
				<button onClick={props.onRemoveTodo} data-test='remove-button'>Remove</button>
				<button onClick={editTodo} data-test='edit-button'>Edit</button>
			</div>
		</li>
	);
};

export default Item;
