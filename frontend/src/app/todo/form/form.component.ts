import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo.intercace';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: [ './form.component.scss' ]
})
export class FormComponent
{
	@Output() addTodo : EventEmitter<Todo> = new EventEmitter<Todo>();
	todoInput : Todo = {};

	addNewTodo() : void
	{
		if (this.todoInput.title)
		{
			this.addTodo.emit(
				{
					title: this.todoInput.title
				}
			);
		}
		this.todoInput.title = null;
	}
}
