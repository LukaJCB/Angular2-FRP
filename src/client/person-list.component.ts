import {Component} from 'angular2/core'
import {Validators, FormBuilder,Control, ControlGroup} from 'angular2/common';
import {Observable} from 'rxjs/Rx';
import {Person} from './bmi.model';
import {BmiComponent} from './bmi.component';
import 'rxjs/Rx';


@Component({
    selector: "site",
    templateUrl: 'templates/person-list.html',
    directives: [BmiComponent]
})
export class PersonListComponent {
    
    people: Observable<Person[]>;
    
    numberOfPeople: Observable<number>;
    
    
    ngOnInit() {
       
        const peopleSignal: Observable<{}> = Observable.create(observer => {
            this.addNewPerson = () => observer.next();
        }).share();
        
        this.people =  peopleSignal.map(() => [new Person()])
        .startWith([new Person()])
        .scan((acc: Person[], value) => acc.concat(value));
         
        this.numberOfPeople = this.people.map(people => people.length);
        
    }
    
    addNewPerson: () => any;
    
}