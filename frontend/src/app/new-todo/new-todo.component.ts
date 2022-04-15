import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo.intercace';
import { environment } from '../../environments/environment';

@Component({
  	selector: 'app-new-todo',
  	templateUrl: './new-todo.component.html',
  	styleUrls: [ './new-todo.component.css' ]
})
export class NewTodoComponent
{
	todo : Todo = {};

	constructor(private http : HttpClient)
	{
	}

	addNewTodo() : void
	{
		this.http.post(environment.apiUrl + environment.apiRoutes.todos, this.todo)
			.subscribe();
		this.todo.title = null;
	}
}
