import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  	selector: 'app-new-todo',
  	templateUrl: './new-todo.component.html',
  	styleUrls: [ './new-todo.component.css' ]
})
export class NewTodoComponent implements OnInit
{

	todo_object : {title : string, _id : string} = { title:'', _id:'' };
	constructor(private http : HttpClient)
	{ }

	ngOnInit() : void
	{
	}
	addNewTodo() : void
	{
		this.http.post(environment.apiUrl + environment.apiRoutes.todos, this.todo_object)
			.subscribe(todo => ({ message:todo }));
		this.todo_object.title = '';
	}

}
