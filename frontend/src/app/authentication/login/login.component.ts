import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component(
{
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})

export class LoginComponent
{
	@Output() onLogin : EventEmitter<object> = new EventEmitter<object>();

	hide : boolean = true;

	sendLogin(form : NgForm) : void
	{
		this.onLogin.emit(form.value);
	}
}
