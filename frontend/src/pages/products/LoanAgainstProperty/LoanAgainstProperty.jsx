import React from "react";
import lap from "../../../assets/images/loan against property.png";
import { FiHome } from "react-icons/fi";
import { FaHome, FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";

import "./LoanAgainstProperty.css";
import "../ProductHero.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import ServiceFaqs from "../../../components/ServiceFaqs/ServiceFaqs";
import RequestQuote from "../../../components/RequestQuote/RequestQuote";

const loanAgainstPropertyFaqs = [
  {
    q: "What is a Loan Against Property ?",
    a: "A loan against property (LAP) is a secured loan that banks, housing finance companies and NBFCs provide against residential or commercial property. These loans are typically has lower interest rates as compared to a personal loan or business loan and are disbursed at a reasonable time. Anyone with a pre-owned property can avail such loans, whether they are salaried or self-employed in a business or professional setup. The quantum of loan sanctioned is also higher than what may be offered in other available options."
  },
  {
    q: "Is loan against property a good idea?",
    a: "LAP avails the best offer as compared to PL. It gives greater flexibility, lower interest rates, higher loan amounts, and longer repayment tenure. LAP is also best suited for those running their own businesses or self-employed professionals."
  },
  {
    q: "Can I convert a loan against property to a home loan?",
    a: "Yes, it is possible to convert a LAP (Loan Against Property) loan to a home loan. However, the process and eligibility criteria for such a conversion may vary depending on the lending institution and the terms of the original loan."
  },
  {
    q: "How Does Loan Against Property Work?",
    a: "Loan Against Property is a secured loan where borrowers pledge their property as collateral to avail funds. The loan amount is determined based on the property's value and the borrower's repayment capacity."
  },
  {
    q: "Who Can Avail Loan Against Property From Nivara Home Finance?",
    a: "Any Resident Indian Individual, partnership firms or companies can apply for a LAP with Nivara Home Finance."
  },
  {
    q: "What Are The Documents Required To Apply For Loan Against Property With Nivara Home Finance ?",
    a: "Along with application form, following documents are required to be submitted:\n- Proof of residence\n- Proof of identity Certified/\n- latest financial documents\n- Copies of all property documents (Need to check)"
  }
];

import FeaturesBenefits from "../../../components/FeaturesBenefits/FeaturesBenefits";

const loanAgainstPropertyBenefits = [
  {
    title: "Competitive interest rates",
    description: "Loan Against Property typically usually has lower interest rates compared to other unsecured loans."
  },
  {
    title: "Higher loan amount",
    description: "Depending on the value of the property, the borrower can avail a higher loan amount."
  },
  {
    title: "Customized Repayment Options",
    description: "The repayment tenure for Loan Against Property can be up to 20 years, which gives the borrower ample time to repay the loan."
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
    title: "End to End Process",
    description: "Home loan Approval in Simple steps."
  },
  {
    title: "24x7 assistance",
    description: "Connect with us on Chat, Social Media anytime, anywhere."
  },
  {
    title: "Transparent client interactions",
    description: "We maintain high levels of transparency in our relations with customers."
  }
];

const LoanAgainstProperty = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page-wrapper">
      <section className="product-hero full-whitespace-hero">
        <div className="product-hero-bg">
          <img src={lap} alt="Loan Against Property" className="shift-left" />
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
                <h3>Why <span className="underline-word">Choose</span> Us</h3>
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
          <h1 className="lap-title">Loan Against Property</h1>
          <h3 className="lap-subtitle-red">
            Unlock the potential of your property with Nivara
          </h3>
          <h2 className="lap-heading">
            Loan Against Property with Nivara Home Finance
          </h2>
          <p className="lap-text">
            Loan Against Property helps you fund immediate or urgent needs by unlocking the value of your property. It is one of the greatest ways to get a loan for all your financial demands. Whether you need money for further schooling, a family wedding, or medical expenses, a loan against property is one of the quickest ways to get rapid funding to meet your current financial needs. Explore this information to understand how to obtain a simple, fast, and hassle-free loan against property with Nivara and unlock the true value of your asset.
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
      <FeaturesBenefits 
        title=" Features and Benefits of Nivara Loan Against Property" 
        items={loanAgainstPropertyBenefits} 
      />


      <RequestQuote themeColor="#B3191F" />

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
            { icon: <FaCalendarAlt />, title: "Apply for Loan", text: "Looking to buy a home loan? then apply for loan now.", link: "Get Appointment", path: "/get-appointment" },
            { icon: <FaPhoneAlt />, title: "Call Us At", text: "1800-309-1516", text2: "contact@nivarahousing.com", link: "Contact Us", path: "/contact-inquiry", green: true }
          ].map((card, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1 + 0.1}
            >
              <div 
                className="lap-help-card" 
                onClick={() => navigate(card.path)}
                style={{ cursor: "pointer" }}
              >
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
      <ServiceFaqs faqs={loanAgainstPropertyFaqs} />
    </div>
  );
};

export default LoanAgainstProperty;


