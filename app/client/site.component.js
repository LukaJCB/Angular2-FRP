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
var bmi_model_1 = require('./bmi.model');
var bmi_component_1 = require('./bmi.component');
require('rxjs/Rx');
var SiteComponent = (function () {
    function SiteComponent(fb) {
        var _this = this;
        var peopleSignal = Rx_1.Observable.create(function (observer) {
            _this.addNewPerson = function () { return observer.next(); };
        });
        this.people = peopleSignal.map(function () { return [new bmi_model_1.Person()]; })
            .startWith([new bmi_model_1.Person()])
            .scan(function (acc, value) { return acc.concat(value); });
        console.log;
    }
    SiteComponent = __decorate([
        core_1.Component({
            selector: "site",
            templateUrl: 'templates/template.html',
            directives: [bmi_component_1.BmiComponent]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], SiteComponent);
    return SiteComponent;
}());
exports.SiteComponent = SiteComponent;
//# sourceMappingURL=site.component.js.map