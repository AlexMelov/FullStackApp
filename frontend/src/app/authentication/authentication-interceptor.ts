import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthenticationService} from "./authentication.service";

@Injectable(
{
	providedIn:'root'
})
export class AuthenticationInterceptor implements HttpInterceptor
{
	constructor(private authenticationService: AuthenticationService)
	{
	}

	//todo inject authentication.service to get token
	//todo replace <any> with other type
	intercept(request : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>
	{
		const authorisationRequest : HttpRequest<any> = request.clone(
		{
			headers: request.headers.set('Authorization', 'null')
		});

		return next.handle(authorisationRequest);
	}
}
