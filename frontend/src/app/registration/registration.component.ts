import { Component } from '@angular/core';
import { RegistrationType } from './registration.type';

@Component(
	{
		selector: 'app-registration',
		templateUrl: './registration.component.html',
		styleUrls: [ './registration.component.scss' ]
	}
)

export class RegistrationComponent
{
	register : RegistrationType = 'login';

	get showRegister() : boolean
	{
		return this.register === 'register';
	}

	get showLogin() : boolean
	{
		return this.register === 'login';
	}

	toggleRegistration(type : RegistrationType) : void
	{
		this.register = type;
	}
}
