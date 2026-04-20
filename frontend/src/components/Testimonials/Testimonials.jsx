import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import googleIcon from "../../assets/images/google.png"; // adjust path if needed

/* Testimonials Data */
const testimonials = [
  {
    text: "Exceptional customer service and competitive interest rates! Nivara Home Finance made my dream of owning a home a reality. The loan processing was smooth, and the staff was helpful throughout. Highly satisfied and would definitely recommend.",
    name: "goutham 786",
    rating: 5,
  },
  {
    text: "From the application stage until the disbursement, I had a fantastic experience. The staff was quite helpful. They were completely open and honest throughout the entire process. On the day of distribution, every employee in the bank was doing their part to assist me in completing the registration process on time. Nivara home finance is grateful.",
    name: "Mano Cool",
    rating: 5,
  },
  {
    text: "iam happy with the overall service provided by nivara home finance always in touch and kept me updated on the loan status. recommend people to use it.",
    name: "Gautam Krishna",
    rating: 4.5,
  },
  {
    text: "Great experience on getting the home loan processed. The process is fast and the process would gets completed in just couple of visits. Keep up the quality of service in Nivara Home finance in Bangalore.",
    name: "Vijay Adhitiya",
    rating: 5,
  },
  {
    text: "I am very happy banking for Nivara Home Finance bangalore. Documentation are fine and the bank executives are well co-ordinates. Process is much faster completed within just 20 days. I think the rate of interest is standard as per the market rate for Nivara home finance in bangalore. Thanks to Nivara....",
    name: "Rajesh Rs",
    rating: 4,
  },
  {
    text: "Recently I had applied for a home loan through Nivara Home Finance Bangalore. And I'm very much happy with their service and processing my home loan on the fast track ...",
    name: "Vijay J",
    rating: 4.5,
  },
  {
    text: "Applied loan in this bank at Thalaghattapura branch..found them very helpful..good service ..quick process",
    name: "Anitha Anitha K",
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
      <ScrollReveal direction="up">
        <div className="testimonials-header">
          <div className="section-badge-wrapper">
            <span className="section-badge-spark">✦</span>
            <span className="section-badge-title">Testimonials</span>
            <span className="section-badge-spark">✦</span>
          </div>
          <h2>What Our Customers Say</h2>
          <p>Real stories from real people who achieved their dreams with Nivara</p>
        </div>
      </ScrollReveal>

      {/* Slider Card */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="testimonial-card">
          {/* Left Arrow */}
          <button className="nav-btn left" onClick={prev}>‹</button>

          {/* Content */}
          <div className="testimonial-content">
            {/* Quote */}
            <div className="quote-icon">
              <img src={googleIcon} alt="Google" />
            </div>

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
              {/* <div className="avatar">
                <img src={testimonials[index].image} alt={testimonials[index].name} />
              </div> */}

              <div className="user-info">
                <h4>{testimonials[index].name}</h4>
                <span className="place">{testimonials[index].place}</span>
                <span className="loan">{testimonials[index].type}</span>
              </div>
            </div>
          </div>

          <button className="nav-btn right" onClick={next}>›</button>
        </div>
      </ScrollReveal>

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

