// // Create server file
// const express = require("express");
// const app = express();

// // // First route
// // app.get("/", (req, res) => {
// //   res.send("Home route is working");
// // });

// app.get("/about", (req, res) => {
//   res.send("About page");
// });
// app.get("/contact", (req, res) => {
//   res.send("<h1>Hello Users</h1>");
// });

// app.get("/users", (req, res) => {
//   res.json({
//     message: "user Routes",
//     sucess: true,
//   });
// });

// app.get("/logout", (req, res) => {
//   res.end();
// });

// app.get("/services", (req, res) => {
//   res.status(200).json({
//     users: ["sam", "sham", "alt"],
//   });
// });

// app.get("/help", (req, res) => {
//   res.json({ page: "contact" });
// });

// const employees = [
//   { id: 1, name: "Sara", role: "Developer" },
//   { id: 2, name: "John", role: "Designer" },
//   { id: 3, name: "Mike", role: "Manager" },
// ];

// app.get("/employees", (req, res) => {
//   res.json({ employees });
// });

// app.listen(2000, () => {
//   console.log(`server is running on port ${2000}`);
// });
