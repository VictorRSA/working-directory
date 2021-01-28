/*
create a javascript object
*/

let name = prompt("Enter your name...");

if (name == "Victor"){
    document.write("Valuable visitor to our the internet platform,the bot or  the computer cyber machine say your name is:"+name);


}

/* we are making an object instance */

function person(name,age){
    this.name = name;
    this.age = age;

}
var Given = new person("Given",27);
var Bella = new person("Bella",33);
var Tsakane = new person("Tsakane",39);
var Victor = new person("Victor",24);
victor.age();
Given.age();
Bella.age();
tsakane.age();
