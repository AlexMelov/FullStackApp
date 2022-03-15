import axios from 'axios';
import React, { useState } from 'react';
import Todo from '../components/models/Todo';

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

    	setTodos(nonDeletedItems);
		const deletedItem = fetchedItems.filter(item => item._id === _id);
		const deleteRequest = async () =>
		{
			 await axios.delete(`/todos/${_id}`, {
                data: { deletedItem }
            });
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
