import express from "express";
import { usernameController, searchController } from "./Day_2/controller.js";

const app = express();
const PORT = 3000;

app.get("/users/:username", usernameController);
app.get("/search", searchController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
