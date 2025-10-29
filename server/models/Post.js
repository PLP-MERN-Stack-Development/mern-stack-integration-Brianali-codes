import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
}, { timestamps: true });

export default mongoose.model("Post", postSchema);
