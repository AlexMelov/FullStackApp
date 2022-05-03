import {RouterModule, Routes} from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import {RegisterComponent} from "./todo/register/register.component";
import { NgModule } from "@angular/core";

const routes : Routes =
[
	{
		path:'',
		component:TodoComponent
	},
	{
		path: '/register',
		component: RegisterComponent
	}
]

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
