import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.intercace';

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
	});
});
