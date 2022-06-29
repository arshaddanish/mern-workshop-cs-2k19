const express = require("express");
const app = express();

app.get("/api/tasks", (req, res) => {
  res.send("something");
});

module.exports = app;