import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerStore } from './todo/list/spinner.store';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor
{
	constructor(private listService : SpinnerStore)
	{}

	intercept(request : HttpRequest<unknown>, next : HttpHandler) : Observable<HttpEvent<unknown>>
	{
  	this.listService.show();
  	return next.handle(request).pipe(
		finalize(() =>
		{
			this.listService.hide();
		}));
	}
}
