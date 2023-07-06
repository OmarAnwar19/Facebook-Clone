//module imports
const express = require("express");
const router = express.Router();
const Post = require("../models/postModel");
const { protect } = require("../middleware/authMiddleware");

//Getting all
router.get("/", protect, async (req, res) => {
  try {
    const data = await Post.find({}).sort([["date", -1]]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/:id", protect, async (req, res) => {
  try {
    const data = await Post.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Adding new
router.post("/", protect, async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    user: req.body.user,
  });

  try {
    const data = await newPost.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating
router.put("/:id", protect, async (req, res) => {
  try {
    const data = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.send(`Post with id ${req.params.id} updated.`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Deleting
router.delete("/:id", protect, async (req, res) => {
  try {
    const data = await Post.findByIdAndDelete(req.params.id);
    res.send(`Post with id ${req.params.id} deleted.`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
