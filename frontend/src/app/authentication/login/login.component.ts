import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
