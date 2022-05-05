import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component(
	{
		selector: 'app-register',
		templateUrl: './register.component.html',
		styleUrls: [ './register.component.scss' ]
	}
)
export class RegisterComponent
{
	unmask : boolean = true;
	form : FormGroup;

	constructor(private formBuilder : FormBuilder, private registerService : RegisterService, private router : Router)
	{
		this.form = this.createForm();
	}

	sendRegistration() : void
	{
		const { email, password } = this.form.value;

		this.registerService.register(email, password)
			.subscribe(() => this.router.navigate([ environment.pageRoutes.todos ]));
	}

	createForm() : FormGroup
	{
		return this.formBuilder.group(
			{
				email: '',
				password: ''
			});
	}
}
