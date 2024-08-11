const fs = require("fs");
const dns = require("dns");

function info(text) {
  console.log(text, performance.now().toFixed(2));
}

console.log("start");

//timeouts
setTimeout(() => info("setTimeout 1"), 0);
setTimeout(() => {
  process.nextTick(() => info("nextTick 2"));
  info("setTimeout 2");
}, 100);

// Interval
let intervalCount = 1;
const interval = setInterval(() => {
  info(`setInterval ${intervalCount}`);
  intervalCount++;

  if (intervalCount === 3) {
    clearInterval(interval);
  }
}, 50);

//close events
fs.writeFile("./test.txt", "Hello Node.js", () => info("file written"));

// promises
Promise.resolve().then(() => info("promise 1"));

// nextTick
process.nextTick(() => info("nextTick 1"));
// setImmediate (check)
setImmediate(() => info("immediate 1"));
// i/o events
dns.lookup("localhost", (err, address, family) =>
  info("dns 1 localhost", address)
);

Promise.resolve().then(() => info("promise 2"));
process.nextTick(() => info("nextTick 3"));

console.log("end");
