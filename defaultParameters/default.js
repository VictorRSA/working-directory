function Interest(principal,rate,years) {
    return principal*rate/100*years;
}
console.log(Interest(10000,3.5,5));