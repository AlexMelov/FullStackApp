import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';

const routes : Routes =
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

@NgModule(
{
	imports:
	[
		RouterModule.forRoot(routes)
	],
	exports:
	[
		RouterModule
	]
})

export class AppRoutingModule
{

}
