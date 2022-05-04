import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
		email: [ String, Validators.required ],
		password: [ String, Validators.required ]
	});

	constructor(private formBuilder : FormBuilder)
	{
	}

	sendLogin() : void
	{

	}
}
