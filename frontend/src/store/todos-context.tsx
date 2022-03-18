import axios from 'axios';
import React, { useState } from 'react';
import Todo from '../components/models/Todo';
import environmentalStage from '../environments/environment.stage';

type TodosContextObj = {
    items: Todo[];
    addTodo: (title: string) => void;
    removeTodo: (_id: number) => void;
    todoList: (data: Todo[]) => void;
    fetchedItems: Todo[];

};

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () =>
    {},
    removeTodo: () =>
    {},
    todoList: () =>
    {},
    fetchedItems: []

});

const TodosContextProvider: React.FC = props =>
{
	const [todos, setTodos] = useState<Todo[]>([]);
	const [fetchedItems, setFetchedItems] = useState<Todo[]>([]);

	const addTodoHandler = (title: string) =>
	{
		const newTodo = new Todo(title);

		setTodos(prevState =>
		{
			return prevState.concat(newTodo);
		});
	};
	const removeTodoHandler = (_id: number) =>
	{
    	const nonDeletedItems = fetchedItems.filter(item => item._id !== _id);
		const deletedItem = fetchedItems.filter(item => item._id === _id);
		const deleteRequest = async () =>
		{
			 await axios.delete(`${environmentalStage.apiUrl+environmentalStage.apiPort+environmentalStage.apiRoutes.todos}/${_id}`, {
                data: { deletedItem }
            });
    	setTodos(nonDeletedItems);
		};

		deleteRequest();
	};

	const todoList = (todos: Todo[]) =>
	{
		setFetchedItems(todos);
	};

	const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
        todoList,
        fetchedItems
    };

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);

};

export default TodosContextProvider;

