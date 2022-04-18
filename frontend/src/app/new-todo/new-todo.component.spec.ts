import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTodoComponent } from './new-todo.component';

describe('list component', () =>
{
	let component : NewTodoComponent;
	let fixture : ComponentFixture<NewTodoComponent>;

	beforeEach( async() =>
	{
		await TestBed.configureTestingModule(
			{
				declarations:[ NewTodoComponent ]
			}).compileComponents();
	});
	beforeEach(() =>
	{
		fixture = TestBed.createComponent(NewTodoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should test', () =>
	{
		expect(component.todo.title).toBe(undefined);
	});
});
