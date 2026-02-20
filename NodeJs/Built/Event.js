const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("greet", function (name) {
  console.log(`Hello ${name}`);
});

emitter.emit("greet", "shambel");
