import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: [ './list-component.component.css' ]
})
export class ListComponentComponent implements OnInit
{
	list_item : string = 'Item no1';
	list_status : string = 'Active';
	list_activities : boolean = true;
	item_creation_status : string = 'No item was created';
	constructor()
	{
		setTimeout(() =>
		{
      this.list_status = 'Inactive';
      this.list_activities = false;
		}, 2000);
	}
	listStatus() : string
	{
		return this.list_status = 'Active';
	}
	ngOnInit() : void
	{
	  return;
	}
	  onCreateItem() : string
	{
	   return this.item_creation_status = 'Item was created';
	}
}
