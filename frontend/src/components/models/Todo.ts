class Todo
{
	title : string;
	description : string;
	url : string;
	_id : number;

	constructor(todoText : string, todoDescription : string, todoUrl : string)
	{
		this._id = Math.floor(Math.random() * 50);
		this.title = todoText;
		this.description=todoDescription;
		this.url=todoUrl;
	}
}

export default Todo;

export interface TodoForTest {
	title : string,
	id : string
}

export type State = {
	title ?: string;
	url : string;
	description ?: string;
}
export type Action =
	{
		type : string,
		value : string,
	}
export interface StateTodo {
	title : string;
	url : string;
	description : string;
}
