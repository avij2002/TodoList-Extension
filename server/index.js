const express = require("express");
const app = express();
const db = require("./database");
const port = process.env.PORT || 5172;
const todoListModel = require("./models/todoListModel");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Server");
});

app.post("/add", (req, res) => {
  const task = req.body;
  const newTask = new todoListModel(task);
  console.log(newTask);
  res.send("Task Added");
  newTask.save();
});

app.listen(port, () => {
  console.log(`Backend is running on port: ${port}`);
});
