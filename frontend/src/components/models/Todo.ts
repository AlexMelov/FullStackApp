class Todo
{
	title : string;
	_id : number;

	constructor(todoText : string)
	{
		this._id = Math.floor(Math.random() * 50);
		this.title = todoText;
	}
}

export default Todo;

export interface TodoForTest
{
	title : string,
	id : string
}
