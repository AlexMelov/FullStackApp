import React, { useContext, useEffect, useState } from 'react';
import Item from './Item';
import classes from './List.module.css';
import { TodosContext } from '../store/todos-context';
import axios from 'axios';
import Todo from './models/Todo';
import environmentalStage from '../environments/environment.stage';
import { TodosContextObj } from './models/TodosContext';

const List: React.FC = () =>
{

	const todosContext:TodosContextObj = useContext(TodosContext);
	const [ todos, setTodos ] = useState<Todo[]>([]);

	useEffect(() =>
	{
		async function fetchTodos  (): Promise<void>
		{
			const { data } = await axios.get(environmentalStage.apiUrl+environmentalStage.apiPort+environmentalStage.apiRoutes.todos);

			setTodos(data);
			todosContext.todoList(data);
		}

		fetchTodos();

	}, [ setTodos, todosContext.items ]);

	return (
		<ul className={classes.todos} data-test="list">
			{todos && todos.map((item: Todo, idx) => (
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

