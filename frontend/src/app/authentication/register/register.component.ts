import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../authentication.model';

@Component(
	{
		selector: 'app-register',
		templateUrl: './register.component.html',
		styleUrls: [ './register.component.scss' ]
	}
)

export class RegisterComponent
{
	@Output() onRegister : EventEmitter<User> = new EventEmitter<User>();

	hide : boolean = true;
	registerObject : FormGroup = this.formBuilder.group(
	{
		email: [ '', Validators.required ],
		password: [ '', Validators.required ]
	});

	constructor(private formBuilder : FormBuilder)
	{
	}

	sendRegister() : void
	{
		this.onRegister.emit(this.registerObject.value);
	}
}
