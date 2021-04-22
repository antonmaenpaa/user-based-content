const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Users = require("../DbModel/UserSchema");

// Creates a user


router.post = async (req, res, err) => {
  console.log("post");
  try {
    let userData = {
      email: req.body.email,
      password: req.body.password,
    };
    let responsData = await Users.create(userData);
    res.status(200).send(responsData);
  } catch (err) {
    res.status(400).send(err.stack, "The data was not load");
  }
};

module.exports = router;
