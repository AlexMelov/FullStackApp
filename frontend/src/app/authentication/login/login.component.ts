import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component(
{
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent
{
	unmask : boolean = true;
	form : FormGroup;

	constructor(private formBuilder : FormBuilder, private loginServices : LoginService, private router : Router)
	{
		this.form = this.createForm();
	}

	sendLogin() : void
	{
		const { email, password } = this.form.value;

		this.loginServices.login(email, password)
			.subscribe(response => response);
	}

	createForm() : FormGroup
	{
		return this.formBuilder.group(
		{
			email:
			[
				'',
				Validators.required
			],
			password:
			[
				'',
				Validators.required
			]
		});
	}
}
