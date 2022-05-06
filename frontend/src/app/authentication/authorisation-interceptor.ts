import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Observable } from 'rxjs';

@Injectable(
{
	providedIn:'root'
})
export class AuthorisationInterceptor implements HttpInterceptor
{
	constructor(private loginComponent : LoginComponent)
	{
	}

	intercept(request : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>
	{
		const authorisationToken : string = this.loginComponent.getToken();
		const authorisationRequest : HttpRequest<any> = request.clone(
		{
			headers: request.headers.set('Authorization', authorisationToken)
		});

		return next.handle(authorisationRequest);
	}
}
