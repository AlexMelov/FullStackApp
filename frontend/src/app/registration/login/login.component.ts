import { Component, EventEmitter, Output } from '@angular/core';

@Component(
{
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})

export class LoginComponent
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
