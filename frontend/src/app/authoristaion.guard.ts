import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable(
{
	providedIn:'root'
})
export class AuthoristaionGuard implements CanActivate
{
	canActivate() : Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree
	{
		return !!localStorage.getItem('token');
	}
}
