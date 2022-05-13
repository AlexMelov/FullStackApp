import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule(
{
	exports:
	[
		MatButtonModule,
		MatListModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatIconModule,
		FormsModule,
		MatTooltipModule
	]
})
export class UiModule
{}
