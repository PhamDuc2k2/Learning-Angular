function displayFirstItem<T>(arr : T[]) : T {
    return arr[0]
}

let display = <T>(arr:T[]) : T => {
    return arr[0]
}

// console.log(displayFirstItem<number>([2, 3, 4, 5]));
console.log(display([2, 3, 4, 5]));