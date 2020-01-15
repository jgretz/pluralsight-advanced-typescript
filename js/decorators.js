"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sealed = (name) => {
    return (target) => {
        console.log(`Sealing the constructor: ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    };
};
function logger(target) {
    let newConstructor = function () {
        console.log(`Creating new instance ${target}`);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
exports.logger = logger;
//# sourceMappingURL=decorators.js.map