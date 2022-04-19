import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
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

	it('should mock', async() =>
	{
		expect(service).toBeTruthy();
		const httpMock : HttpTestingController = TestBed.inject(HttpTestingController);

		const todo : Todo =
			{
				title:'New Todo From Jest!'
			};

		service.create(todo).subscribe(todo =>
		{
			expect(todo.title).toBe('New Todo From Jest!');
		});
		const mockRequest : TestRequest = httpMock.expectOne('http://localhost:8000/todos');

		mockRequest.flush(todo);
	});
});
