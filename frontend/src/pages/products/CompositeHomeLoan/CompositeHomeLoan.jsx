import React from "react";
import { FaHome, FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import com from "../../../assets/images/Composite Home Loan.png";
import "./CompositeHomeLoan.css";
import "../ProductHero.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import ServiceFaqs from "../../../components/ServiceFaqs/ServiceFaqs";
import RequestQuote from "../../../components/RequestQuote/RequestQuote";

const compositeHomeLoanFaqs = [
  {
    q: "What is a composite loan?",
    a: "Composite loan is a loan extended by banks and financial institutions for the purpose of purchasing a plot or land and constructing a house on it within a given timeline. It’s a combination of a plot loan and a construction loan. In this type of loan, the cost of both land or plot and construction of the house is covered."
  },
  {
    q: "What is a composite home loan scheme in Nivara Home Finance?",
    a: "A composite home loan scheme is a similar housing loan that includes all components of home development, such as land purchase and construction costs. This loan is different from regular home loans because it lets you buy land and build a house within a certain amount of time."
  },
  {
    q: "Can we claim a composite loan?",
    a: "By completing your house construction within three years, you become eligible for tax benefits on your composite loan."
  },
  {
    q: "What are the benefits of a composite loan?",
    a: "The composite loan tax benefits include combining land and construction costs and tax incentives."
  }
];

import FeaturesBenefits from "../../../components/FeaturesBenefits/FeaturesBenefits";

const compositeHomeLoanBenefits = [
  {
    title: "Different from land loans",
    description: "A composite home loan differs from a land loan in that it covers both building and land expenditures. If you plan to start construction immediately, you should opt for a composite loan, but if you plan to construct later, a land loan might be a better option."
  },
  {
    title: "No hidden charges",
    description: "Our process is completely transparent and without any hidden charges."
  },
  {
    title: "Doorstep service",
    description: "Our Loan expert will provide you services right at your doorstep."
  },
  {
    title: "Easily available in rural India",
    description: "We have a wide network and are available in rural, semi-urban, and urban areas across locations."
  },
  {
    title: "Easy documentation",
    description: "Apply with minimal documents, save time and effort."
  },
  {
    title: "Loan Amount Of Composite Home Loan",
    description: "The composite loan limit is based on your loan repayment capacity."
  },
  {
    title: "Repayment Charges",
    description: "It’s possible that you’ll have to pay prepayment fees if you go with a fixed interest rate, but you may not have to do so if you go with a fluctuating interest rate on your composite loan. Prepayment fees may differ from one lender to the next."
  },
  {
    title: "Transparent client interactions",
    description: "We maintain high levels of transparency in our relations with customers."
  },
  {
    title: "Immediate construction requirement",
    description: "To avail of a composite home loan, immediate construction is a mandatory requirement. Lenders usually want borrowers to start building within one to two years of getting a loan. If they don’t, they may have to pay higher interest rates or pay off the loan and close it."
  },
  {
    title: "24x7 assistance",
    description: "Connect with us on Chat, Social Media anytime, anywhere."
  }
];

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
      <FeaturesBenefits 
        title=" Features and Benefits of Composite Home Loan" 
        items={compositeHomeLoanBenefits} 
      />


      <RequestQuote themeColor="#B3191F" />

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
            { icon: <FaCalendarAlt />, title: "Apply for Loan", text: "Looking to buy a home loan? then apply for loan now.", link: "Get Appointment", path: "/get-appointment" },
            { icon: <FaPhoneAlt />, title: "Call Us At", text: "1800-309-1516", text2: "contact@nivarahousing.com", link: "Contact Us", path: "/contact-inquiry", green: true }
          ].map((card, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1 + 0.1}
            >
              <div 
                className="com-help-card" 
                onClick={() => navigate(card.path)}
                style={{ cursor: "pointer" }}
              >
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
      <ServiceFaqs faqs={compositeHomeLoanFaqs} />
    </div>
  );
};

export default CompositeHomeLoan;


