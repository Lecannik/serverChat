const express = require('express');
const app = express();
const port = 3000;
let http = require('http');
let url = require('url');


app.get('/test', function (req, res) {
    console.log("\x1b[45m", url);
    console.log("\x1b[42m", req.originalUrl);
//    console.log("\x1b[42m", res);
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log("\x1b[46m",'Example app listening on port 3000!');
});

/*

console.log("Server start");


//create a server object:
http.createServer(function (req, res) {
    console.log(res);
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(3000); //the server object listens on port 8080*/
