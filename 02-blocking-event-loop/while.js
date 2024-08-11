let isRunning = true;

setTimeout(() => {
  isRunning = false;
}, 10);
process.nextTick(() => console.log("nextTick 1"));

while (isRunning) {
  console.log("running");
}
