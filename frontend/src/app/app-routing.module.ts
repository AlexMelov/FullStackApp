import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from "./register/register.component";


const routes : Routes =
[
	{
		path: '',
		component:RegisterComponent
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
