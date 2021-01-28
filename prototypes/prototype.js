let obj = {value:10};

function increase (obj) {
    obj.value++;//increase object value by one



}
increase(obj);
console.log(obj);
console.log("Any changes will be made to storage (in memory) of object variable,not stored in variable,saves object in memory")


let x ={value:10};

let y=x;
x.value = 20; //changing the value of the object x
console.log("changed the value of the object x as shown below")
console.log(y,x);//20,20


class PeriodCircle {
    constructor(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log("I am method of the function: 'PeriodCircle' ,and I am drawing the object");
        };
        
    }
    
}
const circleObejct = new PeriodCircle(10);
console.log("Objects are dynamic:", circleObejct);


console.log("prototype based language ,everything is an object");