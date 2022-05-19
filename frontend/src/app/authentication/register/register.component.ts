import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { RegisterConfig } from './register.interface';
import { registerConfig } from './register.config';

@Component(
{
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent
{
	unmask : boolean = false;
	form : FormGroup;
	registerConfig : RegisterConfig = registerConfig;

	constructor(private formBuilder : FormBuilder, private registerService : RegisterService, private router : Router)
	{
		this.form = this.createForm();
	}

	sendRegistration() : void
	{
		const { email, password, challenge } = this.form.value;

		this.registerService.register(email, password, challenge)
			.subscribe(
			{
				next: () =>
				{
					this.registerConfig.email = 'hidden';
					this.registerConfig.password = 'hidden';
					this.registerConfig.challenge = 'number';
					this.form?.get('challenge')?.setValidators([ Validators.required ]);
					if (challenge)
					{
						this.router.navigate([ environment.pageRoutes.login ]);
					}
				},
				error: (error : Error) => this.form.setErrors({ message: error.message })
			});
	}

	private createForm() : FormGroup
	{
		return this.formBuilder.group(
		{
			email:
			[
				'', Validators.required
			],
			password:
			[
				'', Validators.required
			],
			challenge:
			[
				''
			]
		});
	}
}
