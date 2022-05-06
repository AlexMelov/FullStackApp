import { Injectable } from '@angular/core';
import { ApiRoute, ApiUrl, CommonService } from 'ngx-crud';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable(
{
	providedIn: 'root'
})
@ApiUrl(environment.apiUrl)
@ApiRoute(environment.apiRoutes.login)
export class LoginService extends CommonService
{
	login(email : string, password : string) : Observable<{token : string}>
	{
		return this.getHttpClient().post<{token : string}>(this.getApiUrl() + this.getApiRoute(), { email, password });
	}
}
