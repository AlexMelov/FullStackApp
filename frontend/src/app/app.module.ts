import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponentComponent } from './title-component/title-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

@NgModule({
  declarations: [
  	AppComponent,
  	TitleComponentComponent,
  	ListComponentComponent,
  	HeaderComponentComponent
  ],
  imports: [
  	BrowserModule,
  	FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule
{ }
