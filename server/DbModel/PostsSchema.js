// Här skapar vi modellen för våra inlägg som vi skapar som sedan skickas upp till vår MongoDB

let mongoose = require('mongoose');
let Schema = mongoose.Schema;



let PostsSchema = new Schema({
   title: String,
   text: String,

});

let Posts = mongoose.model('Posts',  PostsSchema)

module.exports = Posts;