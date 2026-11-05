"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
exports.makeCounter = makeCounter;
exports.getRequired = getRequired;
exports.describeSlot = describeSlot;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
exports.delay = delay;
function makeCounter() {
    let count = 0;
    return () => ++count;
}
function getRequired(selector, root = document) {
    const element = root.querySelector(selector);
    if (element === null) {
        throw new Error(`Missing element: ${selector}`);
    }
    return element;
}
function describeSlot(slot) {
    return `${slot.day} ${slot.start}–${slot.end}, ${slot.room}`;
}
//# sourceMappingURL=Utils.js.map