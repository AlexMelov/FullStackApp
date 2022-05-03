import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { TodoComponent } from './todo/todo.component';

export const routes : Routes =
	[
		{
			path: '',
			component:RegistrationComponent
		},
		{
			path: 'todos',
			component: TodoComponent
		}
	];
