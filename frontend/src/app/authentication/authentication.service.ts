import { Injectable } from '@angular/core';
import { ApiRoute, ApiUrl, CommonService } from 'ngx-crud';
import { environment } from "../../environments/environment";
import { Token } from "./login/token.interface";
import { Observable } from "rxjs";


@Injectable(
	{
		providedIn: 'root'
	})
@ApiUrl(environment.apiUrl)
@ApiRoute(environment.apiRoutes.login)
export class AuthenticationService extends CommonService
{
	authenticate(email : string, password : string) : Observable<Token>
	{
		return this.getHttpClient().post<Token>(this.getApiUrl() + this.getApiRoute(), { email, password });
	}
}
