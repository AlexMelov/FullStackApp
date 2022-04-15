import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.css' ]
})
export class ListComponent implements OnInit
{
	@Input() single_todo : { title : string } | any;
	title : string = 'frontend';
	ngOnInit() : void
	{
	}

}
