import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

// Banner image
import home2 from "../../../assets/images/home2.png";

// Blog images (you will replace with your real images)
import cbo from "../../../assets/images/blogimg1.png";
import cbo1 from "../../../assets/images/cbo1.jpg";
import cbo2 from "../../../assets/images/cbo2.jpg";
// Hardcoded blogs array removed - using blogData.initialBlogData


const Blog = () => {
  const [allBlogs, setAllBlogs] = React.useState([]);

  React.useEffect(() => {
    // We already have a mechanism in AdminDashboard to populate this.
    // However, if a user visits this page directly without ever going to admin,
    // we should still show the initial data.
    let saved = JSON.parse(localStorage.getItem("nivara_blogs"));
    if (!saved || saved.length === 0) {
      // Fallback if localStorage is totally empty (e.g. first visit)
      // Note: In a real app, you'd fetch this from a DB.
      // Importing initialBlogData here just for fallback.
      import("./blogData").then(module => {
        setAllBlogs(module.initialBlogData);
      });
    } else {
      setAllBlogs(saved);
    }
  }, []);

  return (
    <div className="blog-page">

      {/* Hero Banner */}
      <div className="blog-hero-banner">
        <img src={home2} alt="Blog Banner" />

        <div className="blog-breadcrumb">
          <Link to="/">Nivara Home</Link>
          <span className="blog-separator">&gt;</span>
          <span className="blog-current">Blog</span>
        </div>

        <h1 className="blog-hero-title">Blog</h1>
      </div>

      {/* Blog Cards */}
      <div className="blog-container animate-pop-up">
        {allBlogs.map((item, index) => (
          <div className="blog-card animate-pop-up" key={index}>

            <div className="blog-img">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="blog-content">
              <h3>{item.title}</h3>

              <div className="blog-meta">
                <span>{item.date}</span>
                <span>|</span>
                <span className="author-name">BY {item.author || "ADMIN"}</span>
              </div>

              <p>{item.desc}</p>

              <Link 
                className="read-more" 
                to={`/media/blog/${item.slug || item.id}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              >
                Read more
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};



export default Blog;
