"use strict";
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    dientich() {
        return this.length * this.width;
    }
}
let rectangle = new Rectangle(3, 4);
console.log(rectangle.dientich());
