// exempel router
require("express-async-errors");
const express = require("express");
const Posts = require("../DbModel/PostsSchema");
const mongo = require("mongodb");
const router = express.Router();

router.get("/posts", async (req, res) => {
  const docs = await Posts.find({});
  res.status(200).json(docs);
});

router.post("/posts", async (req, res) => {
  console.log(req.body);
  const doc = await Posts.create(req.body);
  res.status(200).json(doc);
});

router.delete("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Posts.findByIdAndDelete(id);

  res.send(result);
});

module.exports = router;
