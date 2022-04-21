import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule(
{
	exports:
	[
		MatButtonModule,
		MatListModule,
		MatInputModule,
		MatToolbarModule,
		MatProgressSpinnerModule
	]
})
export class UiModule
{}
