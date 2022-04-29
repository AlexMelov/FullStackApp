import {
	TRANSLOCO_LOADER,
	TRANSLOCO_CONFIG,
	translocoConfig,
	TranslocoModule,
	getBrowserLang
} from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { TranslocoHttpLoader } from '../../transloco.http.loader';

@NgModule(
{
	exports: [ TranslocoModule ],
	providers:
	[
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
