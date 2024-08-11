let isRunning = true;
const fs = require("fs");

setTimeout(() => (isRunning = false), 100);
process.nextTick(() => console.log("nextTick "));

function setImmediatePromise() {
  return new Promise((resolve, reject) => {
    setImmediate(() => resolve());
  });
}

async function whileLoop() {
  while (isRunning) {
    console.log("running");
    await setImmediatePromise();
  }
}

whileLoop().then(() => {
  console.log("ended");
});
