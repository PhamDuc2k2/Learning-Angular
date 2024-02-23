 import { factorial , isPrime} from "./Bai08"
let n = prompt("Nhập số cần tính: ", "5")
let m = Number(n)
console.log(`Giai thừa của ${n}: `, factorial(m));

if(isPrime(m))  console.log(`${n} là số nguyên tố`);
else    console.log(`${n} không là số nguyên tố`);