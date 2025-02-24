import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../AdminPannel/Styles/BlogerForm.css";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Cricket");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/Blogs")
      .then(response => setBlogs(response.data))
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, description, image, date, category };
    
    axios.post("http://localhost:5000/Blogs", newBlog)
      .then(response => {
        setBlogs([...blogs, response.data]);
        setTitle("");
        setDescription("");
        setImage("");
        setDate("");
        setCategory("Cricket");
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
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="Cricket">Cricket</option>
          <option value="Football">Football</option>
          <option value="All Sports">All Sports</option>
          <option value="Match Predictions">Match Predictions</option>
          <option value="Tennis">Tennis</option>
          <option value="Casino">Casino</option>
        </select>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default BlogForm;
