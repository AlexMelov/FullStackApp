import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.intercace';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit
{
	todos : Todo[] = [];

	constructor(private todoService : TodoService)
	{ }

	ngOnInit() : void
	{
		this.todoService.getAll().subscribe(todos => this.todos = todos);
	}
}
