import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable(
{
	providedIn: 'root'
})
export class SpinnerService
{
	loaderBehaviors : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	readonly loaderObservable : Observable<boolean> = this.loaderBehaviors.asObservable();

	show() : void
	{
		this.loaderBehaviors.next(true);
	}

	hide() : void
	{
		this.loaderBehaviors.next(false);
	}
}
