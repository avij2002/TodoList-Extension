const express = require("express");
const app = express();
const db = require("./database");
var cors = require("cors");
const port = process.env.PORT || 5172;
app.use(cors());
app.use(express.json());

//Available routes
app.use("/api/todo", require("./routes/todo"));

app.listen(port, () => {
  console.log(`Backend is running on port: ${port}`);
});
