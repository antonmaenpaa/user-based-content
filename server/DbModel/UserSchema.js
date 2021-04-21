// Här skapar vi  modellen för våra users som registrerar sig som sedan skickas upp i vår MongoDB

let mongoose = require('mongoose');
let Schema = mongoose.Schema;



let UserSchema = new Schema({
   email: String,
   password: String,
   repeatpassword: String,


});

let Users = mongoose.model('Users',  UserSchema)

module.exports = Users;