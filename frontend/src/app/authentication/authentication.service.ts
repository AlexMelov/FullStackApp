import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoute, ApiUrl, CommonService } from 'ngx-crud';
import { environment } from '../../environments/environment';
import { Token } from './authentication.interface';

@Injectable({ providedIn: 'root' })
@ApiUrl(environment.apiUrl)
@ApiRoute(environment.apiRoutes.login)
export class AuthenticationService extends CommonService
{
	token : Token = {};

	login(email : string, password : string, challenge : number | string) : Observable<Token>
	{
		// todo: fix return type... token or challenge command
		return this.getHttpClient().post<Token & { name : string }>(this.getApiUrl() + this.getApiRoute(), { email, password, challenge });
	}

	logout() : void
	{
		this.setToken({});
	}

	getToken() : Token
	{
		return JSON.parse(sessionStorage.getItem('token') || '{}');
	}

	setToken(token : Token) : void
	{
		sessionStorage.setItem('token', JSON.stringify(token));
	}

	isLoggedIn() : boolean
	{
		return !!this.getToken()?.token;
	}
}
