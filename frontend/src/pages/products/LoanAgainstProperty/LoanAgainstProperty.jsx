import React from "react";
import lop from "../../../assets/images/LOP.png";
import { FiHome } from "react-icons/fi";
import { FaHome, FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";

import "./LoanAgainstProperty.css";
import "../ProductHero.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import ServiceFaqs from "../../../components/ServiceFaqs/ServiceFaqs";
import RequestQuote from "../../../components/RequestQuote/RequestQuote";

const LoanAgainstProperty = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page-wrapper">
      <section className="product-hero">
        <div className="product-hero-bg">
          <img src={lop} alt="Loan Against Property" />
          <div className="product-hero-overlay"></div>
        </div>
        <div className="product-hero-container">
          <div className="product-hero-content">
            <ScrollReveal direction="left">
              <h1 className="hero-title">
                Loan Against <span className="text-red">Property</span>
              </h1>
              <p className="hero-subtitle_service">
                Unlock the hidden value of your property to fund your business, education, or any immediate financial need.
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
                  <li>High loan amounts up to ₹1 Crore</li>
                  <li>Flexible usage for any personal or business need</li>
                  <li>Long tenure with affordable EMIs</li>
                  <li>Quick and transparent processing</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="loan-against-text-section">
          <h1 className="loan-against-title">Loan Against Property</h1>
          <h3 className="loan-against-subtitle">
            Unlock the Potential of Your Property with Nivara Loan Against Property
          </h3>
          <p className="loan-against-text">
            <strong>Loan Against Property</strong> helps you fund immediate or
            urgent needs by unlocking the value of your property. It is one of the
            greatest ways to get a loan for all your financial demands. Whether
            you need money for further schooling, a family wedding, or medical
            expenses, a loan against property is one of the quickest ways to get
            rapid funding to meet your current financial needs. Explore this
            information to understand how to obtain a simple, fast, and
            hassle-free loan against property with <strong>Nivara</strong> and
            unlock the true value of your asset.
          </p>
        </div>
      </ScrollReveal>

      {/* Features Strip Section */}
      <div className="lap-feature-strip">
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
            <div className="lap-feature-box">
              <div className={feature.circle ? "lap-circle-check-icon" : "lap-feature-icon"}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Features & Benefits Section */}
      <ScrollReveal direction="up">
        <div className="lap-benefits-section">
          <h2 className="lap-benefits-title">
            Key Features of Nivara Loan Against Property
          </h2>

          <div className="lap-benefits-list">
            {[
              "Competitive interest rates",
              "Higher loan amount",
              "Customized Repayment Options",
              "No hidden charges",
              "Doorstep service",
              "Easily available in rural India",
              "Easy documentation",
              "End to End Process",
              "24x7 assistance",
              "Transparent client interactions"
            ].map((benefit, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 0.05}
                distance={10}
              >
                <div className="lap-benefit-item">
                  {benefit}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <RequestQuote themeColor="#E32125" />

      {/* Help Section */}
      <div className="lap-help-section">
        <ScrollReveal direction="up">
          <h2 className="lap-help-title">We are Here to Help You</h2>
          <p className="lap-help-subtitle">
            Our mission is to deliver reliable, latest news and opinions.
          </p>
        </ScrollReveal>

        <div className="lap-help-grid">
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
              <div className="lap-help-card">
                <div className="lap-help-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                {card.green ? (
                  <>
                    <p className="lap-help-green">{card.text}</p>
                    <p className={card.text2?.includes('@') ? "lap-help-green" : ""}>{card.text2}</p>
                  </>
                ) : (
                  <p>{card.text}</p>
                )}
                <span className="lap-help-link">{card.link}</span>
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

export default LoanAgainstProperty;


