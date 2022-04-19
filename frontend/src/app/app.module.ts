import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormComponent } from './todo/form/form.component';
import { ListComponent } from './todo/list/list.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

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
		BrowserModule,
		FormsModule,
		HttpClientModule,
		CommonModule,
		BrowserAnimationsModule,
		MatButtonModule
	],
	providers:
	[],
	bootstrap:
	[
		AppComponent
	]
})
export class AppModule
{
}
