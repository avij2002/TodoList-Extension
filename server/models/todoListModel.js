const mongoose = require("mongoose");
const todoListSchema = mongoose.Schema({
  task: { type: String, require },
});
module.exports = mongoose.model("TodoList", todoListSchema);
