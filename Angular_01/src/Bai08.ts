export function factorial(n: number):number {
    if(n === 1) return n;
    return n * factorial(n-1) 
}

export function isPrime(n:number):boolean {
    if(n < 2)   return false
    else {
        for(let i = 2; i <= Math.sqrt(n); i++) {
            if(n % i == 0)  return false
        }
    }
    return true
}