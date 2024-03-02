const mongoose = require("mongoose");
const TodoListSchema = mongoose.Schema({
  task: { type: String, require, unique: true },
});
const Task = mongoose.model("TodoList", TodoListSchema);
Task.createIndexes();
module.exports = Task;
