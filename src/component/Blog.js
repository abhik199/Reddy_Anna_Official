import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [category, setCategory] = useState("All Posts");

  useEffect(() => {
    axios.get("http://localhost:5000/Blogs")
      .then(response => {
        setBlogs(response.data);
        setFilteredBlogs(response.data);
      })
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);

  const handleFilter = (category) => {
    setCategory(category);
    if (category === "All Posts") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === category));
    }
  };

  return (
    <div className="blog-container">
      {/* Navigation Menu */}
      <nav className="blog-menu">
        <ul>
          <li><button onClick={() => handleFilter("All Posts")}>All Posts</button></li>
          <li><button onClick={() => handleFilter("Cricket")}>Cricket</button></li>
          <li><button onClick={() => handleFilter("Football")}>Football</button></li>
          <li><button onClick={() => handleFilter("All Sports")}>All Sports</button></li>
          <li><button onClick={() => handleFilter("Match Predictions")}>Match Predictions</button></li>
          <li><button onClick={() => handleFilter("Casino")}>Casino</button></li>
        </ul>
      </nav>
      
      {/* Blogs */}
      {filteredBlogs.map((blog, index) => (
        <div key={index} className="blog-match-card">
          <div className="blog-match-card-image">
            <img src={blog.image} alt={blog.title} />
            <div className="date-tag">{blog.date}</div>
          </div>
          <div className="blog-match-card-content">
            <h2 className="blog-card-heading">{blog.title}</h2>
            <p className="blog-card-paragraph">{blog.description}</p>
            <div className="blog-match-card-footer">Category: {blog.category}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
