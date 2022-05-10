import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { environment } from '../environments/environment';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';

export const routes : Routes =
[
	{
		path: environment.pageRoutes.todos,
		component: TodoComponent
	},
	{
		path: environment.pageRoutes.register,
		component: RegisterComponent
	},
	{
		path: environment.pageRoutes.login,
		component: LoginComponent
	}
];
