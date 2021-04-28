// exempel router
require("express-async-errors");
const express = require("express");
const Posts = require("../DbModel/PostsSchema");
const userLoggedIn = require("../Middleware/secure");
const mongo = require("mongodb");
const router = express.Router();

router.get("/posts", async (req, res) => {
  const docs = await Posts.find({});
  res.status(200).json(docs);
  // bind to componentDidMount
});

router.post("/posts", userLoggedIn, async (req, res) => {
  const post = { ...req.body, user: req.session.userId }
  const doc = await Posts.create(post);
  res.status(200).json(doc);
  // bind to create new post button and input fields
});

router.delete("/posts/:id", userLoggedIn, async (req, res) => {
  if (!req.session.userId) {
    return res.status(400).json("You are not logged in")
  }

  const post = await Posts.findOne({ _id: req.params.id });
    if (req.session.userId !== post.user.toString()) {
    return res.status(400).json("This is not your post!");
  }

    if (post) {
    await post.remove();
    res.status(201).json(post);
  } else {
    res.status(404).json("Post does not exist");
  }
  

});


router.put("/posts/:id", userLoggedIn, async (req, res) => {
  const post = await Posts.findOne({ _id: req.params.id });

  if (req.session.userId !== post.user.toString()) {
    return res.status(400).json("Not your post");
  } else {
    const updatedPost = new Posts(Object.assign(post, req.body));
    await updatedPost.save();
    res.json("Your post have been updated");
  }
});



module.exports = router;
