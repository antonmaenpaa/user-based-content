let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

let Users = mongoose.model("Users", UserSchema); 

module.exports = Users;
