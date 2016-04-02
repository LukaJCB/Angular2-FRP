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
var Rx_1 = require('rxjs/Rx');
require('rxjs/Rx');
var SiteComponent = (function () {
    function SiteComponent(fb) {
        var _this = this;
        this.form = fb.group({
            "name": new common_1.Control(""),
            "height": new common_1.Control(""),
            "weight": new common_1.Control("")
        });
        this.bmi = this.form.valueChanges
            .debounceTime(200)
            .map(function (value) { return _this.toBmi(value.weight, value.height); })
            .filter(function (value) { return value > 0; });
        this.category = this.bmi.map(function (bmi) { return _this.toCategory(bmi); });
        var peopleSignal = Rx_1.Observable.create(function (observer) {
            _this.addNewPerson = function () { return observer.next(); };
        });
        this.people = peopleSignal.map(function () { return ["User"]; })
            .startWith(["User 1"])
            .scan(function (acc, value) { return acc.concat(value); });
    }
    SiteComponent.prototype.toBmi = function (weight, height) {
        var heightInMeters = height / 100;
        return weight / (heightInMeters * heightInMeters);
    };
    SiteComponent.prototype.toCategory = function (bmi) {
        if (bmi < 18.5)
            return "Underweight";
        else if (bmi < 25)
            return "Normal";
        else if (bmi < 30)
            return "Overweight";
        else
            return "Obese";
    };
    SiteComponent = __decorate([
        core_1.Component({
            selector: "site",
            templateUrl: 'templates/template.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], SiteComponent);
    return SiteComponent;
}());
exports.SiteComponent = SiteComponent;
//# sourceMappingURL=site.component.js.map