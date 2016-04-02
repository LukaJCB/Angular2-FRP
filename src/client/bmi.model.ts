import {Observable} from 'rxjs/Rx';

export class Person {
    name: Observable<string> = Observable.create();
    bmi: Observable<number> = Observable.create();
    category: Observable<string> = Observable.create();
}