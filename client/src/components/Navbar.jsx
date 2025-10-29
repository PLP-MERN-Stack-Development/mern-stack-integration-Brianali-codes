import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav
      style={{
        padding: "1rem 2rem",
        background: "#282c34",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#61dafb", margin: 0 }}>📝 Simple Blog</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link
          to="/"
          style={{
            color: pathname === "/" ? "#61dafb" : "#fff",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/create"
          style={{
            color: pathname === "/create" ? "#61dafb" : "#fff",
            textDecoration: "none",
          }}
        >
          New Post
        </Link>
      </div>
    </nav>
  );
}
