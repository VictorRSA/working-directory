//create an event listener
const maleCheck= document.getElementById("male").addEventListener("click",checkBox);
//FUNCTION WILL DISPLAY IF I CHECK THE CHECKBOX IN MY FORM
function checkBox() {
    console.log("checkbox is checked");
}


const xhr = new XMLHttpRequest; 
/*Create an object for Fetching data from the Server(computer that host 
    resources/files,assets,HTML files,CSS files,JS files)  without the 
    web page refreshing (or full page refreshing) IT DOES IN THE BACKGROUND 
    the HTML5 Form,object
0pen-type ,url,file,asyn 
AJAX is a mnemonic for Asynchronous Javascript and XML

"Asynchrounous definetely but
1.Javascript was likely ,although VBscript and Adope Flash were options used 
2. The payload  did not need to be XML ,although that was popular at the time,any 
Data Format could be used today ,JSON is  normally preffered
,"*/


/*
We now use “Ajax” as a generic term for any client-side process which fetches data from a server and updates the DOM dynamically without a full-page refresh. 
Ajax is a core technique for most web applications and Single-Page Apps (SPAs). 
*/
console.log("This is the XMLHttpRequest API object",xhr);

// LISTEN FOR ONLOAD EVENT


/*old technque becasue xhr.onload work on new browsers(IE10,FIrefox,CHrome,Safari
    for backwards code compatibility use:

     xhr.onreadystatechange = function () {
         if(this.readyState = = 200 ) {
             console.log("Parse the data to JSON",JSON.parse(xhr.response));

         }

         else  {
             console.error("Error!")
         }

     }
     */
xhr.onload =  () =>  {
    /*process the response,do not use the function ,because the browswer will ouput an error
    saying the :Uncaught TypeError: xhr.onload is not a function, invoke 
    use arrow function:*/

    if (xhr.status == 200) {
        //parse/read json dtata
        // console.log('Data Loaded:${xhr.status}.${xhr.response}');
        console.log(xhr.status,JSON.parse(xhr.response));
    }
    else {
        console.error("Error!"); 
        xhr.onerror = () => {
            console.error("Request Failed due to network being down or invalid URL");
        }
        /*this EVENT will be  fired/triggered when the request has failed due 
        to network down or invlaid url
        */
    }
};

// Listen for progress event
xhr.onprogress = (event) => {
    //event.loaded returns how many bytes are downloaded
    console.log("Recall that a byte is  a space or data size to encode a single chracter:encoding-binary from 0 to 255 = 2^8 ")
    console.log("The number of bytes downloade from request are:",event.loaded);
    //event.total returns the total number of bytes
    console.log("The total numbers of bytes to be downloaded:",event.total)
    //event.total is only available if the server sends the "Content-Length header"
    // console.log(`Downloaded ${event.loaded} of ${event.total}`);

}  

/*THIS CODE BELOW CREATES A  GET(GET DATA FROM FAKE API OR API SERVER,
    called JSONPLACEHOLDER) REQUEST
    full sybtaxt of the xhr.open() method

    xhr.open (method,URL,[asynch,user,password])

    where:method-HTTP request method.it can be GET ,POST,DELETE,PUT,etc
         :URL-The URL to request ,a string or URL object
         :asynch -specify whether the request should be made asynchronously or not,Default value is true
         :username and password --Crendtials for basic HTTP authentication
         NB: the opne() method doe not open the connection to URL ,it only configure sthe HTTP request

     */
xhr.open("GET","https://jsonplaceholder.typicode.com/users");
/*objects methods status ready ,200=okay,404 not found*/
// xhr.onload = function () {
//     if(this.status == 200) {
//         console.log(this.responseText);

/*send the data request,

the send () method opens the network connection and sends the request to the server.
it takes optional body parameter that contains the request body,
for request method like GET you don need to pass the parameter bpody*/

console.log("This will send the request to  the server and display result in the browser",xhr.send());
    
// /// looping through the xhr object with dataType

// for(let key in xhr){
//     console.log('This will return an array of both properties and methods of the xhr object:',key);

//     console.log(key,xhr[key]); ///we are getting the member property of xhr methods
// }