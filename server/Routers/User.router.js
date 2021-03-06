const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mongo = require("mongodb");
const Users = require("../DbModel/UserSchema");
const userLoggedIn = require("../Middleware/secure");

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10)
 if(req.body.username === "" || req.body.password === "") {
   return res.status(400).json('You have to fill in the empty fields')
 }
  const user = await Users.create({
    username: req.body.username,
    password: hashedPassword,
    role: "noob"
  }) 

  res.status(201).json(user)
  // bind to register input fields
});

router.post("/authenticated", userLoggedIn, (req, res) => res.status(200).json({username: req.session.username, role: req.session.role}))

router.post("/login", async (req, res) => {
  
  const { username, password } = req.body;
 
 
  const users = await Users.find({});
  const foundUser = await users.find(user => user.username === username)
  

  if(!foundUser || !await bcrypt.compare(password, foundUser.password)) {
    res.status(401).json("USER NOT FOUND")
    return
  }

  req.session.userId = foundUser._id
  req.session.username = foundUser.username
  req.session.role = foundUser.role
  

  res.status(200).json(foundUser)
  // bind to login btn to validate and proceed to posts and show post form
})

router.delete("/logout", (req,res) => {
  req.session = null
  res.status(200).json("LOGGED OUt")
  // bind to logout btn
});

// check if user is logged in and return user info
// router.get('/api/users/authenticate', checkLogin, (req, res) => {
//     res.status(200).json({
//         username: req.session.username,
//         access: req.session.role,
//         avatar: req.session.avatar
//     })
// })

// function checkLogin(req, res, next) {
//     if(req.session.username) {
//         next()   
//     } else {
//         res.status(401).json(null)
//     }
//   }

module.exports = router;
