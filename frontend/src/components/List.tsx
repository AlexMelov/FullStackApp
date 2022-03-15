import React, { useContext, useEffect, useState } from 'react';
import Item from './Item';
import classes from './List.module.css';
import { TodosContext } from '../store/todos-context';
import axios from 'axios';

const List: React.FC = () => {
	const todosContext = useContext(TodosContext);
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		const fetchTodos = async () => {
			const { data } = await axios.get('/todos');
			setTodos(data);
			todosContext.todoList(todos);
		};

		fetchTodos();
	}, [todosContext]);

	return (
		<ul className={classes.todos}>
			{todosContext.fetchedItems &&
				todosContext.fetchedItems.map((item, idx) => (
					<Item
						key={idx}
						title={item.title}
						onRemoveTodo={todosContext.removeTodo.bind(
							null,
							item._id
						)}
					/>
				))}
		</ul>
	);
};
export default List;

// {
//     /* <Item
//     key={item._id}
//     text={item.title}
//     onRemoveTodo={todosContext.removeTodo.bind(null, item._id)}
// />; */
// }
