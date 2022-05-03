import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormComponent } from './todo/form/form.component';
import { ListComponent } from './todo/list/list.component';
import { UiModule } from './ui.module';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from './transloco-root.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageComponent } from './todo/language/language.component';
import { CrudModule } from 'ngx-crud';

@NgModule(
{
	declarations:
	[
		AppComponent,
		TodoComponent,
		FormComponent,
		ListComponent,
		LanguageComponent
	],
	imports:
	[
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule,
		CommonModule,
		HttpClientModule,
		ReactiveFormsModule,
		UiModule,
		TranslocoRootModule,
		CrudModule
	],
	bootstrap:
	[
		AppComponent
	],
	schemas:
  [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule
{
}
