import { HttpClient } from '@angular/common/http';
import {
	TRANSLOCO_LOADER,
	Translation,
	TranslocoLoader,
	TRANSLOCO_CONFIG,
	translocoConfig,
	TranslocoModule,
	getBrowserLang
} from '@ngneat/transloco';
import { Injectable, NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader
{
	constructor(private http : HttpClient)
	{}

	getTranslation(language : string) : Observable<Translation>
	{
		return this.http.get<Translation>(environment.baseUrl + '/assets/i18n/' + language + '.json');
	}
}

@NgModule(
{
	exports: [ TranslocoModule ],
	providers: [
    {
		provide: TRANSLOCO_CONFIG,
		useValue: translocoConfig(
		{
			availableLangs: [ 'en', 'de', 'mk' ],
			defaultLang: getBrowserLang() ? getBrowserLang() : 'en',
			reRenderOnLangChange: true,
			prodMode: environment.metadata.environment === 'prod'
      	})
    },
    {
		provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader
    }
	]
})

export class TranslocoRootModule
{}
