"use strict";
var Rx_1 = require('rxjs/Rx');
var Person = (function () {
    function Person() {
        this.name = Rx_1.Observable.create();
        this.bmi = Rx_1.Observable.create();
        this.category = Rx_1.Observable.create();
    }
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=bmi.model.js.map