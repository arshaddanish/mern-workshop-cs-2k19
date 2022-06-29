const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Import Routers | APIs
const TasksRouter = require("./routes/tasks.js");
app.use(TasksRouter);

const port = 9000;

// Serve React Build
app.get("/", (req, res) => {
  res.send("I am the React App Build");
});

// Another Route | API
app.get("/haha", (req, res) => {
  res.send("haha haha");
});

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://danish:123@cluster0.rhygr5a.mongodb.net/tasks?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// Start Node Express Server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
