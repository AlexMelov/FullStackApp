import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageComponent } from './language.component';

describe.skip('LanguageComponent', () =>
{
	let component : LanguageComponent;
	let fixture : ComponentFixture<LanguageComponent>;

	beforeEach(async() =>
	{
		await TestBed.configureTestingModule({
      declarations: [ LanguageComponent ]
    })
    .compileComponents();
	});

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(LanguageComponent);
		component = fixture.componentInstance;
    fixture.detectChanges();
	});

	it('should create', () =>
	{
    expect(component).toBeTruthy();
	});
});
