import React, { useEffect } from "react";
import "./Investors.css";
import investors2 from "../../assets/images/investors2.png";
import tnLogo from "../../assets/images/tn.png";
import bpeLogo from "../../assets/images/bpe.png";

const Investors = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate-slide-up, .animate-pop-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="investors-page">

      <section className="page-banner animate-pop-up" style={{ backgroundImage: `url(${investors2})` }}>
        <div className="page-banner-overlay"></div>
        <div className="page-banner-content">
          <h1 className="page-banner-title">
            Our <span className="text-red">Investors</span>
          </h1>
          <p className="page-banner-subtitle">
            Partnering with visionary leaders to build a stronger, more sustainable future in housing finance.
          </p>
        </div>
      </section>

      <section className="investors-grid-container">
        <div className="investors-grid">


          {/* Baring Card */}
          <div className="investor-modern-card green animate-slide-up">
            <div className="investor-logo-box">
              <img src={bpeLogo} alt="Baring Private Equity Logo" className="investor-logo" />
            </div>
            <div className="investor-info">
              <h2>Baring Private Equity India</h2>
              <div className="investor-divider"></div>
              <p>
                Baring Private Equity India is one of the country’s oldest investors,
                with nearly three decades of experience across economic cycles.
                They focus on growth-stage equity in high-quality businesses.
              </p>
              <p className="extra-text">
                Baring India partners closely with founders to support sustained
                value creation through strategic guidance and capital for growth.
              </p>
              <a href="https://www.bpepindia.com" target="_blank" rel="noreferrer" className="investor-btn">
                Visit Website
              </a>
            </div>
          </div>
          {/* True North Card */}
          <div className="investor-modern-card red animate-slide-up">
            <div className="investor-logo-box">
              <img src={tnLogo} alt="True North Logo" className="investor-logo" />
            </div>
            <div className="investor-info">
              <h2>True North</h2>
              <div className="investor-divider"></div>
              <p>
                Founded in 1999, True North is one of India’s most respected private equity firms,
                focusing on transforming mid-sized profitable businesses into large, enduring,
                and socially responsible institutions.
              </p>
              <p className="extra-text">
                With a combined corpus of ~USD 3 billion, True North has successfully
                added value to more than 60 businesses over the last 25 years.
              </p>
              <a href="https://www.truenorth.co.in" target="_blank" rel="noreferrer" className="investor-btn">
                Visit Website
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Investors;

