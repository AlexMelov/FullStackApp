import { Component } from '@angular/core';
import { AuthenticationType } from './authentication.type';
import { TodoService } from '../todo/todo.service';
import { AuthenticationService, LoginServices } from './authentication.service';
import { User } from './authentication.model';

@Component(
{
	selector: 'app-registration',
	templateUrl: './authentication.component.html',
	styleUrls: [ './authentication.component.scss' ]
})

export class AuthenticationComponent
{
	register : AuthenticationType = 'login';

	constructor( private todoService : TodoService, private authenticationService : AuthenticationService, private loginServices : LoginServices)
	{
	}

	get showRegister() : boolean
	{
		return this.register === 'register';
	}

	get showLogin() : boolean
	{
		return this.register === 'login';
	}

	toggleAuthentication(type : AuthenticationType) : void
	{
		this.register = type;
	}

	getRegister(event : User) : void
	{
		this.authenticationService.create(event).subscribe();
	}

	getLogin(event : User) : void
	{
		this.loginServices.create(event).subscribe();
	}
}
