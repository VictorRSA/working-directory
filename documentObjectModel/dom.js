//EXAMINE THE DOCUMENT OBJECT ,I can use them,is read-edit rights//
// console.dir(document);
//this line above shows us in the browser different different DOM methos and properties

//to acces the properties
// console.log(document.domain); //it will give me my domain/local host domain.loop address
// console.log(document.URL) //gives us the url of the document.
// console.log(document.title) //title of the DOCUMENT
//we can change the title of the docuemnt using the

//document.title = 123; it will change the title of our docuemnt
// console.log(document.doctype) //
// console.log(document.body) //properties of the body tag

// console.log(document.header)
// console.log(document.all) //;

//selector method another way

// document.all[10].textContent = "hello";  do not use this method to slect from DOM becuase is unstable

//LETS SAY YOU WANT TO GET ALL THE FORMS ON THE WEBPAGE

// console.log(document.forms);

//LETS SAY YOU WANT TO GET ALL THE links ON THE WEBPAGE
// console.log(document.links);

//if no links it will just output an empy array




//(A) getElementById




/* 
now we can use the selector to select element and tags from the domain
selector.Method
headerTitle.textContent

innerHTML = "<h3>GoodBye</h3>"
*/
// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// innerHTML = "<h3>GoodBye</h3>";


// console.log(headerTitle.innerHTML)

// headerTitle.style=borderBottom = "solid 3px #000";




// (B) getElementsByClassName,


//let say we want to get all the links  using classname

// var item  =  document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// item[1].textContent = "Hello 2"; //this change the lsit element
// item[1].style.fontWeight  = "bold";
// item[1].style.backgroundColor = "yellow";


// lets say we want to style all the items in the  list

// items.style.backgroundColor = "#f4f4f4";  THIS GIVES ERROR BECAUSE IS AN ARRAY

//since is a list /array of items i must loop them all because i want to style them al at once

// for ( var i=0;i<items.length;i++) {

// }

//(C) getElementByTagName("name-tag-element");

// var li  =  document.getElementsByTagName("list-group-item");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2"; 
// /*this change the lsit element 
// dom.js:86 Uncaught TypeError: 
// Cannot set property 'textContent' of undefined
// at
// */
// li[1].style.fontWeight  = "bold";
// li[1].style.backgroundColor = "yellow";

// for ( var i=0;i<li.length;i++) {

//     }


//(D) QUERYSELECTOR ,works pretty much like jquery difference is that it works on one item
// more than one title it will grab the first one in the dom
//

// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px skyblue";

// var input = document.querySelector('input');
// //with querySelector we can use any query selectors 
// var submit  = document.querySelector('input[type="submit"]');
// submit.value = "SEND"
// input.value = "Hello I selected DOM using querySelector to change <input. value "
// var item  =  document.querySelector('.list-group-item');
// item.style.color = "skyblue";

// //lets say we want to get the last one,USE CSS-LAST CHILD

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "green";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color  = "coral";

// what about querySelector all

// var titles = document.querySelectorAll(".title");  // gives a list of all the title<HEADING><h elements>
// console.log(titles)
// titles[0].textContent = "I am fucking title Heading";




// var odd = document.querySelectorAll("li:nth-child(odd");
// var even = document.querySelectorAll("li:nth-child(even");

//loop through titlesfo
// for(var i=0;i<odd.length;i++){

    // odd[i].style.backgroundColor = "#f4f4f4";
    // even[i].style.backgroundColor = "#ccc";

// }



var itemList = document.querySelector("#items");


// console.log(itemList.lastChild);
// console.log(itemList.nextSibling);


// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";


//first child 

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello first element of item id";


// console.log(itemList.previousElementSibling);
//previousElementSibling

//createElement

//create a div
/*insert the below inside the DOM */

// var newDiv = document.createElement("div");
// newDiv.className = "helllo";
// console.log(newDiv);

//add id to the new created div element newDiv.id="id_name";

// newDiv.id = "div_id";

//add attribute of our newly created div element

// newDiv.setAttribute("title","Hello div" );

//create text node

// var newDivText =  document.createTextNode("I must be inside the newly created div  tag/element");

//add text to the div

// newDiv.appendChild(newDivText);

// var container  = document.querySelector("header .container");
// var h1  =  document.querySelector("header h1");

//  newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv,h1);
//this line will insert the newDiv and h1, element created through vanilla js before the header


// console.log(newDiv);


//TRAVERSING THE DOMContentLoaded
let item_list  = document.querySelector("#items");
//we are selecting all the id of th query
//console.log(item_list.parentNode);
//console.log(item_list.parentNode.parentNode); //we gonna get the containe parent 

// console.log(item_list.children[1]);
// item_list.parentNode.style.backgroundColor="skyblue";
// console.log(item_list);

// console.log(item_list.parentElement);
//item_list.parentElement.style.backgroundColor ="f4f4f4";
//console.log(item_list.parentElement.parentElement.parentElement); //IT WILL GIVE ME THE BODY


//can be used interchangeable ,parentNode and parentElement

// console.log(item_list.childNodes) DO NOT USE THIS ONE,RATHER USER CHILDRE
//getting the list item,text node,represrnt a white space in in the HTML document
console.log(item_list.children); //it give me the list of item,HTML collection,nolonger a nodes lits

//ACCESS SPECIFIC CHILD ,

console.log(item_list.children[1]); // list item 2 in the collection


//to use the item list, since we have indexed above,lets use the the syle

item_list.children[1].style.backgroundColor="yellow";

// use the first  firstChild
console.log(item_list.children.firstChild);
console.log(item_list.firstElementChild);

item_list.firstElementChild.textContent = "I am the first child element of the div id='items'";
item_list.lastElementChild.textContent="I am the last child element";


//NEXT SIBLING
console.log(item_list.nextSibling);
console.log(item_list.nextElementSibling);


//previoiu sibling

console.log(item_list.previousSibling);
console.log(item_list.previousElementSibling); //h2
item_list.previousElementSibling.style.color = "green";


//Jquery plugin,for simple dom manipulation no need to use Jquery plugin
/*we going to create elements  for the HMTL page and insert them 

*/
 