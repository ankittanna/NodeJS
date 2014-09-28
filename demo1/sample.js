var fs = require("fs");
console.log("start reading the file");

fs.readFile("sample.txt", function(error, data){
    console.log("Contents of File: "+data);
});

console.log("Carry on next set of commands");