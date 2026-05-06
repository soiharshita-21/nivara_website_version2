import React, { useEffect } from "react";
import "./Investors.css";
import investors2 from "../../assets/images/investors2.png";
import tnLogo from "../../assets/images/TN.png";
import bpeLogo from "../../assets/images/BPE.png";

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

      <section className="investors-content">

        <div className="investor-card-horizontal animate-slide-up">
          <div className="investor-logo-container">
            <img src={tnLogo} alt="True North Logo" className="investor-logo" />
          </div>
          <div className="investor-details">
            <div className="investor-header">
              <h2>True North</h2>
            </div>
            <p>
              Founded in 1999, True North is one of India’s most respected home-grown private equity firms with a focus on investing in and transforming mid-sized profitable businesses into large, well-established businesses that are valuable, enduring, and socially responsible. In Private Equity, True North has successfully raised seven separate investment funds with a combined corpus of ~ USD 3 billion, including co-investments. True North’s deep insights and understanding of India has added value to more than 60 businesses over the last 25 years across sectors such as consumer, financial services, healthcare, and technology.
            </p>
            <p>
              True North began its Private Credit vertical in 2021 focusing on sector agnostic performing credit, having fully deployed over INR 2000+ Cr through Fund I. The team is currently raising its Fund II.
            </p>
            <a href="https://www.truenorth.co.in" target="_blank" rel="noreferrer" className="investor-link-btn">
              Visit Website
            </a>
          </div>
        </div>

        <div className="investor-card-horizontal animate-slide-up">
          <div className="investor-logo-container">
            <img src={bpeLogo} alt="Baring Private Equity Logo" className="investor-logo" />
          </div>
          <div className="investor-details">
            <div className="investor-header">
              <h2>Baring Private Equity India</h2>
            </div>
            <p>
              Baring Private Equity India is one of India’s oldest and most established private equity investors, with nearly three decades of continuous investing across economic cycles. The firm focuses on taking growth-stage equity positions in high-quality businesses with strong fundamentals, scalable business models, and the potential to generate superior long-term returns on capital.
            </p>
            <p>
              Baring India partners closely with founders and management teams to support sustained value creation through strategic guidance, governance, and capital for growth. Over its 30-year history in India, the firm has built a reputation for disciplined investing, deep operating engagement, and long-term alignment with entrepreneurs.
            </p>
            <a href="https://www.bpepindia.com" target="_blank" rel="noreferrer" className="investor-link-btn">
              Visit Website
            </a>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Investors;

