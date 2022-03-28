import React, { useContext, useEffect, useState } from 'react';
import Item from './Item';
import styles from './styles/List.module.css';
import { TodosContext } from '../store/todos-context';
import axios from 'axios';
import Todo from './models/Todo';
import { TodosContextModel } from './models/TodosContext';

const List : React.FC = () =>
{
	const todosContext : TodosContextModel = useContext(TodosContext);
	const [ todos, setTodos ] = useState<Todo[]>([]);
	const [ isOpen, setIsOpen ] = useState<boolean>(false);

	useEffect(() =>
	{
		async function fetchTodos  () : Promise<void>
		{
			const { data } = await axios.get('http://localhost:8000/todos/');

			setTodos(data);
			todosContext.todoList(data);
		}
		fetchTodos();
	}, [ setTodos, todosContext.items, todosContext.itemForEdit, isOpen ]);

	function hyperlinkHandler(link : string) : void
	{
		window.open(link, '_blank');
	}
	function isOpenHandler(isOpenValue : boolean) : void
	{
		setIsOpen(isOpenValue);
	}

	return (
		<ul className={styles.todos} data-test="list">
			{todos && todos.map((item : Todo, idx) => (
				<Item
					key={idx}
					title={item.title}
					dataKey={idx}
					url={item.url}
					description={item.description}
					onRemoveTodo={todosContext.removeTodo.bind(null, item._id)}
					hyperlinkHandler={ () =>hyperlinkHandler(item.url) }
					_id = { item._id }
					isOpenHandler = { isOpenHandler }
				/>
			))}
		</ul>
	);
};

export default List;
