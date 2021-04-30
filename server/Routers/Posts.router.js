// exempel router
require("express-async-errors");
const express = require("express");
const Posts = require("../DbModel/PostsSchema");
const User = require("../DbModel/UserSchema");
const userLoggedIn = require("../Middleware/secure");
const adminAccess = require("../Middleware/adminSecure");
const mongo = require("mongodb");
const router = express.Router();

router.get("/posts", async (req, res) => {
  const docs = await Posts.find({}).populate("user", "-password")
  res.status(200).json(docs);
});

router.get('/adminaccess', adminAccess, async (req, res) => {
  const posts = await Posts.find({});
  res.status(200).json(posts);
});

router.post("/posts", userLoggedIn, async (req, res) => {
 
  const post = { ...req.body, user: req.session.userId}
  const doc = await Posts.create(post);
  res.status(200).json(doc);
  // bind to create new post button and input fields
});

router.delete("/posts/:id", userLoggedIn, async (req, res) => {
  if (!req.session.userId) {
    return res.status(400).json("You are not logged in")
  }

  const post = await Posts.findOne({ _id: req.params.id });
  const user = await User.findOne({ _id: req.session.userId });

    if (req.session.userId === post.user.toString() || user.role === "admin") {
      if (post) {
        await post.remove();
        return res.status(201).json(post);
      } else {
        return res.status(404).json("Post does not exist");
      }
    }
    
    
    return res.status(400).json("No auth");

});

router.put("/posts/:id", userLoggedIn,  async (req, res) => {
  const post = await Posts.findOne({ _id: req.params.id });
  const user = await User.findOne({ _id: req.session.userId });

  if (req.session.userId === post.user.toString() || user.role === "admin") {
    const updatedPost = new Posts(Object.assign(post, req.body));
    await updatedPost.save();
    return res.json("Your post have been updated");

  } else {
    return res.status(400).json("Not your post");
  }
});



module.exports = router;
