import React from "react";
import pur from "../../../assets/images/Home Loan.png";
import { FaHome, FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import "./HomeLoanPurchase.css";
import "../ProductHero.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import ServiceFaqs from "../../../components/ServiceFaqs/ServiceFaqs";
import RequestQuote from "../../../components/RequestQuote/RequestQuote";

const HomeLoanPurchase = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page-wrapper">
      <section className="product-hero full-whitespace-hero">
        <div className="product-hero-bg">
          <img src={pur} alt="Home Purchase Loan" />
          <div className="product-hero-overlay"></div>
        </div>
        <div className="product-hero-container">
          <div className="product-hero-content">
            <ScrollReveal direction="left">
              <h1 className="hero-title">
                Home Purchase <span className="text-red">Loan</span>
              </h1>
              <p className="hero-subtitle_service">
                Finance your dream home with flexible repayment options, speedy approvals, and competitive rates.
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
                  <li>Up to 90% financing</li>
                  <li>Tenure up to 30 years</li>
                  <li>Competitive rates</li>
                  <li>Easy process with or without income proof</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="home-loan-text-section">
          <h1 className="home-loan-title">
            Secure Your Dream Home with Nivara Home Finance – Top Home Purchase
            Loan Provider in Bangalore
          </h1>

          <p className="home-loan-text">
            Home purchase loans are given explicitly to borrowers looking to
            purchase a house or flat with
            <strong> Nivara Home Finance</strong>. With speedy approvals,
            competitive rates, easy process, with or without Income Proof
            Documents and minimum paperwork, we help bring you close to your
            dreams of buying a new house in an easy and hassle-free manner. We
            offer purchase loans for flats, houses, or bungalows from builders.
          </p>

          <p className="home-loan-text">
            Our relationship officers will guide you through the Home Loan
            application procedure. They will also provide guidance regarding the
            selection of the right Home Loan mix to the calculation of suitable
            Home Loan EMI value and tenure. Apart from guiding you through the
            Home Loan application procedure, we also provide excellent
            post-disbursement services.
          </p>
        </div>
      </ScrollReveal>

      {/* Features Strip Section */}
      <div className="homeloan-feature-strip">
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
            <div className="homeloan-feature-box">
              <div className={feature.circle ? "homeloan-circle-check-icon" : "homeloan-feature-icon"}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Features & Benefits Section */}
      <ScrollReveal direction="up">
        <div className="homeloan-benefits-section">
          <h2 className="homeloan-benefits-title">
            Features and Benefits of Nivara Home Loan Purchase
          </h2>

          <div className="homeloan-benefits-list">
            {[
              "Available for with & without income proof customers",
              "No hidden charges",
              "Doorstep service",
              "Easily available in rural India",
              "Easy documentation",
              "End to End Process",
              "24x7 assistance",
              "Customized Repayment Options",
              "Transparent client interactions"
            ].map((benefit, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 0.05}
                distance={10}
              >
                <div className="homeloan-benefit-item">
                  {benefit}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <RequestQuote themeColor="#E32125" />

      {/* Help Section */}
      <div className="homeloan-help-section">
        <ScrollReveal direction="up">
          <h2 className="homeloan-help-title">We are Here to Help You</h2>
          <p className="homeloan-help-subtitle">
            Our mission is to deliver reliable, latest news and opinions.
          </p>
        </ScrollReveal>

        <div className="homeloan-help-grid">
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
              <div className="homeloan-help-card">
                <div className="homeloan-help-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                {card.green ? (
                  <>
                    <p className="homeloan-help-green">{card.text}</p>
                    <p className={card.text2.includes('@') ? "homeloan-help-green" : ""}>{card.text2}</p>
                  </>
                ) : (
                  <p>{card.text}</p>
                )}
                <span className="homeloan-help-link">{card.link}</span>
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

export default HomeLoanPurchase;

