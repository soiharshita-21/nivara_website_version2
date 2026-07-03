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

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    const day = d.getDate();
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  }
  return dateStr.toUpperCase();
};

const Blog = () => {
  const [allBlogs, setAllBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/blogs`);
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

  React.useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".blog-card.animate-pop-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [allBlogs, loading]);

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
      <div className="blog-container">
        {allBlogs.map((item, index) => (
          <div 
            className="blog-card animate-pop-up" 
            key={index}
            style={{ transitionDelay: `${(index % 3) * 150}ms` }}
          >

            <div className="blog-img">
              <img src={item.image_url || item.image} alt={item.title} />
            </div>

            <div className="blog-content">
              <h3>{item.title}</h3>

              <div className="blog-meta">
                <span>{formatDate(item.date)}</span>
                <span className="meta-separator">|</span>
                <span className="author-name">BY {item.author || "ADMIN"}</span>
              </div>

              <p>{(item.content || item.desc || "").replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ")}</p>

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
