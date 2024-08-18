import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("timeout", (secondsQty) => {
  console.log(`Timeout event in ${secondsQty} seconds`);
});

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
