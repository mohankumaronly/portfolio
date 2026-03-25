import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BlogList from "../pages/Blog/BlogList";
import BlogPost from "../pages/Blog/BlogPost";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
};

export default AppRouters;
