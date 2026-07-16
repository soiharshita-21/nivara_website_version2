import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

/* Testimonials Data */
const testimonials = [
  {
    text: "Exceptional customer service and competitive interest rates! Nivara Home Finance made my dream of owning a home a reality. The loan processing was smooth, and the staff was helpful throughout. Highly satisfied and would definitely recommend.",
    name: "Goutham",
    rating: 5,
    place: "Bengaluru, Karnataka",
    date: "12th Apr 2026",
  },
  {
    text: "From the application stage until the disbursement, I had a fantastic experience. The staff was quite helpful. They were completely open and honest throughout the entire process. On the day of distribution, every employee in the bank was doing their part to assist me in completing the registration process on time. Nivara home finance is grateful.",
    name: "Mano",
    rating: 5,
    place: "Chennai, Tamil Nadu",
    date: "3rd May 2026",
  },
  {
    text: "iam happy with the overall service provided by nivara home finance always in touch and kept me updated on the loan status. recommend people to use it.",
    name: "Gautam Krishna",
    rating: 4.5,
    place: "Hyderabad, Telangana",
    date: "15th May 2026",
  },
  {
    text: "Great experience on getting the home loan processed. The process is fast and the process would gets completed in just couple of visits. Keep up the quality of service in Nivara Home finance in Bangalore.",
    name: "Vijay Adhitiya",
    rating: 5,
    place: "Vijayawada, Andhra Pradesh",
    date: "20th May 2026",
  },
  {
    text: "Recently I had applied for a home loan through Nivara Home Finance Bangalore. And I'm very much happy with their service and processing my home loan on the fast track ...",
    name: "Vijay J",
    rating: 4.5,
    place: "Bengaluru, Karnataka",
    date: "25th May 2026",
  },
  {
    text: "Applied loan in this bank at Thalaghattapura branch..found them very helpful..good service ..quick process",
    name: "Anitha Anitha K",
    rating: 5,
    place: "Thalaghattapura, Karnataka",
    date: "1st Jun 2026",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Safely guard against out-of-bounds index (e.g. from hot reloading after array length changes)
  useEffect(() => {
    if (index >= testimonials.length) {
      setIndex(0);
    }
  }, [index]);

  /* Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setIndex((prev) => (prev === 0 || prev >= testimonials.length ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[index] || testimonials[0] || { text: "", name: "", rating: 5, place: "", date: "" };

  return (
    <section className="testimonials-section">
      <ScrollReveal direction="up" distance={50}>
        {/* Header */}
        <div className="testimonials-header">
          <div className="section-badge-wrapper">
            <span className="section-badge-spark">✦</span>
            <span className="section-badge-title">Testimonials</span>
            <span className="section-badge-spark">✦</span>
          </div>
          <h2>What Our Customers Say</h2>
          <p>Real stories from real people who achieved their dreams with Nivara</p>
        </div>

        {/* Slider Card */}
        <div className="testimonial-card">
          {/* Left Arrow */}
          <button className="nav-btnn left" onClick={prev}>‹</button>

          {/* Content */}
          <div className="testimonial-content">
            {/* Quote */}
            <div className="quote-icon">
              <FaQuoteLeft style={{ color: "#B3191F", fontSize: "32px" }} />
            </div>

            {/* Stars */}
            <div className="stars" style={{ display: "flex", justifyContent: "center", gap: "4px" }}>
              {Array.from({ length: 5 }).map((_, i) => {
                const starVal = i + 1;
                if (currentTestimonial.rating >= starVal) {
                  return <FaStar key={i} />;
                } else if (currentTestimonial.rating >= starVal - 0.5) {
                  return <FaStarHalfAlt key={i} />;
                } else {
                  return <FaRegStar key={i} />;
                }
              })}
            </div>

            {/* Text */}
            <p className="testimonial-text">
              "{currentTestimonial.text}"
            </p>

            <div className="testimonial-user">
              {/* <div className="avatar">
                <img src={currentTestimonial.image} alt={currentTestimonial.name} />
              </div> */}

              <div className="user-info">
                <h4>{currentTestimonial.name}</h4>
                <span className="place">{currentTestimonial.place} • {currentTestimonial.date}</span>
                <span className="loan">{currentTestimonial.type || "Home Loan Customer"}</span>
              </div>
            </div>
          </div>

          <button className="nav-btnn right" onClick={next}>›</button>
        </div>

        <div className="dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Testimonials;

