const http = require("http");
const url =require("url");
module.exports = http.createServer((request, response) => {
    var user_operation  = require("./controllerAPI.js");
    const requestURL = url.parse(request.url,true);
    //GET endpoint

    if(requestURL.pathname == "/users" && request.method =="GET") {
        console.log("Request type:" + request.method+ "Endpoint:"+request.url);

    }
    user_operation.get(request,response);
})