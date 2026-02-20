const htpps = require("node:http");
htpps
  .createServer((req, res) => {
    res.writeHead(200);
    res.end("backed web Server is running on 5000  is run");
  })
  .listen(5000, () => {
    console.log("backed web Server is running on 5000 ...");
  });
