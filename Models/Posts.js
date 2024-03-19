const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  category: { type: String },
  title: { type: String, required: true },
  offer: { type: String },
  oldPrice: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  carouselImages: [{ type: String, required: true }],
  color: { type: String },
  size: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Posts = mongoose.model("Posts", PostSchema);

module.exports = Posts;
