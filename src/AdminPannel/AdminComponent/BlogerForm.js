import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../AdminPannel/Styles/BlogerForm.css";

const BlogForm = ({ onAddBlog }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("/blogs.json")
      .then(response => setBlogs(response.data))
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, description, image, date };
    const updatedBlogs = [...blogs, newBlog];
    
    axios.post("/save-blogs", updatedBlogs)
      .then(() => {
        setBlogs(updatedBlogs);
        setTitle("");
        setDescription("");
        setImage("");
        setDate("");
      })
      .catch(error => console.error("Error saving blog:", error));
  };

  return (
    <div className="blog-form-container">
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default BlogForm;
