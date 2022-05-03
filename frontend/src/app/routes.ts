import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AuthenticationComponent } from "./authentication/authentication.component";

export const routes : Routes =
	[
		{
			path: '',
			component:AuthenticationComponent
		},
		{
			path: 'todos',
			component: TodoComponent
		}
	];
