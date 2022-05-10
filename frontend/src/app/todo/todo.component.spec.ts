import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { CrudModule } from 'ngx-crud';
import { HttpClientModule } from '@angular/common/http';



describe('LanguageComponent', () =>
{
	let component : TodoComponent;
	let fixture : ComponentFixture<TodoComponent>;

	beforeEach(async() =>
	{
		await TestBed.configureTestingModule(
			{
				imports: [ CrudModule, HttpClientModule ],
				declarations: [ TodoComponent ]
			})
			.compileComponents();
	});

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(TodoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
