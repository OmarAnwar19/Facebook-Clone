const mongoose = require("mongoose");
const moment = require("moment");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: false,
    default: 0,
  },
  date: {
    type: Date,
    required: false,
    default: moment(),
  },
});

const Post = mongoose.model("Post", PostSchema, "posts");

module.exports = Post;
