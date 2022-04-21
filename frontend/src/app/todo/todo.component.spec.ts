import { TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';

describe.skip('TodoComponent', () =>
{
	let component : TodoComponent;

	beforeEach(async() =>
	{
		await TestBed.configureTestingModule(
		{
			declarations: [ TodoComponent ]
		})
		.compileComponents();
	});

	it('should create', () =>
	{
			expect(component).toBe(undefined);
	});
});
