"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var ioc_library_example_1_1 = require("ioc-library-example-1");
var Engine = /** @class */ (function () {
    function Engine() {
        this.engineCapacity = "2.0L";
    }
    Engine.prototype.getEngineCapacity = function () {
        return this.engineCapacity;
    };
    return Engine;
}());
var Wheels = /** @class */ (function () {
    function Wheels() {
        this.wheelCount = 4;
    }
    Wheels.prototype.getWheels = function () {
        return this.wheelCount;
    };
    return Wheels;
}());
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
    }
    Car = __decorate([
        ioc_library_example_1_1.Inject([Engine, new Wheels()])
    ], Car);
    return Car;
}());
var mercedes = new Car("mercedes");
console.log(mercedes.model, mercedes.Engine.engineCapacity, mercedes.Wheels.wheelCount);
