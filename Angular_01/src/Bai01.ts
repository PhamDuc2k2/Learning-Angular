function sumIntegerNumber(arr : number[]) : number {
    return arr.reduce(
        (sumValue, value) => {
            return sumValue + value
        }
    );
}
console.log(sumIntegerNumber([2, 4, 5, 1, 5]));
