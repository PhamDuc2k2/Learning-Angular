"use strict";
function sumIntegerNumber(arr) {
    return arr.reduce((sumValue, value) => {
        return sumValue + value;
    });
}
console.log(sumIntegerNumber([2, 4, 5, 1, 5]));
