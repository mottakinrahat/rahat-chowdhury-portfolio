import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ShowBlog from "./ShowBlog";
import { Link } from "react-router-dom";
const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://rahat-portfolio-server-phi.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-40">My Blog</h2>

      <div className="animation" data-aos="fade-down">
        <div className="pt-20 md:grid md:grid-cols-2 px-2 md:px-0 justify-between items-center">
          {blogs.map((blog) => (
            <ShowBlog key={blog._id} blog={blog}></ShowBlog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
