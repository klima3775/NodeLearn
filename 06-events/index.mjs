import { EventEmitter } from "events";

const emitter = new EventEmitter();

const timeoutListener = (secondsQty) => {
  console.log(`Timeout event in ${secondsQty} seconds`);
};

emitter.on("timeout", timeoutListener);

setTimeout(() => {
  emitter.emit("timeout", 1);
}, 1000);
setTimeout(() => {
  emitter.emit("timeout", 2);
}, 2000);

emitter.once("singleEvents", () => {
  console.log(`single event occurred`);
});

setTimeout(() => {
  emitter.emit("singleEvents", 1);
}, 500);
setTimeout(() => {
  emitter.emit("singleEvents", 2);
}, 1500);

setTimeout(() => {
  emitter.off("timeout", timeoutListener);
}, 3000);
setTimeout(() => {
  emitter.emit("singleEvents", 4);
}, 4000);
