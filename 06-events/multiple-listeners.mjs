import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("event", () => {
  console.log(`event  in  first`);
});

emitter.on("event", () => {
  console.log(`event  in  second`);
});

emitter.setMaxListeners(20);
console.log(emitter.getMaxListeners());

setTimeout(() => emitter.emit("event"), 1000);
