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
// ===========================================================================
// // FIXED: Changed from backticks `*` to quotes '*'
// app.get("/*path", (req, res) => {
//   res.send("404 Not Found");
// });

// Middleware example
// app.use("/wellcame", (req, res, next) => {
//   console.log("Server is running now " + new Date(Date.now()));
//   next();
// });
// ===========================================================================
// app.use((req, res, next) => {
//   console.log("Middleware executed for all routes");
//   res.on("finish", () => {
//     console.log("end");
//   });
//   next();
// });
// ===========================================================================
// // 3️⃣ Error Middleware (Professional Backend)
// app.get("/error", (req, res, next) => {
//   throw new Error("Something went wrong!");
// });

// app.use((err, req, res, next) => {
//   console.error(err.message);
//   res.send("An error occurred: " + err.message);
// });
// ===========================================================================
// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   const userName = "mekkonn kibre";
//   res.render("index", { userName });
// });

// ============================================================================
// app.get("/", (req, res) => {
//   console.log("middle ware routing");
//   res.send(`Welcome to the Express server! This is the home page.`);
// });

// Middleware example for the /wellcame route
// app.get("/wellcame", (req, res) => {
//   res.send(`Welcome to the Express server! This is the wellcome page.`);
// });
// ==========================================================================
// // 1️⃣ Logger Middleware (Very Common)
// function logger(req, res, next) {
//   console.log("Request Method:", req.method);
//   console.log("Request URL:", req.url);
//   console.log("Time:", new Date());
//   console.log("----------------------");

//   next();
// }

// app.use(logger);

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// ===========================================================================
// // 2️⃣ Authentication Middleware (Very Important)
// function authMiddleware(req, res, next) {
//   const token = req.query.token;

//   if (token === "12345") {
//     next();
//   } else {
//     res.status(401).json({
//       message: "Unauthorized access",
//     });
//   }
// }

// app.get("/dashboard", authMiddleware, (req, res) => {
//   res.json({
//     message: "Welcome to dashboard",
//   });
// });

// morgan → logger
// cors → cross origin access
// helmet → security
// bcrypt → password hashing
// jsonwebtoken → authentication

//Real APIs combine many middleware:
// Logger
// CORS
// Helmet
// Body Parser
// Authentication
// Routes
// Error Handler

// ==========================================================================

// app.use(express.urlencoded({ extended: true }));

// app.post("/login", (req, res) => {
//   console.log(req.body);
//   res.send(`Welcome ! You have logged in successfully.`);
// });

// // ===========================================================================
// // Global Middleware
// app.use((req, res, next) => {
//   console.log("Request received");
//   next();
// });

// // Auth Middleware
// function auth(req, res, next) {
//   console.log("Checking auth...");
//   next();
// }

// // Route
// app.get("/dashboard", auth, (req, res) => {
//   console.log("Dashboard routing");
//   res.send("Dashboard");
// });

// // Error Middleware
// app.use((err, req, res, next) => {
//   console.log("error display handler");
//   res.status(500).send(err.message);
// });

// app.use(express.static("public"));

app.get("/submitform", (req, res) => {
  const { name, email } = req.query;
  console.log(req.query);
  res.send(`
    <h1>Form Submitted</h1>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
  `);
});

app.use(express.urlencoded({ extended: true }));

app.post("/submitform", (req, res) => {
  const { name, email } = req.body;
  console.log(req.body);

  res.send(`
    <h2>User Submitted Successfully</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
