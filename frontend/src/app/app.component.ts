import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit
{
	title : string = 'frontend';
	todos_array : any[] = [];
	todos : { title : string, _id : string }[] = [];
	constructor(private http : HttpClient)
	{
	}
	ngOnInit() : void
	{
		this.fetchItems();
	}
	 fetchItems() : void
	{
		this.http.get(environment.apiUrl + environment.apiRoutes.todos)
			.subscribe(data => this.todos_array.push(data));
		this.todos = this.todos_array[0];
	}
}
