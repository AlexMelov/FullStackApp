import React, { useContext, useEffect, useState } from 'react';
import Item from './Item';
import classes from './List.module.css';
import { TodosContext } from '../store/todos-context';
import axios from 'axios';
import Todo from './models/Todo';
import environmentalStage from '../environments/environment.stage';


const List: React.FC = () =>
{
	const todosContext = useContext(TodosContext);
	const [todos, setTodos] = useState([]);



	 useEffect(() =>
	{

		const fetchTodos = async (): Promise<void> =>
		{
			const { data } = await axios.get(environmentalStage.apiRoutes.todos);

			setTodos(data);
			todosContext.todoList(data);


		};

		fetchTodos();

	}, [setTodos, todosContext.items]);

	return (
		<ul className={classes.todos}>
			{todos && todos.map((item: Todo, idx) => (
				<Item
					key={idx}
					title={item.title}

					onRemoveTodo={todosContext.removeTodo.bind(null, item._id)}
				/>
			))}
		</ul>
	);
};

export default List;


