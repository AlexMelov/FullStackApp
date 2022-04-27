import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule(
{
	exports:
	[
		MatButtonModule,
		MatListModule,
		MatInputModule,
		MatProgressSpinnerModule
	]
})
export class UiModule
{}
