import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ListService } from './todo/list/list.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor 
{
	constructor(private listService : ListService) 
	{}

	intercept(request : HttpRequest<unknown>, next : HttpHandler) : Observable<HttpEvent<unknown>> 
	{
  	this.listService.show();
  	return next.handle(request).pipe(
    	finalize(() =>
    	{
			this.listService.hide();
    	})
  	);
	}
}
