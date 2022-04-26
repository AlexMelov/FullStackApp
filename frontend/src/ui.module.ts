import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@NgModule(
{
	exports:
	[
		MatButtonModule,
		MatListModule,
		MatInputModule
	]
})
export class UiModule
{}
