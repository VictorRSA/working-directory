//METHOD ONE
//button = document.getElementById('button').addEventListener('click',function(){
//     console.log(123);
    /* add an evenlistener to listen for a click on a button even,and fun functio*/
// });

// var button =document.getElementById("button").addEventListener('click',buttonClick);




// function buttonClick() {
//     // console.log("Button clicked");
//     //lets say we want the header tag

//     document.getElementById("header-title").textContent="changed";
//     document.querySelector("#main").style.backgroundColor = "pink";


    
// }



// var button =document.getElementById("button").addEventListener('click',buttonClick);




// function buttonClick(e) {
//     // console.log("Button clicked");
//     //lets say we want the header tag

//     // console.log(e);

//     console.log("The event  was created on this element called:",e.target); //gives us the element that was clicked ,element the event is fired=triggered from 
//     console.log("The id tag of was on this element:",e.target.id);
//     console.log("The class this document was creaetd on:",e.target.className); //give the classs in the document that is where the event is trigger_reload
//     console.log("A list of all the document/page's class:",e.target.classList);
//     console.log("The type of event triggered is of type:",e.type)

//     var output=  document.getElementById("output");

//     output.innerHTML = "<h3> "+e.target.id+"</h3>";

//     console.log("The position of the mouse is clientX='this is the position on the x axis,from browser window of the button fieldset area',clientY='from th etop to dowj'",e.clientX,e.clientY);
//     console.log(e.offsetX,"the offset from the actual mouse",e.offsetY);
//     console.log(e.altKey,"the alt key is used to check if the user type the alt key,it returns true of false,to perform operations based on the input from the Client-User-Agent keyboard inputs:");
//     console.log("Check if the user has pressed the control key while pressing the button to fire an event:",e.ctrlKey);
//     console.log("Check if the user has pressed the shift key while pressing the button to fire an event:",e.shiftKey);


// }
// // console.log("Bellow is the mouse events:");

// var button = document.getElementById("button");

// button.addEventListener("dblclick",runEvent);


// function runEvent(e){
//     console.log("EVENT TYPE:",e.type);

// }


// let button  = document.getElementById("button");
// button.addEventListener("mouseup",down);
// function down(e) {
//     console.log("This is the mouse event",e.type);
// }

var box = document.getElementById("box");


// box.addEventListener("mouseenter",runEvent);
// box.addEventListener("mouseleave",runEvent);

box.addEventListener("mousemove",runEvent); //for inner elemtns
// box.addEventListener("mouseout",runEvent); //both events will be triggred

function runEvent (e) {
    console.log("EVENT TYPE:",e.type);
    output.innerHTML = "<h3>MouseX:",e.offsetX,"</h3>h3>MouseY:" +e.offsetY,"</h3>";
}



