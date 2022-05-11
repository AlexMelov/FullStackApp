import {Component} from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {AuthenticationService} from "../authentication/authentication.service";

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

	constructor(private router : Router, private authenticationService: AuthenticationService)
	{
	}

	logout() : void
	{
		this.authenticationService.logout();
		this.router.navigate([ this.loginRoute ]);
	}
}
