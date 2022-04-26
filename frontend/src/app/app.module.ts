import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormComponent } from './todo/form/form.component';
import { ListComponent } from './todo/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '../ui.module';
import { CommonModule } from '@angular/common';
import { SpinnerInterceptor } from './spinner.interceptor';

@NgModule(
{
	declarations:
	[
		AppComponent,
		TodoComponent,
		FormComponent,
		ListComponent
	],
	imports:
	[
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule,
		CommonModule,
		HttpClientModule,
		ReactiveFormsModule,
		UiModule
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
