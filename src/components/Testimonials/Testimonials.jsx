import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import home from "../../assets/images/home.jpg";

/* Testimonials Data */
const testimonials = [
  {
    text: "The doorstep service and minimal paperwork made everything so convenient. I highly recommend Nivara to anyone looking for a home loan.",
    name: "Priya Menon",
    place: "Thiruvananthapuram, Kerala",
    type: "Construction Loan",
    rating: 5,
  },
  {
    text: "Nivara made my dream of owning a home come true. The process was smooth, and the team was incredibly supportive throughout the journey.",
    name: "Rajesh Kumar",
    place: "Kochi, Kerala",
    type: "Home Purchase Loan",
    rating: 5,
  },
  {
    text: "Fast approval and competitive interest rates. The customer support team was always available to answer my questions. Very satisfied!",
    name: "Suresh Nair",
    place: "Kollam, Kerala",
    type: "Composite Loan",
    rating: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  /* Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section">

      {/* Header */}
      <div className="testimonials-header">
         <span className="s">♡   </span>
        <span className="test-tag">  Testimonials  </span>
        <span className="s">   ♡</span>
        <h2>What Our Customers Say</h2>
        <p>Real stories from real people who achieved their dreams with Nivara</p>
      </div>

      {/* Slider Card */}
      <div className="testimonial-card">

        {/* Left Arrow */}
        <button className="nav-btn left" onClick={prev}>‹</button>

        {/* Content */}
        <div className="testimonial-content">

          {/* Quote */}
          <div className="quote-icon">❝</div>

          {/* Stars */}
          <div className="stars">
            {Array.from({ length: testimonials[index].rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          {/* Text */}
          <p className="testimonial-text">
            "{testimonials[index].text}"
          </p>

          <div className="testimonial-user">
  <div className="avatar">
    <img src={home} alt="home" />
  </div>

  <div className="user-info">
    <h4>{testimonials[index].name}</h4>
    <span className="place">{testimonials[index].place}</span>
    <span className="loan">{testimonials[index].type}</span>
  </div>
</div>
</div>
        
        <button className="nav-btn right" onClick={next}>›</button>
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

    </section>
  );
};

export default Testimonials;
