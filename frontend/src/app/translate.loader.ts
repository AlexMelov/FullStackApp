import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class TranslateLoader implements TranslocoLoader
{
	constructor(private http : HttpClient)
	{}

	getTranslation(language : string) : Observable<Translation>
	{
		return this.http.get<Translation>(environment.baseUrl + '/assets/i18n/' + language + '.json');
	}
}
