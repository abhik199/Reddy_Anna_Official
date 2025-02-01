import React from "react";
import "../styles/Blog.css";
import b1_img from "../image/blog1.webp";
import b2_img from "../image/blog2.webp";
import b3_img from "../image/blog3.webp";


const Blog = () => {
  return (
    <div className="blog-container">
      {/* Navigation Menu */}
      <nav className="blog-menu">
        <ul>
          <li><a href="#">All Posts</a></li>
          <li><a href="#">Cricket</a></li>
          <li><a href="#">Football</a></li>
          <li><a href="#">All Sports</a></li>
          <li><a href="#">Match Predictions</a></li>
          <li><a href="#">More</a></li>
        </ul>
      </nav>
      
      {/* Match Card */}
      <div className="blog-match-card">
        {/* Left Side - Image */}
        <div className="blog-match-card-image">
          <img
            src={b1_img}
            alt="Match Preview"
          />
          <div className="date-tag">28 JAN</div>
          <div className="time-tag">9:00 PM</div>
        </div>

        {/* Right Side - Content */}
        <div className="blog-match-card-content">
          <h2 className="blog-card-heading">
            Pretoria Capitals vs Joburg Super Kings, SA20, Today Match Prediction
          </h2>
          <p className="blog-card-paragraph">
          PC vs JSK Betting Tips and Match Analysis The SA20 2025 is heating up, and the Pretoria Capitals are in a do-or-die situation as they..          
          </p>
          <div className="blog-match-card-footer">1 view • 0 comments</div>
        </div>
      </div>

      <div className="blog-match-card">
        {/* Left Side - Image */}
        <div className="blog-match-card-image">
          <img
            src={b2_img}
            alt="Match Preview"
          />
          <div className="date-tag">28 JAN</div>
          <div className="time-tag">9:00 PM</div>
        </div>

        {/* Right Side - Content */}
        <div className="blog-match-card-content">
          <h2 className="blog-card-heading">
            Pretoria Capitals vs Joburg Super Kings, SA20, Today Match Prediction
          </h2>
          <p className="blog-card-paragraph">
          PC vs JSK Betting Tips and Match Analysis The SA20 2025 is heating up, and the Pretoria Capitals are in a do-or-die situation as they..          
          </p>
          <div className="blog-match-card-footer">1 view • 0 comments</div>
        </div>
      </div>
      <div className="blog-match-card">
        {/* Left Side - Image */}
        <div className="blog-match-card-image">
          <img
            src={b3_img}
            alt="Match Preview"
          />
          <div className="date-tag">28 JAN</div>
          <div className="time-tag">9:00 PM</div>
        </div>

        {/* Right Side - Content */}
        <div className="blog-match-card-content">
          <h2 className="blog-card-heading">
            Pretoria Capitals vs Joburg Super Kings, SA20, Today Match Prediction
          </h2>
          <p className="blog-card-paragraph">
          PC vs JSK Betting Tips and Match Analysis The SA20 2025 is heating up, and the Pretoria Capitals are in a do-or-die situation as they..          
          </p>
          <div className="blog-match-card-footer">1 view • 0 comments</div>
        </div>
      </div>
      <div className="blog-match-card">
        {/* Left Side - Image */}
        <div className="blog-match-card-image">
          <img
            src={b3_img}
            alt="Match Preview"
          />
          <div className="date-tag">28 JAN</div>
          <div className="time-tag">9:00 PM</div>
        </div>

        {/* Right Side - Content */}
        <div className="blog-match-card-content">
          <h2 className="blog-card-heading">
            Pretoria Capitals vs Joburg Super Kings, SA20, Today Match Prediction
          </h2>
          <p className="blog-card-paragraph">
          PC vs JSK Betting Tips and Match Analysis The SA20 2025 is heating up, and the Pretoria Capitals are in a do-or-die situation as they..          
          </p>
          <div className="blog-match-card-footer">1 view • 0 comments</div>
        </div>
      </div>
    
    
   
    </div>
    
  );
};

export default Blog;
