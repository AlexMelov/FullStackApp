import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable(
{
	providedIn: 'root'
})
export class SpinnerService
{
	loadingBehaviors : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	readonly loadingObservable : Observable<boolean> = this.loadingBehaviors.asObservable();

	show() : void
	{
		this.loadingBehaviors.next(true);
	}

	hide() : void
	{
		this.loadingBehaviors.next(false);
	}
}
