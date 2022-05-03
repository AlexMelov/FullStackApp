import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { UiModule } from '../ui.module';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from './transloco-root.module';
import { SpinnerInterceptor } from './spinner.interceptor';
import { CrudModule } from 'ngx-crud';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormComponent } from './todo/form/form.component';
import { ListComponent } from './todo/list/list.component';
import { LanguageComponent } from './todo/language/language.component';
import { RegisterComponent } from "./register/register.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";

@NgModule(
{
	declarations:
	[
		AppComponent,
		TodoComponent,
		FormComponent,
		ListComponent,
		LanguageComponent,
		RegisterComponent
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
		CrudModule,
		RouterModule,
		AppRoutingModule
	],
	providers:
	[
		{
			provide: HTTP_INTERCEPTORS,
			useClass: SpinnerInterceptor,
			multi: true
		}
	],
	bootstrap:
	[
		AppComponent
	],
	schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule
{
}
