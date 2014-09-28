var fs=require("fs");

var dataObject = fs.readFileSync("config.json");
console.log("Content " + dataObject);
console.log("Config File Read");

var config = JSON.parse(dataObject); // String to object
console.log(config.username);