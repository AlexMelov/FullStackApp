import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Id, Todo } from '../todo.intercace';

@Component(
{
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.scss' ]
})

export class ListComponent
{
	@Input() todos : Todo[] = [];
	@Output() onRemove : EventEmitter<string> = new EventEmitter<string>();

	removeTodo(id ?: Id) : void
	{
		if (id)
		{
			this.onRemove.emit(id);
		}
	}
}
