import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () =>
{
	let component : FormComponent;
	let fixture : ComponentFixture<FormComponent>;

	beforeEach(async() =>
	{
		await TestBed.configureTestingModule(
			{
			declarations: [ FormComponent ]
			})
			.compileComponents();
	});

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(FormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should test form', () =>
	{
		component.todoInput.title = 'Test From Jest';
		component.addTodo.emit({ title: component.todoInput.title });
		expect(component.todoInput.title).toBe('Test From Jest');
		component.addNewTodo();
		expect(component.todoInput.title).toBe(null);
	});
});
