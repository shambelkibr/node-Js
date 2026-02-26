import express from "express";
// import { usernameController, searchController } from "./Day_2/controller.js";

import router from "./Day_2/router.js";
const app = express();
const PORT = 3000;

// app.get("/users/:username", usernameController);
// app.get("/search", searchController);

app.use("/", router);

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `user ${name} with  email ${email}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: `user ${name} with  email ${email} created sucessfull `,
  });
});

app.put("/users/:id", (req, res) => {
  const userID = req.params.id;
  const { name, email } = req.body;
  res.json({
    message: `user ${userID} updated to name ${name},${email}`,
  });
}); 
