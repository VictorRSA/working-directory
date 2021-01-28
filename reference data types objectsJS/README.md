<p>
Value types=[Number,String,Boolean,Symbol[new in ES6],undefined,Null]
Reference types =[Object[objects are functions],Function[objects],Array][are objects]

</p>
<hr />
<p>
recall that Primitives types are Value types and are copied by their value, and objects are copie by their reference
</p>

<p>

Properties of OPP
(a) Encaspulation-->

reduces complexity(by creating props,properties throguth the creation of functions and methods from)and increase code reusabiity,group related variables,functions together 

(b) Abstraction -->
reduces the complexity by isolating impact of change,simple class interface

(c) Inheritance -->
eliminates redundant code ,prototypical inheritance DRY principle
(Do not repeat yourself
)

(d) Polymorphism -->


</p>

<h1>The Power of JavaScript</h1>

<p>

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

</p>

<p>Objects are dynamic ,this means that i can create and add properties ,adn delete them,ideo why JS is powerful</p>

<h2>Closure in Javascript</h2>
<p>
var ,def,out,scope,upper scope,are available automaticlally,Javascript have lexical scoping

e.g. let i =1;
const f =() => {
    console.log(i);
}
f(); //calling the function
//define fuinctiond domewhere in one scope and pass it in another scoped,CLOSURE IS PERMANENT ,and SCOPE Is Temparay

</p>