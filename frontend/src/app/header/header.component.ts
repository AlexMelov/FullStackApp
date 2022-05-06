import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component(
{
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})

export class HeaderComponent
{
	loginRoute : string = '/' + environment.pageRoutes.login;
	registerRoute : string = '/' + environment.pageRoutes.register;
	todosRoute : string = '/' + environment.pageRoutes.todos;
}
