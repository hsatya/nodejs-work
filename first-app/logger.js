// (function (exports, require, module, __filename, __dirname) {
var url = "http://mylodder.io/log";

console.log(__filename);
console.log(__dirname);

function log(message) {
  // Send an HTTP request
  console.log(message);
}

// module.exports.log = log;
module.exports = log;
// });

// export default log;

// module.exports.endPoint = url;
// console.log(module);
