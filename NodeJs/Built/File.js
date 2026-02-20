const { error } = require("node:console");
const fs = require("node:fs");

const tex = fs.readFile("./text.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
console.log(tex);


