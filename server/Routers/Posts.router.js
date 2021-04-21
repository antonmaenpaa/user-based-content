// exempel router

const express = require('express');
const Posts = require('../DbModel/PostsSchema');
const router = express.Router();



router.get('/login', async (req, res) => {
    const docs = await Posts.find({});
    res.status(200).json(docs)
});

// router.post('/',  async (req, res) => {
//     try{
//         await Posts.create(req.body)
//         res.status(201).json(doc)
//     }

// });

module.exports = router;