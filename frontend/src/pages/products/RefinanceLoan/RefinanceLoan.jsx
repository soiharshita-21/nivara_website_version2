import React from "react";
import { FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import ref from "../../../assets/images/composite home_loan.png";
import "./RefinanceLoan.css";
import "../ProductHero.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import ServiceFaqs from "../../../components/ServiceFaqs/ServiceFaqs";
import RequestQuote from "../../../components/RequestQuote/RequestQuote";

const refinanceLoanFaqs = [
  {
    q: "What is refinancing a home loan?",
    a: "Refinancing your home loan is nothing but a home loan balance transfer. It simply means the option to switch to another lender who can give a lower home loan interest rate."
  },
  {
    q: "When can I refinance my house?",
    a: "You can refinance your house when you believe it makes financial sense, typically when you can secure lower interest rates, better loan terms, or achieve other financial goals through the process."
  },
  {
    q: "How many times can you refinance a Home loan?",
    a: "There is no strict limit on how many times you can refinance a mortgage loan, but it's essential to consider the associated costs and benefits for each refinancing."
  },
  {
    q: "What do the best home loan and refinancing deals offer?",
    a: "● Lower Interest Rates\n● Reduced Monthly Payments\n● Shorter Loan Terms\n● Switching Loan Types"
  },
  {
    q: "What is the correlation between home loan interest rates and refinancing?",
    a: "The decision to refinance a home loan is heavily influenced by interest rates. When interest rates fall by even a modest amount, it can result in significant savings over the life of the loan.\nKeep an eye on the economy and interest rate forecasts. If rates are predicted to climb, you might wish to refinance sooner rather than later to secure favorable home loan refinancing rates."
  },
  {
    q: "Is it beneficial to refinance a home loan?",
    a: "Yes, refinancing a home loan can be highly beneficial. It offers the opportunity to secure lower interest rates, adjust loan terms, consolidate debts, access home equity, and enhance your overall financial situation."
  }
];

import FeaturesBenefits from "../../../components/FeaturesBenefits/FeaturesBenefits";

const refinanceLoanBenefits = [
  {
    title: "Loan Tenure Change",
    description: "One of the reasons why someone may look to refinance a home loan is to reduce the loan tenure. The basic advantage of reducing the loan tenure is that there are savings on interest costs."
  },
  {
    title: "Switching Lenders",
    description: "If you’re dissatisfied with your current lender’s customer service or terms, refinancing gives you the opportunity to switch to a more favorable lender. Not only does this move ensure better service but also helps maximize your savings."
  },
  {
    title: "Top-up Facility",
    description: "It enables you to access additional funds based on the equity you’ve built in your property. By refinancing with a top-up loan, you can address financial needs like home improvements, education expenses, or debt consolidation without the hassle of applying for a separate loan."
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
    title: "Pay Off Your Home Loan Sooner",
    description: "Refinancing your home can also shorten the length of your loan, allowing you to pay down your debt and build up equity faster. There are many reasons you might want to pay off your home sooner. Perhaps you want to purchase a rental property or reduce your overall debt."
  }
];

const RefinanceLoan = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page-wrapper">
      <section className="product-hero full-whitespace-hero">
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
                <h3>Why <span className="underline-word">Choose</span> Us</h3>
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
          <h3 className="refinance-sub-heading">
            Taking out a New Loan To Pay off an old one
          </h3>
          <h2 className="refinance-heading">
            Refinance Home Loan with Nivara Home Finance
          </h2>
          <p className="refinance-description">
            Refinancing your loan can help you save money and lower payments. Our team of specialists will help you find the best refinance loan solution. Get started today with our free rate quote calculator and discover how much you could save. Refinancing a home loan is an excellent way to reduce home loan liabilities. You may also think about refinancing your loan if a lender offers lower interest rates or better terms.
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
      <FeaturesBenefits 
        title=" Features and Benefits of Refinance Loan" 
        items={refinanceLoanBenefits} 
      />


      <RequestQuote themeColor="#E32125" />

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
            { icon: <FaCalendarAlt />, title: "Apply for Loan", text: "Looking to buy a home loan? then apply for loan now.", link: "Get Appointment", path: "/get-appointment" },
            { icon: <FaPhoneAlt />, title: "Call Us At", text: "1800-309-1516", text2: "contact@nivarahousing.com", link: "Contact Us", path: "/contact-inquiry", green: true },
            { icon: <FaUserTie />, title: "Talk to Advisor", text: "+91 80 26552822", text2: "Need to loan advise?", link: "Meet The Advisor", path: "/meet-advisor", green: true }
          ].map((card, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1 + 0.1}
            >
              <div 
                className="refinance-help-card" 
                onClick={() => navigate(card.path)}
                style={{ cursor: "pointer" }}
              >
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
      <ServiceFaqs faqs={refinanceLoanFaqs} />
    </div>
  );
};

export default RefinanceLoan;


