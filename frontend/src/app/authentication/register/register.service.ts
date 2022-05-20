import { Injectable } from '@angular/core';
import { ApiRoute, ApiUrl, CommonService } from 'ngx-crud';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Register } from './register.interface';

@Injectable(
{
	providedIn: 'root'
})
@ApiUrl(environment.apiUrl)
@ApiRoute(environment.apiRoutes.register)
export class RegisterService extends CommonService
{
	register(email : string, password : string, challenge : number) : Observable<Register>
	{
		return this.getHttpClient().post<Register>(this.getApiUrl() + this.getApiRoute(), { email, password, challenge });
	}
}
