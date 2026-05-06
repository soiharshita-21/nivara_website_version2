import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

// Banner image
import media2 from "../../../assets/images/media2.png"

// Blog images (you will replace with your real images)
import cbo from "../../../assets/images/blogimg1.png";
import cbo1 from "../../../assets/images/cbo1.jpg";
import cbo2 from "../../../assets/images/cbo2.jpg";
// Hardcoded blogs array removed - using blogData.initialBlogData


import axios from "axios";

const Blog = () => {
  const [allBlogs, setAllBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setAllBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        // Fallback to local storage or dummy data if API fails
        let saved = JSON.parse(localStorage.getItem("nivara_blogs"));
        if (saved && saved.length > 0) {
          setAllBlogs(saved);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">

      {/* Hero Banner */}
      <section className="page-banner" style={{ backgroundImage: `url(${media2})` }}>
        <div className="page-banner-overlay"></div>
        <div className="page-banner-content">
          <h1 className="page-banner-title">
            <span className="text-red">Blogs</span>
          </h1>
          <p className="page-banner-subtitle">
            Stay updated with our latest news and insights.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <div className="blog-container animate-pop-up">
        {allBlogs.map((item, index) => (
          <div className="blog-card animate-pop-up" key={index}>

            <div className="blog-img">
              <img src={item.image_url || item.image} alt={item.title} />
            </div>

            <div className="blog-content">
              <h3>{item.title}</h3>

              <div className="blog-meta">
                <span>{item.date}</span>
                <span>|</span>
                <span className="author-name">BY {item.author || "ADMIN"}</span>
              </div>

              <p>{item.content ? (item.content.length > 120 ? item.content.substring(0, 120) + "..." : item.content) : item.desc}</p>

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
