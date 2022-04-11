import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: [ './header-component.component.css' ]
})
export class HeaderComponentComponent
{
	listItem : string = 'Item1';
	new_item : string = '';

	update_item_name(event : KeyboardEvent) : void
	{
    this.new_item = (<HTMLInputElement>event.target).value;
	}
}
