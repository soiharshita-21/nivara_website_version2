import React from "react";
import "./Blog.css";

// Banner image
import home from "../../../assets/images/home.jpg";

// Blog images (you will replace with your real images)
import cbo from "../../../assets/images/cbo.jpg";
import hom from  "../../../assets/images/home.jpg";
import ho from "../../../assets/images/home.jpg";
const blogs = [
  {
    img: cbo,
    title: "Nivara Wins NHB Excellence Award for Housing Loans to Women",
    date: "AUGUST 18, 2025",
    author: "JISHO P",
    desc: "Nivara Wins NHB Excellence Award for Housing Loans to Women...",
  },
  {
    img: hom,
    title: "Exploring the Features and Advantages of Using a Bangalore Housing Finance Company",
    date: "FEBRUARY 29, 2024",
    author: "ADMIN",
    desc: "Introduction of Home Loan : Everyone dreams of owning their own...",
  },
  {
    img: ho,
    title: "What is a home loan & Different types of home loan products in Bangalore",
    date: "FEBRUARY 29, 2024",
    author: "ADMIN",
    desc: "Introduction of Home Loan : Everyone dreams of owning their own...",
  },
];

const Blog = () => {
  return (
    <div className="blog-page">

      {/* Banner */}
      <div className="blog-banner">
        <img src={home} alt="Blog" />
        <h1 className="blog-title">Blog</h1>
      </div>

      {/* Blog Cards */}
      <div className="blog-container">
        {blogs.map((item, index) => (
          <div className="blog-card" key={index}>

            <div className="blog-img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="blog-content">
              <h3>{item.title}</h3>

              <div className="blog-meta">
                <span>{item.date}</span>
                <span>|</span>
                <span className="author">BY {item.author}</span>
              </div>

              <p>{item.desc}</p>

              <button className="read-more">Read more</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Blog;
