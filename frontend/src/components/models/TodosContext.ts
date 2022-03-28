import Todo, { StateTodo } from './Todo';

export type TodosContextModel =
{
	items : Todo[];
	addTodo : (title : string, enteredDescription : string, enteredUrl : string) => void;
	removeTodo : (_id : number) => void;
	todoList : (data : Todo[]) => void;
	fetchedItems : Todo[];
	editTodo : (_id : number) => void;
	itemForEdit : StateTodo,
};
