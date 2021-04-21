const express = require('express');
const { MongoServerSelectionError } = require('mongodb');
const app = express();
const port = 5000;
const path = require('path');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");

// DB schema

let Users = require("./DbModel/UserSchema") // Koppla till en POST som skapar en user
let Posts = require("./DbModel/PostsSchema") // denna ska kopplas till en POST för skapade inlägg



// Connection to DB


mongoose.connect(`mongodb+srv://Admin:Admin123@cluster0.gnwvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
   { useNewUrlParser : true,
    useUnifiedTopology: true,}
 )
 .then(() => {
    console.log('You are now connected to your database!');
 })
 .catch((err) => {
     console.err(err);
 });



app.use(express.static(path.join(__dirname, '../client')));

app.use(express.json());

// View all posts
app.get('/', (req, res) => {    
    res.send(users)
})



// skapar en användare som skickas till db

module.exports.post = async (req, res, err) => {
    console.log("post");
    try {
        let userData = {
            email: req.body.email,
            password: req.body.password
          }      
      let responsData = await Users.create(userData);
      res.status(200).send(responsData);
    } catch (err) {
      res.status(400).send(err.stack, "The data wasent load");
    }
  };





app.post('/login', (req, res) => {
    
    res.send(users)
})

app.post('/register', (req, res) => {
    
    res.send(users)
})

app.delete('/logout', (req, res) => {
    
    res.send(users)
})

app.listen(port, () => {
    console.log(`You are runnning on ${port}`)
})