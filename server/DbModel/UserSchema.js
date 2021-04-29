// Här skapar vi  modellen för våra users som registrerar sig som sedan skickas upp i vår MongoDB

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: String
});

let Users = mongoose.model("users", UserSchema); // Our DB - collection name is Users

module.exports = Users;
