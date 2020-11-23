const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const users = new Schema({
  userName: String,
  userMail: String,
  passWord: String,
  firstName: String,
  lastName: String,
  userPhone: String,
  userPost: String,
});

module.exports = mongoose.model("user", users, "user");
