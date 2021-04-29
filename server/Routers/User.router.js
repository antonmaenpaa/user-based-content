const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mongo = require("mongodb");
const Users = require("../DbModel/UserSchema");
const userLoggedIn = require("../Middleware/secure");

router.post('/users', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await Users.create({
    email: req.body.email,
    password: hashedPassword,
  }) 

  res.status(201).json(user)
  // bind to register input fields
});

router.post("/authenticated", userLoggedIn, (req, res) => res.status(200).json(req.session.email))

router.post("/login", async (req, res) => {
  
  const { email, password } = req.body;
 
 
  const users = await Users.find({});
  const foundUser = await users.find(user => user.email === email)
  

  if(!foundUser || !await bcrypt.compare(password, foundUser.password)) {
    res.status(401).json("USER NOT FOUND")
    return
  }

  req.session.userId = foundUser._id
  req.session.email = foundUser.email
  

  res.status(200).json(foundUser)
  // bind to login btn to validate and proceed to posts and show post form
})

router.delete("/logout", (req,res) => {
  req.session = null
  res.status(200).json("LOGGED OUt")
  // bind to logout btn
});


module.exports = router;
