"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNumber(x, y) {
    return x + y;
}
function pickRandElt(elements) {
    const index = Math.floor(Math.random() * elements.length);
    return elements[index];
}
