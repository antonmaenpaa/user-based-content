// Här skapar vi modellen för våra inlägg som vi skapar som sedan skickas upp till vår MongoDB

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let PostsSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "users", required: true }
});

let Posts = mongoose.model("posts", PostsSchema); // Our DB - collections name is 'posts'

module.exports = Posts;
