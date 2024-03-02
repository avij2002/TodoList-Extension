const express = require("express");
const router = express.Router();
const TodoListModel = require("../models/TodoListModel");
const { body, validationResult } = require("express-validator");

router.post("/addTask", [body("task").trim()], (req, res) => {
  TodoListModel.create({
    task: req.body.task,
  })
    .then((task) => res.json(task))
    .catch((error) => res.json(error.message));
});

router.get("/fetchAllTasks", (req, res) => {
  TodoListModel.find()
    .then((result) => res.json(result))
    .catch((error) => res.json(error.message));
});

module.exports = router;
