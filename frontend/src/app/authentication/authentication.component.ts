import { Component } from '@angular/core';
import { AuthenticationType } from './authentication.type';
import { TodoService } from '../todo/todo.service';

@Component(
	{
		selector: 'app-registration',
		templateUrl: './authentication.component.html',
		styleUrls: [ './authentication.component.scss' ]
	}
)

export class AuthenticationComponent
{
	register : AuthenticationType = 'login';

	constructor( private todoService : TodoService )
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

	getRegister(event : object) : void
	{
		this.todoService.create(event).subscribe();
	}

	getLogin(event : object) : void
	{
		this.todoService.find(event).subscribe();
	}
}
