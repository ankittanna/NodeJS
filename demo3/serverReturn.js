// req http
// Step 1
var http = require("http");
console.log("Starting");

// Step 6
var fs = require("fs");
// But we are not listening to a particular port
var config = JSON.parse(fs.readFileSync("config.json"));

// Step 2
var host = config.host;
var port = config.port;

// var host = "127.0.0.1";
// var port = 1335;
// create our server
// needs a call back. Called everytime the page is requested
// request: URL and headers
// response: we can add some text
// Step 4
var server = http.createServer(function(request, response){
    fs.readFile("server"+request.url, function(error, data){
        if(error)
        {
            console.log("Request URL " + request.url);
            response.writeHead(404, {"Content-type":"text/plain"});
            response.write("Sorry! The Page was not found");
            response.end();
        } else 
        {
            console.log("Request URL " + request.url);
            response.writeHead(200, {"Content-type":"text/html"});
            response.write(data);
            response.end();
        }
    });
    
});

// Listen event on the server
// Step 3
server.listen(port, host, function(){
    console.log("Listening " + host + " " + port);
});

// Watch the config file and if it changes then close the server connection and listen again
// Step 5
fs.watchFile("config.json", function(){
    config = JSON.parse(fs.readFileSync("config.json"));
    server.close();
    host = config.host;
    port = config.port;
    server.listen(port, host, function(){
        console.log("Now Listening to this "+port + " " + host);
    });
});