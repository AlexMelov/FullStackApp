import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from "./authentication.service";

@Injectable(
{
	providedIn:'root'
})
export class AuthenticationInterceptor implements HttpInterceptor
{
	constructor(private authenticationService: AuthenticationService)
	{
	}

	intercept<T>(request : HttpRequest<T>, next : HttpHandler) : Observable<HttpEvent<T>>
	{
		if (this.authenticationService.getToken())
		{
			return next.handle(this.appendHeader<T>(request));
		}
		return next.handle(request);
	}

	appendHeader<T>(request : HttpRequest<T>) : HttpRequest<T>
	{
		return request.clone(
		{
			headers: request.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken().token)
		});
	}
}
