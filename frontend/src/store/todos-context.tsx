import axios from 'axios';
import React, { useState, createContext } from 'react';
import Todo from '../components/models/Todo';
import environmentalStage from '../environments/environment.stage';
import { TodosContextModel } from '../components/models/TodosContext';

export const TodosContext : React.Context<TodosContextModel> = createContext<TodosContextModel>({
    items: [],
    addTodo: () =>
    {},
    removeTodo: () =>
    {},
    todoList: () =>
    {},
    fetchedItems:[]

});

const TodosContextProvider : React.FC = props =>
{
	const [ todos, setTodos ] = useState<Todo[]>([]);
	const [ fetchedItems, setFetchedItems ] = useState<Todo[]>([]);

	function addTodoHandler  (title : string)
	{
		const newTodo : Todo = new Todo(title);

		setTodos(previousState =>
		{
			return [ ...previousState, newTodo ];
		});
	}

	async function deleteRequest (_id : number, deletedItem : Todo[], nonDeletedItems : Todo[])
	{
		await axios.delete(environmentalStage.apiUrl + ':' + environmentalStage.apiPort + environmentalStage.apiRoutes.todos +'/'+ _id, {
			data: { deletedItem }
		});

		setTodos(nonDeletedItems);
	}

	function removeTodoHandler (_id : number)
	{
    	const nonDeletedItems : Todo[] = fetchedItems.filter(item => item._id !== _id);
		const deletedItem : Todo[] = fetchedItems.filter(item => item._id === _id);

		deleteRequest(_id, deletedItem, nonDeletedItems);
	}

	function todoList (todos : Todo[])
	{
		return setFetchedItems(todos);
	}

	const contextValue : TodosContextModel = {
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

