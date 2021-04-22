const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mongo = require("mongodb");
const Users = require("../DbModel/UserSchema");
const cookieSession = require('cookie-session');



// Creates a user

router.use(cookieSession({
    name: "session",
    secret: "cr23ackc0d3",
    secure: false,
    maxAge: 1000 * 10,
    httpOnly: true

}));

router.get('/users' ,async (req, res) => {

  const users = await Users.find({})
  res.status(200).json(users)
});

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await Users.create({
    email: req.body.email,
    password: hashedPassword,
  }) 

  res.status(201).json(user)
  // bind to register input fields
});

router.post("/login", async (req, res) => {
  
  const { email, password } = req.body;
  // console.log(email, password)
 
  const users = await Users.find({});
  const foundUser = await users.find(user => user.email === email)
  console.log(foundUser)

  if(!foundUser || !await bcrypt.compare(password, foundUser.password)) {
    res.status(404).json("USER NOT FOUND")
    return
  }

  req.session.username = foundUser._id

  res.status(200).json(foundUser)
  // bind to login btn to validate and proceed to posts and show post form
})

router.delete("/logout", (req,res) => {
  req.session = null
  res.status(200).json("LOGGED OUt")
  // bind to logout btn
});


module.exports = router;
