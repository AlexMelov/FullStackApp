import { Component } from '@angular/core';

@Component(
{
	selector: 'app-language',
	templateUrl: './language.component.html',
	styleUrls:
	[
		'./language.component.scss',
		'../../../../../node_modules/font-awesome/scss/font-awesome.scss'
	]
})

export class LanguageComponent
{
	newValue : string = 'submit answer';
}
