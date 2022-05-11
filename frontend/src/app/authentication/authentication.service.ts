import { Injectable } from '@angular/core';
import { ApiRoute, ApiUrl, CommonService } from 'ngx-crud';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import {Token} from "./login/token.interface";


@Injectable(
	{
		providedIn: 'root'
	})
@ApiUrl(environment.apiUrl)
@ApiRoute(environment.apiRoutes.login)
export class AuthenticationService extends CommonService
{
	token(email : string, password : string) : Observable<Token>
	{
		return this.getHttpClient().post<Token>(this.getApiUrl() + this.getApiRoute(), { email, password });
	}
}
