var fs = require("fs");
console.log("Start");
fs.writeFileSync("write_sync.txt", "Hello World! Synchronous!");
console.log("Finished");