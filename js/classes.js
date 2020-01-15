"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("./decorators");
let UniversityLibrarian = class UniversityLibrarian {
    assistCustomer(custName) {
        console.log(this.name + " is assisting " + custName);
    }
    assistFaculty(facName) {
        console.log(this.name + " is assisting faculty " + facName);
    }
};
UniversityLibrarian = __decorate([
    decorators_1.sealed("UniversityLibrarian"),
    decorators_1.logger
], UniversityLibrarian);
exports.UniversityLibrarian = UniversityLibrarian;
let PublicLibrarian = class PublicLibrarian {
    assistCustomer(custName) {
        console.log(this.name + " is assisting " + custName);
    }
    teachCommunity() {
        console.log("Teaching community");
    }
};
PublicLibrarian = __decorate([
    decorators_1.logger
], PublicLibrarian);
exports.PublicLibrarian = PublicLibrarian;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log("Creating a new ReferenceItem...");
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
}
exports.ReferenceItem = ReferenceItem;
ReferenceItem.department = "Research";
//# sourceMappingURL=classes.js.map