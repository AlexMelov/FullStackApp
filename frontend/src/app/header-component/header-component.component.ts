import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: [ './header-component.component.css' ],
  styles: [ `
  .checked
  {
    color: white;
  }
  ` ]
})
export class HeaderComponentComponent
{
	items : Array<{title : string}> =
		[
      {
        title:'First todo'
      },
      {
        title:'Second todo'
      },
      {
        title:'Third todo'
      },
      {
        title:'Fourth todo'
      },
      {
        title:'Fifth todo'
      }

		];
	listItem : string = 'Item1';
	new_item : string = '';
	status_item : string = '';
	list_item_created : boolean = false;
	list_activities : boolean = true;
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
    this.items.push({ title: this.new_item });
    this.new_item = '';
    this.list_activities = false;
	}
	change_color() : string
	{
		return this.status_item === 'Checked' ? 'green' : 'red';
	}
	on_remove_item(id : number) : void
	{
		const newArray : {title : string}[] = this.items.filter((item, idx) => item ? idx === id : null);

    this.items = this.items.filter(item => item !== newArray[0]);
	}
}
