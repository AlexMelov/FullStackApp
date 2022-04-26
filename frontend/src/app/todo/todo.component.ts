import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.intercace';
import { SpinnerService } from './list/spinner.service';
import { Observable } from 'rxjs';

@Component(
{
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: [ './todo.component.scss' ]
})
export class TodoComponent implements OnInit
{
	todos : Todo[] = [];

	loadingObservable : Observable<boolean> = this.listService.loadingObservable;

	constructor(private todoService : TodoService, public listService : SpinnerService)
	{
	}

	ngOnInit() : void
	{
		this.getTodos();
	}

	getTodos() : void
	{
		this.todoService.getAll().subscribe(todos => this.todos = todos);
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
