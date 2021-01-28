console.log("This prints numbers from 0 to 9");

for(var  x =0;x<10;x++) {
    console.log(x);

}
//addiding index or positions

const numbers =[1,-1,2,3,4];
let sum =0; //initializing our count

for(let i=0;i<numbers.length;i++) {
    sum =numbers[i] + sum; //same as sum+1 =numbers[i]
}
console.log("It will output nine:")
console.log(sum);


// const additionSum =  numbers.reduce((accumulator,currentValue) => {
//     return accumulator+currentValue
// })

// numbers.reduce()
//siblings tag,are the ones that are next to each other

function additionSum(a,b) {
    let total =0;
    for(let value of arguments) {
        total =value +total ;//same as total+=value
    }
    return total;
    ///expected answer is two
}
console.log(additionSum(1,2));
console.log("Using spread operators");
function Addition (...args) {
    count_total =0;
    for(let value of argmuments) {
        total= value+total;
    return total;

    }
}console.log(sum(1,2,3,4,5,10));
