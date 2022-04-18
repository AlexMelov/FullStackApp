import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.intercace';

@Component(
	{
		selector: 'app-new-todo',
		templateUrl: './new-todo.component.html',
		styleUrls: [ './new-todo.component.scss' ]
	})
export class NewTodoComponent
{
	@Output() todoCreated : EventEmitter<Todo> = new EventEmitter<Todo>();
	todo : Todo = {};

	addNewTodo() : void
	{
		this.todoCreated.emit(
			{
				title: this.todo.title
			}
		);
		this.todo.title = null;
	}
}
