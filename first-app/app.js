// const path = require("path");

// let pathObj = path.parse(__filename);

// console.log(pathObj);
// const os = require("os");
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.uptime());

// const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log(files);

// fs.readdir("./", function (err, files) {
//   if (err) console.log("Error", err);
//   else console.log("Result", files);
// });

const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a listner
emitter.on("messageLogged", function () {
  console.log("Listner Called");
});

// Raise an event
emitter.emit("messageLogged");
