import { useState } from "react";
import { createPost } from "../api";
import { useNavigate } from "react-router-dom";

export default function PostForm() {
  const [form, setForm] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await createPost(form);
      setMessage("✅ Post created successfully!");
      setForm({ title: "", content: "" });
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      setMessage("❌ Failed to create post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "1rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "500px",
        margin: "2rem auto",
      }}
    >
      <h2>Create New Post</h2>
      <input
        type="text"
        placeholder="Enter title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
        style={{
          padding: "0.75rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <textarea
        placeholder="Write something..."
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        required
        rows={6}
        style={{
          padding: "0.75rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "0.75rem",
          borderRadius: "6px",
          border: "none",
          background: loading ? "#ccc" : "#61dafb",
          color: "#000",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {loading ? "Saving..." : "Submit"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
