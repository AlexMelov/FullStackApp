import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../authentication.service';
import { Token } from '../authentication.interface';

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
	email : 'email' | 'hidden' = 'email';
	password : 'password' | 'hidden' = 'password';
	challenge : 'number' | 'hidden' = 'hidden';

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
				// todo: return proper typing here
				next: (token : Token) =>
				{
					if (token.action === 'request-challenge')
					{
						this.email = 'hidden';
						this.password = 'hidden';
						this.challenge = 'number';
						this.form?.get('challenge')?.setValidators([ Validators.required ]);
					}
					else
					{
						this.authenticationService.setToken(token);
						this.router.navigate([ environment.pageRoutes.todos ]);
					}
				},
				error: (error : Error) =>
				{
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
