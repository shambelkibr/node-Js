const buffer = new Buffer.from("shambel");

buffer.write("KI");
console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON);
