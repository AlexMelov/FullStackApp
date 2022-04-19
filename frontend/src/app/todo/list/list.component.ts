import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.intercace';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit
{
	@Input() todos : Todo[] = [];
	@Output() onRemove : EventEmitter<string> = new EventEmitter<string>();

	ngOnInit() : void
	{
	}

	removeTodo(id ?: string | null) : void
	{
		if (id)
		{
			this.onRemove.emit(id);
		}
	}
}
