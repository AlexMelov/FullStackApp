import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.intercace';
import { SpinnerStore } from './list/spinner.store';
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

	loaderObservable : Observable<boolean> = this.listService.loaderObservable;

	constructor(private todoService : TodoService, public listService : SpinnerStore)
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
