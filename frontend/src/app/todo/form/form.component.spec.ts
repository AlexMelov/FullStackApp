import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

describe.skip('FormComponent', () =>
{
	let component : FormComponent;
	let fixture : ComponentFixture<FormComponent>;

	beforeEach(async() =>
	{
		await TestBed.configureTestingModule(
			{
			declarations: [ FormComponent ],
			imports:
			[
				MatButtonModule,
				MatInputModule
			] })
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
	});
});
