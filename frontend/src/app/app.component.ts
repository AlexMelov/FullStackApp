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
				'./app.component.css'
			]
	})
export class AppComponent
{
	todos : Todo[] = [];

	constructor(private http : HttpClient)
	{
	}

	ngOnInit() : void
	{
		this.fetchItems();
	}

	fetchItems() : void
	{
		this.http.get<Todo[]>(environment.apiUrl + environment.apiRoutes.todos)
			.subscribe(todos => this.todos = todos);
	}
}
