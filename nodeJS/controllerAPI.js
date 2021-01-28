const url  =require("url");
const users = require("./userData.js");
exports.getUser = function (req,res) {
    const reqURL  = url.parse(req.url,true);
    var response = [
        {
            "message":"Here are the list of users"
        },users

    ];
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
}