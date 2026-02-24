import express from "express";
const app = express();

const users = [
  { id: 1, name: "shambel" },
  { id: 2, name: "kibre" },
  { id: 3, name: "Btrukan" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

// Route parameters

app.get("/users/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Hello ${username}`);
});

// Daynamic searching
app.get("/search", (req, res) => {
  const qury = req.query.qury;
  res.send(`you searched for ${qury}`);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
