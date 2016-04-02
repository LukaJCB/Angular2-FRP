"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var bmi_model_1 = require('./bmi.model');
require('rxjs/Rx');
var BmiComponent = (function () {
    function BmiComponent(fb) {
        this.nameControl = new common_1.Control("");
        this.form = fb.group({
            "name": this.nameControl,
            "height": new common_1.Control(""),
            "weight": new common_1.Control("")
        });
    }
    BmiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.person.name = this.nameControl.valueChanges;
        this.person.bmi = this.form.valueChanges
            .debounceTime(200)
            .map(function (value) { return _this.toBmi(value.weight, value.height); })
            .filter(function (value) { return value > 0; });
        this.person.category = this.person.bmi.map(function (bmi) { return _this.toCategory(bmi); });
    };
    BmiComponent.prototype.toBmi = function (weight, height) {
        var heightInMeters = height / 100;
        return weight / (heightInMeters * heightInMeters);
    };
    BmiComponent.prototype.toCategory = function (bmi) {
        if (bmi < 18.5)
            return "Underweight";
        else if (bmi < 25)
            return "Normal";
        else if (bmi < 30)
            return "Overweight";
        else
            return "Obese";
    };
    __decorate([
        core_1.Input('person'), 
        __metadata('design:type', bmi_model_1.Person)
    ], BmiComponent.prototype, "person", void 0);
    BmiComponent = __decorate([
        core_1.Component({
            selector: "person-bmi",
            templateUrl: 'templates/bmi-unit.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], BmiComponent);
    return BmiComponent;
}());
exports.BmiComponent = BmiComponent;
//# sourceMappingURL=bmi.component.js.map