const http = require("http");
const hostname = "localhost";

const port = 3000;
const server  = require("./route.js"); //import routing file

server.listen(port,hostname,() =>{
    console.log("Server running  at http://hostname}:${port}/");

});

/* the server.js file is the one that handles the starting up of the server,the server will run at port 3000,also,note
that another file is required in the server.js ,
that is the route.js file ,this file be created in the*/