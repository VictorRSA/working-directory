//using object literal to define an object(key/value pair) and accessing specific elements of an Array/Objects
var todayDate= new Date();
var names =prompt("Enter your names:");
var last_name =  prompt("Enter your surname:");
///why dont i make a lopp to keep on asking for family mebers,but first it  needs to  know how many memebrs are the to iterate properly
var siblings =new Array(prompt("Enter your family member's names:"));
occupation = prompt("Enter your occupation");
married = prompt("Are you married ,(y/n)");
var getDate = prompt("Please enter your date of birth.")



var person = {
    firstName:names,
    lastSurname:last_name,    

    birthYear:getDate,
    family :siblings,
    job :occupation,
    isMarried :married
}
    // 1.OBJECT LIteral definition
    //if the object has one or more methods ,it has   issues,

// lets create a circle object with properties using the OBJECT LITERAL SYTHE
// const circle = {
//     //below are my properties of the object circle
//     radius:1,
//     location: {
//         x:1, //horizontal longitude ,along the x axis
//         y:1
//     }
//     /*we defining a method,recall,
//      that a method is just a function under a class,
//      but since we have no class in js we use the 1. OBJECT LITERAL SYNTAX
//     */
//    draw =() => {
//        console.log("Draw");
//    }
// }

// /*ES4  used to use var,now is not encoruaged it will be deprecated thus,
// might be browser compatiblility issues */ 

//2. Use a factory constructor function
function CreateCircle () {
    return {
        radius:1
        
    }
}

//3. Constructor function ,a template of creating objects with properties
//first letter of the constructor function must be UPPER CASE
function Circle (radius) {
    this.radius = radius;
    //THIS ,reference an object executing the code,cals global window
    this.draw = function () {
        console.log("I am a method ,Drawing  a circle ");
        console.log("Every Object has a constructor Object")
    }
}
// we creating an object new from our Constructor

const another = new Circle(1);
/*new oparator creates an empty object ,no need to return this,
object is automatically set to this to point at the OBEJCT being created */


//primitives are copied by their value

let x=10;
let y =x;
 x=20;
console.log(x,y);
//20,10 because y is copied from the initial 10,copied by value
console.log("20,10 because y is copied from the initial 10,copied by value")

let z ={value:40};
let alpha = x;
console.log(x.value=80)
console.log("Primitives value types are coopied by vlaue,objects are copied by reference(through an address in memory")



let number = 10;
function increase (number) {
    number ++;
}
increase(number);
console.log(number);
