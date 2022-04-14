import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent
{
	title : string = 'frontend';
	todos_array : any[] = [];
	constructor(private http : HttpClient)
	{
	}
	ngOnInit() : void
	{
		this.fetchItems();
	}
	async fetchItems() : Promise<void>
	{
		await this.http.get(environment.apiUrl + environment.apiRoutes.todos)
			.subscribe(data => this.todos_array.push(data));
	}
}
