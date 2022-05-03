import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Todo } from './todo.intercace';
import { Observable } from 'rxjs';

@Injectable(
{
	providedIn: 'root'
})
export class TodoService
{
	apiUrl : string = environment.apiUrl + environment.apiRoutes.todos;

	constructor(private httpClient : HttpClient)
	{
	}

	getAll() : Observable<Todo[]>
	{
		return this.httpClient.get<Todo[]>(this.apiUrl);
	}

	create(todo : Todo) : Observable<Todo>
	{
		return this.httpClient.post<Todo>(this.apiUrl, { title: todo.title });
	}

	delete(id : string) : Observable<void>
	{
		return this.httpClient.delete<void>(this.apiUrl + '/' + id);
	}
}
