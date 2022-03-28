import axios from 'axios';
import React, { useState, createContext } from 'react';
import Todo, { StateTodo } from '../components/models/Todo';
import { TodosContextModel } from '../components/models/TodosContext';
import environment from '../environments/environment.dev';

export const TodosContext : React.Context<TodosContextModel> = createContext<TodosContextModel>({
    items: [],
    addTodo: () =>
    {},
    removeTodo: () =>
    {},
    todoList: () =>
    {},
    fetchedItems:[],
	editTodo: () =>
	{},
	itemForEdit: { title: '', description: '', url: '' }

});

const TodosContextProvider : React.FC = props =>
{
	const [ todos, setTodos ] = useState<Todo[]>([]);
	const [ fetchedItems, setFetchedItems ] = useState<Todo[]>([]);
	const [ itemForEdit, setItemForEdit ] = useState<StateTodo>(null);

	function addTodoHandler  (title : string, description : string, url : string)
	{
		const newTodo : Todo = new Todo(title, description, url);

		setTodos(previousState =>
		{
			return [ ...previousState, newTodo ];
		});
		setItemForEdit( null);
	}

	async function deleteRequest (_id : number, deletedItem : Todo[], nonDeletedItems : Todo[])
	{
		await axios.delete(environment.apiUrl+environment.apiPort+environment.apiRoutes.todos+'/' + _id, {
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

	function editTodoHandler(_id : number)
	{
		const editItem : Todo[] = fetchedItems.filter(item => item._id === _id);
		const itemForEdit : StateTodo = editItem[0];

		setItemForEdit(itemForEdit);

	}

	const contextValue : TodosContextModel = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
        todoList,
        fetchedItems,
		editTodo: editTodoHandler,
		itemForEdit
    };

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);

};

export default TodosContextProvider;

