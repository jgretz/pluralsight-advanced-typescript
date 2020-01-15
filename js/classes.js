"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UniversityLibrarian {
    assistCustomer(custName) {
        console.log(this.name + " is assisting " + custName);
    }
    assistFaculty(facName) {
        console.log(this.name + " is assisting faculty " + facName);
    }
}
exports.UniversityLibrarian = UniversityLibrarian;
class PublicLibrarian {
    assistCustomer(custName) {
        console.log(this.name + " is assisting " + custName);
    }
    teachCommunity() {
        console.log("Teaching community");
    }
}
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