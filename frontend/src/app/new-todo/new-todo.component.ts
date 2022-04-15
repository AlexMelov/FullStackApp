import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Todo } from '../../models/Todo';

@Component({
  	selector: 'app-new-todo',
  	templateUrl: './new-todo.component.html',
  	styleUrls: [ './new-todo.component.css' ]
})
export class NewTodoComponent implements OnInit
{
	todo : Todo = { title:'', _id:'' };

	constructor(private http : HttpClient)
	{ }

	ngOnInit() : void
	{
	}

	addNewTodo() : void
	{
		this.http.post(environment.apiUrl + environment.apiRoutes.todos, this.todo)
			.subscribe(todo => ({ message:todo }));
		this.todo.title = '';
	}
}
