// exempel router
require("express-async-errors");
const express = require("express");
const Posts = require("../DbModel/PostsSchema");
const mongo = require("mongodb");
const router = express.Router();

router.get("/posts", async (req, res) => {
  const docs = await Posts.find({});
  res.status(200).json(docs);
  // bind to componentDidMount
});

router.post("/posts", async (req, res) => {
  console.log(req.body);
  const doc = await Posts.create(req.body);
  res.status(200).json(doc);
  // bind to create new post button and input fields
});

router.delete("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Posts.findByIdAndDelete(id);
  res.send(result);
  // bind to delete button
});

router.put("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  const options = { new: true };

  const result = await Posts.findByIdAndUpdate(id, updates, options);

  res.status(200).json(result);
  // bind to edit button with inputs
});

module.exports = router;
