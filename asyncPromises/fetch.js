url="https://randomuser.me/api/?results=100"
fetch(url,{method: "GET"})
.then(response =>response.json())
.then(json=>console.log(json))


let display_on_document = document.getElementById("display");
const data = fetch("https://randomuser.me/api/?results=100",{"method":"GET"}
)
.then(response =>response.json())
.then(json=>console.log(json))
.catch(error=>console.error("error",error));



display_on_document.innerHTML=data;