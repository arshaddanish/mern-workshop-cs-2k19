const express = require("express");
const app = express();
const Task = require("../models/tasks");

app.get("/api/tasks", async (req, res) => {
  try {
    let tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/tasks/:id", async (req, res) => {
  try {
    let task = await Task.findOne({ _id: req.params.id });
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

app.post("/api/tasks", async (req, res) => {
  try {
    let task = new Task(req.body);
    let result = await task.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.put("/api/tasks/:id", async (req, res) => {
  try {
    let result = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/api/tasks", async (req, res) => {
  try {
    let result = await Task.deleteMany({});
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/api/tasks/:id", async (req, res) => {
  try {
    let result = await Task.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;
