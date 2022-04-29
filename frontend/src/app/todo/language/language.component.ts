import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { languages } from './language.config';
import { Languages } from './language.interface';
import { Language } from './language.type';

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
	languages : Languages[] = languages;
	activeLanguage : Language = this.getLanguage();

	constructor(private translocoService : TranslocoService)
	{
	}

	setLanguage(language : Languages) : void
	{
		this.translocoService.setActiveLang(language.value);
	}

	getLanguage() : Language
	{
		return this.translocoService.getActiveLang() as Language;
	}
}
