import {
	TRANSLOCO_LOADER,
	TRANSLOCO_CONFIG,
	translocoConfig,
	TranslocoModule,
	getBrowserLang,
	TranslocoService
} from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { TranslocoHttpLoader } from '../../transloco.http.loader';
import { Language } from './todo/language/language.type';

@NgModule(
{
	exports: [ TranslocoModule ],
	providers:
	[
		{
			provide: TRANSLOCO_CONFIG,
			useValue: translocoConfig(
			{
				availableLangs: environment.language.availableLanguages,
				defaultLang: environment.language.defaultLanguages,
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
{
	constructor(private translocoService : TranslocoService)
	{
		this.translocoService.setActiveLang(this.getBrowserLanguage());
	}

	getBrowserLanguage() : Language
	{
		const availableLanguages : string[] = this.translocoService.getAvailableLangs() as string[];
		const browserLanguages : string = getBrowserLang() as string;

		if (availableLanguages.includes(browserLanguages))
		{
			return browserLanguages as Language;
		}
		return this.translocoService.getDefaultLang() as Language;
	}
}
