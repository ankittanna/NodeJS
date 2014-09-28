var fs = require("fs");
console.log("start reading the file");

var data = fs.readFileSync("sample.txt");
console.log("Content " + data);
console.log("Carry on next set of commands");