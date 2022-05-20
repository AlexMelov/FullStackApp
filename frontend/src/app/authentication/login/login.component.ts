import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../authentication.service';
import { Action, Token } from '../authentication.interface';
import { loginConfig } from './login.config';
import { LoginConfig } from './login.interface';

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
	loginConfig : LoginConfig = loginConfig;
	errorMessage : boolean = false;

	constructor(private formBuilder : FormBuilder, private authenticationService : AuthenticationService, private router : Router)
	{
		this.form = this.createForm();
	}

	sendLogin() : void
	{
		const { email, password, challenge } = this.form.value;

		this.authenticationService.login(email, password, challenge)
			.subscribe(
			{
				next: (token : Action & Token) =>
				{
					if (token.action === 'request-challenge')
					{
						this.errorMessage = false;
						this.loginConfig.email = 'hidden';
						this.loginConfig.password = 'hidden';
						this.loginConfig.challenge = 'number';
						this.form?.get('challenge')?.setValidators([ Validators.required ]);
					}
					else
					{
						this.authenticationService.setToken(token);
						this.router.navigate([ environment.pageRoutes.todos ]);
						this.loginConfig.email = 'email';
						this.loginConfig.password = 'password';
						this.loginConfig.challenge = 'hidden';
					}
				},
				error: (error : Error) =>
				{
					this.errorMessage = true;
					this.form.setErrors({ message: error.message });
				}
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
			],
			challenge:
			[
				''
			]
		});
	}
}
