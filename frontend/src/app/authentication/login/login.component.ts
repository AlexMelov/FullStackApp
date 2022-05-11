import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import {AuthenticationService} from "../authentication.service";
import {Token} from "./token.interface";

@Component(
{
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent
{
	unmask : boolean = false;
	form : FormGroup;

	constructor(private formBuilder : FormBuilder, private authenticationService : AuthenticationService, private router : Router)
	{
		this.form = this.createForm();
	}

	sendLogin() : void
	{
		const { email, password } = this.form.value;

		this.authenticationService.authenticate(email, password)
			.subscribe(
			//todo save token in a authentication.service.ts
			{
				next: (token : Token) =>
				{
					localStorage.setItem('token',JSON.stringify(token.token))
					return this.router.navigate([ environment.pageRoutes.todos ])
				},
				error: (error : Error) => this.form.setErrors({ message: error.message }),
			});
	}

	private createForm() : FormGroup
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
