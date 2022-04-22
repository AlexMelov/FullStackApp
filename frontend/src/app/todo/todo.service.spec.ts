import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoService } from './todo.service';

describe('ListComponent', () =>
{
	let service : TodoService;

	beforeEach(async() =>
	{
		await TestBed.configureTestingModule(
		{
			imports: [ HttpClientTestingModule ]
		});
		service = TestBed.inject(TodoService);
	});

	it('should get all todos', async() =>
	{
		expect(service).toBeTruthy();

		service.getAll().subscribe(todos =>
		{
			todos.forEach(todo =>
			{
				expect(todo.title).toBeTruthy();
			});
		});
	});
});
