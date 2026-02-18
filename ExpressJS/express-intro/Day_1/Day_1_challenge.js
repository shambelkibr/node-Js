const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    company: "TechNova",
    status: "Server running",
  });
});

app.get("/about", (req, res) => {
  res.json({
    company: "TechNova",
    founded: 2024,
    mission: "Build scalable software",
  });
});

const employees = [
  { id: 1, name: "Sara", role: "Developer" },
  { id: 2, name: "John", role: "Designer" },
  { id: 3, name: "Mike", role: "Manager" },
];

app.get("/employees", (req, res) => {
  res.json({ employees });
});

app.get("/error", (req, res) => {
  res.status(500).json({
    error: "Something went wrong",
  });
});

app.get((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.get("/status", (req, res) => {
  res.json({
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
