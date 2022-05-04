import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Todo } from './todo.intercace';
import { ApiRoute, ApiUrl } from 'ngx-crud';
import { CrudServiceCustom } from './crud-custom.service';

@Injectable(
{
	providedIn: 'root'
})
@ApiUrl(environment.apiUrl)
@ApiRoute(environment.apiRoutes.todos)
export class TodoService extends CrudServiceCustom<Todo, Todo>
{
}
