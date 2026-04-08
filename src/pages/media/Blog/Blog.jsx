import React from "react";
import "./Blog.css";

// Banner image
import home2 from "../../../assets/images/home2.png";

// Blog images (you will replace with your real images)
import cbo from "../../../assets/images/blogimg1.png";
import cbo1 from "../../../assets/images/cbo1.jpg";
import cbo2 from "../../../assets/images/cbo2.jpg";
const blogs = [
  {
    img: cbo,
    title: "Nivara Wins NHB Excellence Award for Housing Loans to Women",
    date: "AUGUST 18, 2025",
    author: "JISHO P JOHNY",
    desc: "Nivara Wins NHB Excellence Award for Housing Loans to Women...",
  },
  {
    img: cbo1,
    title: "Exploring the Features and Advantages of Using a Bangalore Housing Finance Company",
    date: "FEBRUARY 29, 2024",
    author: "ADMIN",
    desc: "Introduction of Home Loan : Everyone dreams of owning their own...",
  },
  {
    img: cbo2,
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
      <div className="blog-banner animate-pop-up">
        <img src={home2} alt="Blog" />
        <h1 className="blog-title animate-pop-up">Blog</h1>
      </div>

      {/* Blog Cards */}
      <div className="blog-container animate-pop-up">
        {blogs.map((item, index) => (
          <div className="blog-card animate-pop-up" key={index}>

            <div className="blog-img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="blog-content animate-pop-up">
              <h3 className="animate-pop-up">{item.title}</h3>

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
