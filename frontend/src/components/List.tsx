import React, {useContext, useEffect, useState} from 'react';
import Item from './Item';
import classes from './List.module.css';
import {TodosContext} from '../store/todos-context';
import axios from 'axios';

const List: React.FC = () => {
	const todosContext = useContext(TodosContext);
	const [todos, setTodos] = useState([]);


	useEffect(() => {

		const fetchTodos = async () => {
			const {data} = await axios.get('/todos');
			await setTodos(data)
			await todosContext.todoList(data);
			console.log(data)
		};
		fetchTodos()

	}, [setTodos,todosContext.items]);

	return (
		<ul className={classes.todos}>
			{todos && todos.map((item, idx) => (
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


