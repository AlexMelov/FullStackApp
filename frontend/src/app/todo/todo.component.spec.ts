import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
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

	it('should mock the create', async() =>
	{
		expect(service).toBeTruthy();
		const httpMock : HttpTestingController = TestBed.inject(HttpTestingController);

		const todo : { title : string, _id : string } =
			{
				title: 'New Todo From Jest!',
				_id: '1'
			};

		service.create(todo).subscribe(todo =>
		{
			expect(todo.title).toBe('New Todo From Jest!');
		});

		service.delete(todo._id).subscribe(todo =>
		{
			expect(todo).toBe(null);
		});

		const mockRequest : TestRequest = httpMock.expectOne('http://localhost:8000/todos');

		mockRequest.flush(todo);
	});
});