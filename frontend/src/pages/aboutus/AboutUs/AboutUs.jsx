import React, { useEffect } from "react";
import "./AboutUs.css";
import house2 from "../../../assets/images/pol.png";
import hhh from "../../../assets/images/3.png";
import { FaMoneyBillWave, FaHome, FaFileAlt, FaSyncAlt, FaCogs, FaHeadset, FaGlobe } from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2, // Trigger when 20% of section is visible
    });

    const sections = document.querySelectorAll('.about-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero-section animate-pop-up">
        <div className="hero-left animate-pop-up">
          <h1 className="hero-title animate-pop-up">ABOUT<br />US</h1>
          <div className="hero-left-text animate-pop-up">
            <p className="hero-subtitle animate-pop-up">Empowering dreams and building homes. At Nivara, we help you turn your dream home into reality.</p>

          </div>
        </div>

        <div className="hero-center animate-pop-up">
          <img src={hhh} alt="Living Room" className="hero-main-img animate-pop-up" />
        </div>

        <div className="hero-right animate-pop-up">
          <img src={house2} alt="Interior Detail" className="hero-small-img animate-pop-up" />
          <div className="hero-philosophy animate-pop-up">
            <h2 className="animate-pop-up">Our Philosophy</h2>
            <p>Empowering individuals through accessible housing finance.
              Building trust through transparency, simplicity, and care.</p>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="features-section animate-pop-up">
        <h2 className="animate-pop-up">Features & Benefits</h2>

        <div className="features-grid">

          <div className="feature-card">
            <span className="icon"><FaMoneyBillWave /></span>
            <h3>No Hidden Charges</h3>
            <p>Transparent pricing with no surprises.</p>
          </div>

          <div className="feature-card">
            <span className="icon"><FaHome /></span>
            <h3>Doorstep Service</h3>
            <p>We come to you for a hassle-free experience.</p>
          </div>

          <div className="feature-card">
            <span className="icon"><FaGlobe /></span>
            <h3>Rural Accessibility</h3>
            <p>Easily available across rural and semi-urban areas.</p>
          </div>

          <div className="feature-card">
            <span className="icon"><FaFileAlt /></span>
            <h3>Easy Documentation</h3>
            <p>Minimal paperwork for faster approvals.</p>
          </div>

          <div className="feature-card">
            <span className="icon"><FaSyncAlt /></span>
            <h3>End-to-End Process</h3>
            <p>Complete support from application to disbursement.</p>
          </div>

          <div className="feature-card">
            <span className="icon"><FaCogs /></span>
            <h3>Flexible Repayment</h3>
            <p>Customized plans tailored to your needs.</p>
          </div>

          <div className="feature-card">
            <span className="icon"><FaHeadset /></span>
            <h3>24×7 Assistance</h3>
            <p>Always here to support you anytime.</p>
          </div>

        </div>
      </section>

      <section className="about-section slide-up animate-pop-up">
        <h2 className="animate-pop-up">Our Genesis</h2>
        <p>
          The genesis of Nivara Home Finance Limited is traced to C V Rao and Sunil Rohokale, professional colleagues for two decades and veterans in the retail banking industry, primarily in the housing finance & real estate sectors.

          It all started over a telephonic conversation between the two during the Spring of 2014 where both felt the need to pursue their passion, leverage their experience and unique ideas to create a lasting, well-respected organization in the affordable housing finance business. Subsequently, the company Nivara Home Finance Limited was born and has as its promoters C V Rao, Sunil Rohokale and a group of like-minded professionals having decades of rich experience in this field.



        </p>
        <p>
          Founded on strong professional relationships, deep industry knowledge,
          and a shared passion for financial inclusion, Nivara was established
          to transform the way home loans are accessed and experienced in India.
        </p>
      </section>

      <section className="about-section light slide-up animate-pop-up">
        <h2 className="animate-pop-up">Our Inspiration</h2>
        <p>
          The name "Nivara" is derived from the Sanskrit roots <span style={{ color: "red" }}>"नि + वृ" (Ni + Vru)</span>, meaning to cover, shelter, protect, and provide refuge.
        </p>
        <p>
          Shelter (निवारा) is one of the three fundamental human needs, along
          with food (अन्न) and clothing (वस्त्र). A home is not just a structure
          — it is a foundation for growth, stability, security, and human
          development.
        </p>
        <p>
          At Nivara, we believe that providing access to housing is not just a
          financial service — it is a contribution to building stronger
          families, communities, and futures.
        </p>
      </section>

      <section className="about-section slide-up animate-pop-up">
        <h2 className="animate-pop-up">Our Purpose</h2>
        <blockquote>
          To make home ownership accessible, affordable, and achievable for
          every family.
        </blockquote>
        <p>
          We exist to empower individuals, especially from underserved and
          informal sectors, by providing transparent, ethical, and responsible
          housing finance solutions that improve quality of life and long-term
          stability.
        </p>
      </section>

      <section className="about-section light slide-up animate-pop-up">
        <h2 className="animate-pop-up">Our Journey</h2>
        <p>
          Nivara was incorporated on December 02, 2014 under The Companies Act, 2013 with an objective to provide home loans mainly to the informal sector of urban India. Later, the company commenced its operations in October 2015 after obtaining the necessary Certificate of Registration from the National Housing Bank (NHB) in September 2015.

          The company is driven by its strong values with compliance to the highest standards of Corporate Governance. With the experience and guidance of the Board, Nivara is committed to bring in revolutionary changes in the affordable housing finance segment. Nivara has its headquarters in Bengaluru and a strong presence in 5 states with 101 branches.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
