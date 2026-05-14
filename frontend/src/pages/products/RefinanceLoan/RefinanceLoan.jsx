import React from "react";
import { FaHome, FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import ref from "../../../assets/images/refinance.png";
import "./RefinanceLoan.css";
import "../ProductHero.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import ServiceFaqs from "../../../components/ServiceFaqs/ServiceFaqs";
import RequestQuote from "../../../components/RequestQuote/RequestQuote";

const RefinanceLoan = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page-wrapper">
      <section className="product-hero">
        <div className="product-hero-bg">
          <img src={ref} alt="Refinance Loan" />
          <div className="product-hero-overlay"></div>
        </div>
        <div className="product-hero-container">
          <div className="product-hero-content">
            <ScrollReveal direction="left">
              <h1 className="hero-title">
                Refinance <span className="text-red">Loan</span>
              </h1>
              <p className="hero-subtitle_service">
                Lower your interest rates and monthly payments by taking out a new loan to pay off your old one.
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
                  <li>Significantly lower your interest rate</li>
                  <li>Reduce your monthly EMI burden</li>
                  <li>Top-up facility for extra funds</li>
                  <li>Switch from floating to fixed rates easily</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="refinance-text-section">
          <h1 className="refinance-main-title">Refinance Loan</h1>
          <h2 className="refinance-sub-heading">
            Taking out a New Loan To Pay off an old one
          </h2>
          <h3 className="refinance-highlight">
            Refinance Home Loan with Nivara Home Finance
          </h3>
          <p className="refinance-description">
            Refinancing your loan can help you save money and lower payments. Our
            team of specialists will help you find the best refinance loan
            solution. Get started today with our free rate quote calculator and
            discover how much you could save. Refinancing a home loan is an
            excellent way to reduce home loan liabilities. You may also think
            about refinancing your loan if a lender offers lower interest rates or
            better terms.
          </p>
        </div>
      </ScrollReveal>

      {/* Features Strip Section */}
      <div className="refinance-feature-strip">
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
            <div className="refinance-feature-box">
              <div className={feature.circle ? "refinance-circle-check-icon" : "refinance-feature-icon"}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Features & Benefits Section */}
      <ScrollReveal direction="up">
        <div className="refinance-benefits-section">
          <h2 className="refinance-benefits-title">
            Key Features of Refinance Loan
          </h2>

          <div className="refinance-benefits-list">
            {[
              "Easy Loan Approvals",
              "Lowest Possible Prices",
              "Hassle free",
              "Secure Loan Process",
              "Loan Tenure Change",
              "Switching Lenders",
              "Top-up Facility",
              "Easily available in rural India",
              "Easy documentation",
              "Pay Off Your Home Loan Sooner",
              "Switch from a Floating Interest Rate to a Fixed Interest Rate",
              "Lower Your Interest Rate",
              "Lower Your Monthly Payment"
            ].map((benefit, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 0.05}
                distance={10}
              >
                <div className="refinance-benefit-item">
                  {benefit}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <RequestQuote themeColor="#7EB542" />

      {/* Help Section */}
      <div className="refinance-help-section">
        <ScrollReveal direction="up">
          <h2 className="refinance-help-title">We are Here to Help You</h2>
          <p className="refinance-help-subtitle">
            Our mission is to deliver reliable, latest news and opinions.
          </p>
        </ScrollReveal>

        <div className="refinance-help-grid">
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
              <div className="refinance-help-card">
                <div className="refinance-help-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                {card.green ? (
                  <>
                    <p className="refinance-help-green">{card.text}</p>
                    <p className={card.text2?.includes('@') ? "refinance-help-green" : ""}>{card.text2}</p>
                  </>
                ) : (
                  <p>{card.text}</p>
                )}
                <span className="refinance-help-link">{card.link}</span>
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

export default RefinanceLoan;


