import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
	registerObject : FormGroup = this.formBuilder.group(
	{
		emailRegister: [ '', Validators.required ],
		passwordRegister: [ '', Validators.required ]
	});

	constructor(private formBuilder : FormBuilder)
	{
	}

	sendRegister() : void
	{
		this.onRegister.emit(this.registerObject.value);
	}
}
