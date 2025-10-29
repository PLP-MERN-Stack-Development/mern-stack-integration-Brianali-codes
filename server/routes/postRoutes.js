import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await Post.find().populate("category");
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id).populate("category");
  res.json(post);
});

router.post("/", async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

router.put("/:id", async (req, res) => {
  const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
});

export default router;
