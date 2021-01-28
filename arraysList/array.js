const  numbers = [1,2,3,4,5,5]

for(let item of numbers){
    console.log(item);
}


let names = ["Victor","Mark","Mahopo","Gladwin","IKey","Jane","Given","Godfrey"]


//lets mutate the list /change the original list to new list


console.log(names[2]);
names[1] = "Ben";
names[5] = "Mary";

names[names.length] = "Lebogang Mosehla";
//Methods of Lists/Array
//1. array.push("element_to_be_pushed");

console.log(names.push("Victor")); //add an element at the end of the Array


//Array.unshift("item_to_be_unshifted");
// by adding element at the start of the Array
console.log(names.unshift("Chantel Moabelo"));

//Array.pop ,get rids of the element of an array

console.log(names.pop(names[3]));

console.log(names.indexOf(3)); //test if element is in the array
//if an element is not in the array ,indexOf returns ===1;
//names.indexOf("searchElement",indexof)
names[11] = 23;
names[10]=30


//loop through the names array and find/look for a string element in the Array

for(var i =0;i<names.length;i++){
    if(typeof names[i] !== 'string'){
        continue; 
        /*
        using continue and break statement,quit in the,
         case of break,current iteration and continue with the next iteration(one)
        
        */
    }
    console.log(names[i]);

}

const integers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
console.log(integers);

