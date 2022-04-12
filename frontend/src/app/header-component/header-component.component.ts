import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: [ './header-component.component.css' ]
})
export class HeaderComponentComponent
{
	items : Array<{title : string, _id : number}> =
		[
      {
        title:'First todo',
        _id: 1
      },
      {
        title:'Second todo',
        _id: 2
      },
      {
        title:'Third todo',
        _id: 3
      },
      {
        title:'Fourth todo',
        _id: 4
      },
      {
        title:'Fifth todo',
        _id: 5
      }

		];
	listItem : string = 'Item1';
	new_item : string = '';
	status_item : string = '';
	list_item_created : boolean = false;
	constructor()
	{
	  this.status_item = Math.random() > 0.5 ? 'Checked' : 'Not Checked';
	}
	update_item_name(event : KeyboardEvent) : void
	{
    this.new_item = (<HTMLInputElement>event.target).value;
	}
	add_text() : void
	{
    this.list_item_created = true;
	}
	change_color() : void
	{
		this.status_item === 'Checked' ? 'green' : 'red';
	}
}
