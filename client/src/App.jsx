import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import SinglePost from "./components/SinglePost";
import PostForm from "./components/PostForm";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/create" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
}
