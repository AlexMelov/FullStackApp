import { Component, Input } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo.intercace';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.css' ]
})
export class ListComponent
{
	@Input() todo : Todo = {};

	constructor(private http : HttpClient)
	{
	}

	onRemove(id : string) : void
	{
		this.http.delete(environment.apiUrl + environment.apiRoutes.todos + '/' + id)
			.subscribe();
	}
}
