import {Observable} from 'rxjs/Rx';

export class Person {
    name: Observable<string>;
    bmi: Observable<number>;
    category: Observable<string>;
    
    constructor(){
        this.name = Observable.create();
        this.bmi = Observable.create();
        this.category = Observable.create();
    }
}