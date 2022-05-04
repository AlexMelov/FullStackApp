import { Injectable } from '@angular/core';
import { ApiRoute, ApiUrl, CrudService } from 'ngx-crud';
import { environment } from '../../environments/environment';
import { User } from './authentication.model';

@Injectable(
	{
		providedIn: 'root'
	})
@ApiUrl(environment.apiUrl)
@ApiRoute('/register')
export class AuthenticationService extends CrudService<User, User, User, User, User, User[], User, User, User, User, void>
{

}
