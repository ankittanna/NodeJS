var fs = require("fs");

fs.writeFile("write_async.txt", "Hello World! Asynchronous!", function(error){
    console.log("Error " + error)
});

console.log("Finished");