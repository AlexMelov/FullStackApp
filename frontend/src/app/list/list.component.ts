import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.intercace';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.scss' ]
})
export class ListComponent
{
	@Input() todo : Todo = {};
	@Output() removeTodo : EventEmitter<string> = new EventEmitter<string>();

	onRemove(id : string) : void
	{
		this.removeTodo.emit(
			id
		);
	}
}
