import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.intercace';
import { CrudModule } from 'ngx-crud';

describe('ListComponent', () =>
{
	let service : TodoService;

	beforeEach(async() =>
	{
		await TestBed.configureTestingModule(
		{
			imports: [ HttpClientTestingModule, CrudModule ]
		});
		service = TestBed.inject(TodoService);
	});

	it('should mock the create', async() =>
	{
		const todo : Todo =
			{
				title: 'New Todo From Jest!'
			};

		service.create(todo).subscribe(todoCreate =>
		{
			expect(todoCreate.title).toBe(todo.title);
			expect(todoCreate.id).toBeTruthy();
		});

		service.find().subscribe(todos =>
		{
			expect(todos).not.toHaveLength(0);
			todos.forEach(todo =>
			{
				expect(todo.id).toBeTruthy();
				expect(todo.title).toContain('New Todo From Jest!');
			});
		});
	});
});
