import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.intercace';
import { environment } from '../environments/environment';

@Component(
	{
		selector: 'app-root',
		templateUrl: './app.component.html',
		styleUrls:
			[
				'./app.component.scss'
			]
	})
export class AppComponent
{
	todos : Todo[] = [];
	apiRoute : string = environment.apiUrl + environment.apiRoutes.todos;

	constructor(private http : HttpClient)
	{
	}

	ngOnInit() : void
	{
		this.fetchItems();
	}

	fetchItems() : void
	{
		this.http.get<Todo[]>(this.apiRoute)
			.subscribe(todos => this.todos = todos);
	}

	onTodoAdded(todo : Todo) : void
	{
		this.http.post<Todo>(this.apiRoute, { title: todo.title })
			.subscribe(data => this.todos.push(data));
	}

	onRemoveTodo(id : string) : void
	{
		this.http.delete<string>(this.apiRoute + '/' + id)
			.subscribe(() => this.todos = this.todos.filter(todo => todo._id !== id));
	}
}
