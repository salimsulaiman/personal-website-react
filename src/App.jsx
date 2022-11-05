import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Skills from "./pages/Skills";
import Blog from "./pages/Blog";
import BlogContent from "./pages/blog/BlogContent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug/:id" element={<BlogContent />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
