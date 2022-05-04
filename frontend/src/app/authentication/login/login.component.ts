import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../authentication.model';

@Component(
{
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})

export class LoginComponent
{
	@Output() onLogin : EventEmitter<User> = new EventEmitter<User>();

	hide : boolean = true;
	loginObject : FormGroup = this.formBuilder.group(
	{
		emailLogin: '',
		passwordLogin: ''
	});

	constructor(private formBuilder : FormBuilder)
	{
	}

	sendLogin() : void
	{
		this.onLogin.emit(this.loginObject.value);
	}
}
