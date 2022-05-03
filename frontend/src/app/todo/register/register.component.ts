import { Component, Output, EventEmitter } from '@angular/core';

@Component(
	{
		selector: 'app-register',
		templateUrl: './register.component.html',
		styleUrls: [ './register.component.scss' ]
	}
)

export class RegisterComponent
{
	@Output() onRegister : EventEmitter<object> = new EventEmitter<object>();

	hide : boolean = true;
	user_email : string | null = null;
	user_password : string | null = null;

	userCredentials() : void
	{
		this.onRegister.emit(
		{
			email: this.user_email,
			password: this.user_password
		}
		);
	this.user_password = null;
	this.user_email = null;
	}
}
