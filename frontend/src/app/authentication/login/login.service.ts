import { Injectable } from '@angular/core';
import { ApiRoute, ApiUrl, CommonService } from 'ngx-crud';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Login } from './login.interface';

@Injectable(
{
	providedIn: 'root'
})
@ApiUrl(environment.apiUrl)
@ApiRoute(environment.apiRoutes.login)
export class LoginService extends CommonService
{
	login(email : string, password : string) : Observable<Login>
	{
		return this.getHttpClient().post<Login>(this.getApiUrl() + this.getApiRoute(), { email, password });
	}
}
