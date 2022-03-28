import React, { useContext, useEffect, useState } from 'react';
import Item from './Item';
import styles from './styles/List.module.css';
import { TodosContext } from '../store/todos-context';
import axios from 'axios';
import Todo from './models/Todo';
import { TodosContextModel } from './models/TodosContext';
import environment from '../environments/environment.dev';

const List : React.FC = () =>
{
	const todosContext : TodosContextModel = useContext(TodosContext);
	const [ todos, setTodos ] = useState<Todo[]>([]);

	useEffect(() =>
	{
		async function fetchTodos  () : Promise<void>
		{
			const { data } = await axios.get(environment.apiUrl+environment.apiPort+environment.apiRoutes.todos);

			setTodos(data);
			todosContext.todoList(data);
		}

		fetchTodos();

	}, [ setTodos, todosContext.items ]);

	return (
		<ul className={styles.todos} data-test="list">
			{todos && todos.map((item : Todo, idx) => (
				<Item
					key={idx}
					title={item.title}
					dataKey={idx}
					onRemoveTodo={todosContext.removeTodo.bind(null, item._id)}
				/>
			))}
		</ul>
	);
};

export default List;

