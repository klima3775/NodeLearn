import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("timeout", () => {
  console.log("Timeout event");
});

setTimeout(() => {
  emitter.emit("timeout");
}, 1000);
setTimeout(() => {
  emitter.emit("timeout");
}, 2000);
