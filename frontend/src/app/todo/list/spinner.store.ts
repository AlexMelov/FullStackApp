import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable(
{
	providedIn: 'root'
})
export class SpinnerStore
{
	store : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	readonly loaderObservable : Observable<boolean> = this.store.asObservable();

	show() : void
	{
		this.store.next(true);
	}

	hide() : void
	{
		this.store.next(false);
	}
}
