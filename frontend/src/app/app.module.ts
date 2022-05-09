import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormComponent } from './todo/form/form.component';
import { ListComponent } from './todo/list/list.component';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from './transloco-root.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageComponent } from './todo/language/language.component';
import { CrudModule } from 'ngx-crud';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui.module';
import { AuthorisationInterceptor } from './authentication/authorisation-interceptor';
import { TRANSLOCO_LOADER } from '@ngneat/transloco';
import { HeaderComponent } from './header/header.component';

@NgModule(
{
	declarations:
	[
		AppComponent,
		TodoComponent,
		FormComponent,
		ListComponent,
		LanguageComponent,
		RegisterComponent,
		LoginComponent,
		HeaderComponent
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
			provide: [ HTTP_INTERCEPTORS, TRANSLOCO_LOADER ],
			useClass: AuthorisationInterceptor,
			multi: true
		}
	],
	bootstrap:
	[
		AppComponent
	]
})
export class AppModule
{
}
