import React from "react";
import { FaHome, FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import com from "../../../assets/images/Composite Home Loan.png";
import "./CompositeHomeLoan.css";
import "../ProductHero.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import ServiceFaqs from "../../../components/ServiceFaqs/ServiceFaqs";
import RequestQuote from "../../../components/RequestQuote/RequestQuote";

const CompositeHomeLoan = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page-wrapper">
      <section className="product-hero full-whitespace-hero">
        <div className="product-hero-bg">
          <img src={com} alt="Composite Home Loan" />
          <div className="product-hero-overlay"></div>
        </div>
        <div className="product-hero-container">
          <div className="product-hero-content">
            <ScrollReveal direction="left">
              <h1 className="hero-title">
                Composite Home <span className="text-red">Loan</span>
              </h1>
              <p className="hero-subtitle_service">
                A single combined loan for land purchase and construction, tailored to build your dream house.
              </p>
              <div className="hero-actions">
                <button
                  className="hero-btn-primary"
                  onClick={() => navigate("/apply-home-loan")}
                >
                  Apply Now
                </button>
              </div>
            </ScrollReveal>
          </div>

          <div className="product-hero-card">
            <ScrollReveal direction="right">
              <div className="hero-glass-card">
                <h3>Why Choose Us</h3>
                <ul>
                  <li>Single application for land & construction</li>
                  <li>End-to-end financing solutions</li>
                  <li>Maximum tax benefits</li>
                  <li>Hassle-free documentation</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="composite-text-section">
          <h1 className="composite-main-title">Composite Home Loan</h1>
          <h2 className="composite-sub-heading">
            Build Your dream house with a Nivara Composite Home loan
          </h2>
          <h3 className="composite-highlight">
            Get the Best Composite Home Loan in Bangalore with Nivara Home Finance
          </h3>
          <p className="composite-description">
            The thought of building your own home can be exciting. You can plan
            and design the home just the way you want to suit your preference,
            needs and taste in aesthetics. After all, you would want your home to
            reflect your personality. And, if you’re going to buy land to
            construct your home, applying for a composite loan can help you get
            the desired funds and accomplish your dream of being a homeowner.
          </p>
        </div>
      </ScrollReveal>

      {/* Features Strip Section */}
      <div className="com-feature-strip">
        {[
          { icon: <FaFileAlt />, title: "Easy Loan Approvals" },
          { icon: <FaCoins />, title: "Lowest Possible Prices" },
          { icon: <FaBriefcase />, title: "Hassle free" },
          { icon: <FaCheck />, title: "Secure Loan Process", circle: true }
        ].map((feature, index) => (
          <ScrollReveal
            key={index}
            direction="up"
            delay={index * 0.1 + 0.2}
            distance={20}
          >
            <div className="com-feature-box">
              <div className={feature.circle ? "com-circle-check-icon" : "com-feature-icon"}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Features & Benefits Section */}
      <ScrollReveal direction="up">
        <div className="com-benefits-section">
          <h2 className="com-benefits-title">
            Key Features of Composite Home Loan
          </h2>

          <div className="com-benefits-list">
            {[
              "Different from land loans",
              "No hidden charges",
              "Doorstep service",
              "Easily available in rural India",
              "Easy documentation",
              "Loan Amount Of Composite Home Loan (Varies based on eligibility)",
              "Repayment Charges (Transparently disclosed)",
              "Transparent client interactions",
              "Immediate construction requirement",
              "24x7 assistance"
            ].map((benefit, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 0.05}
                distance={10}
              >
                <div className="com-benefit-item">
                  {benefit}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <RequestQuote themeColor="#E32125" />

      {/* Help Section */}
      <div className="com-help-section">
        <ScrollReveal direction="up">
          <h2 className="com-help-title">We are Here to Help You</h2>
          <p className="com-help-subtitle">
            Our mission is to deliver reliable, latest news and opinions.
          </p>
        </ScrollReveal>

        <div className="com-help-grid">
          {[
            { icon: <FaCalendarAlt />, title: "APPLY FOR LOAN", text: "Looking to buy a home loan? then apply for loan now.", link: "Get Appointment" },
            { icon: <FaPhoneAlt />, title: "CALL US AT", text: "1800-309-1516", text2: "contact@nivarahousing.com", link: "Contact Us", green: true },
            { icon: <FaUserTie />, title: "TALK TO ADVISOR", text: "+91 80 26552822", text2: "Need to loan advise?", link: "Meet The Advisor", green: true }
          ].map((card, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1 + 0.1}
            >
              <div className="com-help-card">
                <div className="com-help-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                {card.green ? (
                  <>
                    <p className="com-help-green">{card.text}</p>
                    <p className={card.text2?.includes('@') ? "com-help-green" : ""}>{card.text2}</p>
                  </>
                ) : (
                  <p>{card.text}</p>
                )}
                <span className="com-help-link">{card.link}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <ServiceFaqs />
    </div>
  );
};

export default CompositeHomeLoan;


