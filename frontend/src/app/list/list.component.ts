import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.css' ]
})
export class ListComponent implements OnInit
{
	@Input() single_todo : { title : string, _id : string } | any;

	constructor(private http : HttpClient)
	{
	}
	ngOnInit() : void
	{
	}
	onRemove(_id : string) : void
	{
		this.http.delete(environment.apiUrl + environment.apiRoutes.todos + `/${_id}`)
			.subscribe(todo => ({ message:todo }));
	}
}
