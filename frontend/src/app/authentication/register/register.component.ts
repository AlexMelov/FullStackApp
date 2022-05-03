import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

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

	sendRegister(form : NgForm) : void
	{
		this.onRegister.emit(form.value);
	}
}
