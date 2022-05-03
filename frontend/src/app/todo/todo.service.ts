import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Todo } from './todo.intercace';
import { ApiRoute, ApiUrl, CrudService } from 'ngx-crud';

@Injectable({
	providedIn: 'root'
})
@ApiUrl(environment.apiUrl)
@ApiRoute(environment.apiRoutes.todos)
export class TodoService extends CrudService<Todo, Todo>
{

}
