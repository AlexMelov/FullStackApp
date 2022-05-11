import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { environment } from '../environments/environment';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthoristaionGuard } from "./authoristaion.guard";
import { HeaderComponent } from "./header/header.component";

export const routes : Routes =
[
	{
		path: '',
		component: HeaderComponent
	},
	{
		path: environment.pageRoutes.todos,
		component: TodoComponent,
		canActivate: [ AuthoristaionGuard ]
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
