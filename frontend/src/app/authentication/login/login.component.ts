import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

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
	private token : string | null = null;

	constructor(private formBuilder : FormBuilder, private loginServices : LoginService)
	{
		this.form = this.createForm();
	}

	sendLogin() : void
	{
		const { email, password } = this.form.value;

		this.loginServices.login(email, password)
			.subscribe(response =>
			{
				this.token = response.token;
			});
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
