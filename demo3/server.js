// req http
var http = require("http");
console.log("Starting");

// But we are not listening to a particular port
var host = "127.0.0.1";
var port = 88;
// create our server
// needs a call back. Called everytime the page is requested
// request: URL and headers
// response: we can add some text
var server = http.createServer(function(request, response){
    console.log("Request URL " + request.url);
    // write header
    response.writeHead(200, {"Content-type":"text/plain"});
    // write content
    response.write("Hello World");
    // Connection will stay open and it will look like page is still loading untill we hit
    response.end();
});

// Listen event on the server
server.listen(port, host, function(){
    console.log("Listening " + host + " " + port);
});