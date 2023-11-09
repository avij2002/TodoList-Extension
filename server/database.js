require("dotenv").config();
const mongoose = require("mongoose");
const mongo_url = process.env.mongo_url;
mongoose.connect(mongo_url);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Database is Up and running");
});
db.on("error", () => {
  console.log("Database connection failed");
});
module.exports = mongoose;
