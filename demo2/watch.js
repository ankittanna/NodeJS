var fs = require("fs");
console.log("started");
var config = JSON.parse(fs.readFileSync("config.json"));
console.log(config);

fs.watchFile("config.json", function(current, previous){
    console.log("Config Changed");
    config = JSON.parse(fs.readFileSync("config.json"));
    console.log("New Contents "+JSON.stringify(config));
});