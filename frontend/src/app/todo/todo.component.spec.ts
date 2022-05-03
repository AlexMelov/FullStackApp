import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoService } from './todo.service';

describe.skip('ListComponent', () =>
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

		service.find().subscribe(todos =>
		{
			expect(todos).not.toHaveLength(0);
		});
	});
});
