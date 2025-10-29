import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../api";
import { Link } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    setDeleting(id);
    await deletePost(id);
    setPosts(posts.filter((p) => p._id !== id));
    setDeleting(null);
  };

  if (loading) return <p style={{ padding: "1rem" }}>⏳ Loading posts...</p>;

  return (
    <div style={{ padding: "1rem 2rem" }}>
      <h2>📰 All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet. <Link to="/create">Create one</Link>!</p>
      ) : (
        posts.map((p) => (
          <div
            key={p._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              margin: "1rem 0",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
            }}
          >
            <Link to={`/post/${p._id}`} style={{ textDecoration: "none" }}>
              <h3 style={{ margin: "0 0 0.5rem 0", color: "#333" }}>{p.title}</h3>
            </Link>
            <p style={{ color: "#555" }}>{p.content.slice(0, 120)}...</p>
            <button
              onClick={() => handleDelete(p._id)}
              disabled={deleting === p._id}
              style={{
                marginTop: "0.5rem",
                background: deleting === p._id ? "#ccc" : "#e74c3c",
                color: "#fff",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {deleting === p._id ? "Deleting..." : "Delete"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}
