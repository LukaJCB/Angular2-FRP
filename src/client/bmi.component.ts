import {Component, Input} from 'angular2/core'
import {Validators, FormBuilder,Control, ControlGroup} from 'angular2/common';
import {Observable} from 'rxjs/Rx';
import {Person} from './bmi.model';
import 'rxjs/Rx';


@Component({
    selector: "person-bmi",
    templateUrl: 'templates/bmi-unit.html'
})
export class BmiComponent {
    form: ControlGroup;
    
    nameControl: Control = new Control("");
    
    @Input('person') person: Person
    
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "name": this.nameControl,
            "height": new Control(""),
            "weight": new Control("")
        });
    }
    
    ngOnInit(){
        this.person.name = this.nameControl.valueChanges;
        
        this.person.bmi = this.form.valueChanges
        .debounceTime(200)
        .map(value => this.toBmi(value.weight, value.height))
        .filter(value => value > 0);
        
        this.person.category = this.person.bmi.map(bmi => this.toCategory(bmi));
    }
    
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