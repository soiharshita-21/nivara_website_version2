import React from "react";
import "./AboutUs.css";
import house2 from "../../../assets/images/aboutus1.png";
import abv2 from "../../../assets/images/abv2.png";
import { FaMoneyBillWave, FaHome, FaFileAlt, FaSyncAlt, FaCogs, FaHeadset, FaGlobe } from "react-icons/fa";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
 
const AboutUs = () => {
  return (
    <div className="about-page">
      <ScrollReveal direction="down">
        <section className="page-banner about-banner" style={{ backgroundImage: `url(${abv2})` }}>
          <div className="page-banner-overlay"></div>
          <div className="page-banner-content">
            <h1 className="page-banner-title">
              About <span className="text-red">Us</span>
            </h1>
            <p className="page-banner-subtitle">
              Empowering families through accessible and affordable housing finance.
            </p>
          </div>
        </section>
      </ScrollReveal>
 
      <ScrollReveal direction="up">
        <section className="about-section">
          <h2>Our Purpose</h2>
          <p>
            <b>To make home ownership accessible, affordable, and achievable for every family.</b>
          </p>
          <p>
            We exist to empower individuals, especially from underserved and
            informal sectors, by providing transparent, ethical, and responsible
            housing finance solutions that improve quality of life and long-term
            stability.
          </p>
        </section>
      </ScrollReveal>
 
      <ScrollReveal direction="up">
        <section className="about-section light">
          <h2>Our Inspiration</h2>
          <p>
            The name "Nivara" is derived from the Sanskrit roots <b>"नि + वृ" (Ni + Vru)</b>, meaning to cover, shelter, protect, and provide refuge.
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
      </ScrollReveal>
 
      {/* Features & Benefits */}
      <section className="features-section">
        <ScrollReveal direction="up" delay={0.1}>
          <h2>Features & Benefits</h2>
        </ScrollReveal>
 
        <div className="features-grid">
          {[
            { icon: <FaMoneyBillWave />, title: "No Hidden Charges", desc: "Transparent pricing with no surprises." },
            { icon: <FaHome />, title: "Doorstep Service", desc: "We come to you for a hassle-free experience." },
            { icon: <FaGlobe />, title: "Rural Accessibility", desc: "Easily available across rural and semi-urban areas." },
            { icon: <FaFileAlt />, title: "Easy Documentation", desc: "Minimal paperwork for faster approvals." },
            { icon: <FaSyncAlt />, title: "End-to-End Process", desc: "Complete support from application to disbursement." },
            { icon: <FaCogs />, title: "Flexible Repayment", desc: "Customized plans tailored to your needs." },
            { icon: <FaHeadset />, title: "24×7 Assistance", desc: "Always here to support you anytime." }
          ].map((feature, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * (index % 4)}>
              <div className="feature-card">
                <span className="icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
 
      <ScrollReveal direction="up">
        <section className="about-section">
          <h2>Our Genesis</h2>
          <p>
            The genesis of <b>Nivara Home Finance Limited </b>is traced to <b>C V Rao and Sunil Rohokale</b>, professional colleagues for two decades and veterans in the retail banking industry, primarily in the housing finance & real estate sectors.
            It all started over a telephonic conversation between the two during the Spring of 2014 where both felt the need to pursue their passion, leverage their experience and unique ideas to create a lasting, well-respected organization in the affordable housing finance business. Subsequently, the company Nivara Home Finance Limited was born and has as its promoters C V Rao, Sunil Rohokale and a group of like-minded professionals having decades of rich experience in this field.
          </p>
          <p>
            Founded on strong professional relationships, deep industry knowledge,
            and a shared passion for financial inclusion, Nivara was established
            to transform the way home loans are accessed and experienced in India.
          </p>
        </section>
      </ScrollReveal>
 
      <ScrollReveal direction="up">
        <section className="about-section light">
          <h2>Our Journey</h2>
          <p>
            Nivara was incorporated on December 02, 2014 under The Companies Act, 2013 with an objective to provide home loans mainly to the informal sector of urban India. Later, the company commenced its operations in October 2015 after obtaining the necessary Certificate of Registration from the National Housing Bank (NHB) in September 2015.
            The company is driven by its strong values with compliance to the highest standards of Corporate Governance. With the experience and guidance of the Board, Nivara is committed to bring in revolutionary changes in the affordable housing finance segment. Nivara has its headquarters in Bengaluru and a strong presence in 5 states with 101 branches.
          </p>
        </section>
      </ScrollReveal>
    </div>
  );
};
 
export default AboutUs;