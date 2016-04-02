import {Component} from 'angular2/core'
import {Validators, FormBuilder,Control, ControlGroup} from 'angular2/common';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';


@Component({
    selector: "site",
    templateUrl: 'templates/template.html'
})
export class SiteComponent {
    form: ControlGroup;
    bmi: Observable<number>;
    category: Observable<string>;
    people: Observable<string[]>;
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "name": new Control(""),
            "height": new Control(""),
            "weight": new Control("")
        });
        this.bmi = this.form.valueChanges
        .debounceTime(200)
        .map(value => this.toBmi(value.weight, value.height))
        .filter(value => value > 0);
        
        this.category = this.bmi.map(bmi => this.toCategory(bmi));
        
        const peopleSignal: Observable<string[]> = Observable.create(observer => {
            this.addNewPerson = () => observer.next();
        });
        
        this.people = peopleSignal.map(() => ["User"])
        .startWith(["User 1"])
        .scan((acc: string[], value: string[]) => acc.concat(value));
        
    }
    
    addNewPerson: () => any;
    
    toBmi(weight: number, height: number): number {
        const heightInMeters = height / 100;
        return weight / (heightInMeters * heightInMeters);
    }
    
    toCategory(bmi: number): string {
        if (bmi < 18.5) return "Underweight";
        else if (bmi < 25) return "Normal";
        else if (bmi < 30) return "Overweight";
        else return "Obese";
    }
}