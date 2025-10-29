import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPost(id)
      .then((res) => setPost(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ padding: "1rem" }}>⏳ Loading post...</p>;
  if (!post) return <p style={{ padding: "1rem" }}>❌ Post not found</p>;

  return (
    <div style={{ padding: "1rem 2rem" }}>
      <h2 style={{ marginBottom: "0.5rem" }}>{post.title}</h2>
      <p style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>
    </div>
  );
}
