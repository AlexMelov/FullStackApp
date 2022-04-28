import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Languages } from './language.model';

@Component(
{
	selector: 'app-language',
	templateUrl: './language.component.html',
	styleUrls:
	[
		'./language.component.scss'
	]
})

export class LanguageComponent
{
	languages : Languages[] = [
		{ value: 'en', language: 'EN' },
		{ value: 'de', language: 'DE' },
		{ value: 'mk', language: 'MK' }
	];

	constructor(private translocoService : TranslocoService)
	{
	}

	setLanguage(language : string) : void
	{
		this.translocoService.setActiveLang(language);
	}
}
