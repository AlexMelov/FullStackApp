import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.intercace';
import { ObserveService, ObserveStatus } from 'ngx-crud';

@Component(
{
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: [ './todo.component.scss' ]
})
export class TodoComponent implements OnInit
{
	todos : Todo[] = [];
	observeStatus : ObserveStatus | undefined;

	constructor(private todoService : TodoService, protected observeService : ObserveService)
	{
	}

	ngOnInit() : void
	{
		this.todoService.enableObserve();
		this.observeService.observeAll().subscribe(observeStatus => this.observeStatus = observeStatus);
		this.getTodos();
	}

	getTodos() : void
	{
		this.todoService.find().subscribe(todos => this.todos = todos);
	}

	createTodo(todo : Todo) : void
	{
		this.todoService.create(todo).subscribe(() => this.getTodos());
	}

	removeTodo(id : string) : void
	{
		this.todoService.delete(id).subscribe(() => this.getTodos());
	}
}
