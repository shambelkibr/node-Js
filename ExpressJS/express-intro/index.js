import express from "express";

const app = express();
const PORT = 3000;

// import { usernameController, searchController } from "./Day_2/controller.js";
// app.get("/users/:username", usernameController);
// app.get("/search", searchController);

// app.use(express.json());
// import router from "./Day_2/routing.js";
// app.use("/", router);

// app.post("/users", (req, res) => {
//   const { name, email } = req.body;
//   res.json({
//     message: `User ${name} with email ${email} created successfully`,
//   });
// });

// app.put(`/users/:id`, (req, res) => {
//   const userId = req.params.id;
//   const { name, email } = req.body;
//   res.json({
//     message: `User with id ${userId} updated to name ${name} and email ${email} successfully`,
//   });
// });

// app.delete("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   res.json({
//     message: `User with id ${userId} deleted successfully`,
//   });
// });

// app.get("/things/:name/:id", (req, res) => {
//   const { name, id } = req.params;
//   // Validate that id is exactly 5 digits
//   if (!/^\d{5}$/.test(id)) {
//     return res.status(400).json({
//       error: "Invalid ID format please provide a valid ID",
//       message: "ID must be exactly 5 digits",
//     });
//   }
//   res.json({ name, id });
// });

// // FIXED: Changed from backticks `*` to quotes '*'
// app.get("/*path", (req, res) => {
//   res.send("404 Not Found");
// });

app.use((req, res, next) => {
  console.log("Server is running now " + new Date(Date.now()));
  next();
});

app.get("/", (req, res) => {
  res.send(`Welcome to the Express server! This is the home page.`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("node watch is watching for changes!");
});
