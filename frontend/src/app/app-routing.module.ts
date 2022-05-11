import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './routes';
import { AuthoristaionGuard } from "./authoristaion.guard";

@NgModule(
{
	imports:
	[
		RouterModule.forRoot(routes)
	],
	exports:
	[
		RouterModule
	],
	providers:
	[
		AuthoristaionGuard
	]
})
export class AppRoutingModule
{
}
