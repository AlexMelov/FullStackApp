import Todo from './Todo';

export type TodosContextObj = {
	items: Todo[];
	addTodo: (title: string) => void;
	removeTodo: (_id: number) => void;
	todoList: (data: Todo[]) => void;
	fetchedItems: Todo[];
};
