import { Component } from '@angular/core';
import { AuthenticationType } from './authentication.type';

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

	get showRegister() : boolean
	{
		return this.register === 'register';
	}

	get showLogin() : boolean
	{
		return this.register === 'login';
	}

	toggleRegistration(type : AuthenticationType) : void
	{
		this.register = type;
	}

	getRegister(event : object) : object
	{
		return event;
	}

	getLogin(event : object) : object
	{
		return event;
	}
}
