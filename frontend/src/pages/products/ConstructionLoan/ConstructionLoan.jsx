import React from "react";
import con from "../../../assets/images/loan for construction.png";
import { FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import "./ConstructionLoan.css";
import "../ProductHero.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import ServiceFaqs from "../../../components/ServiceFaqs/ServiceFaqs";
import RequestQuote from "../../../components/RequestQuote/RequestQuote";

const constructionLoanFaqs = [
  {
    q: "What is a construction home loan?",
    a: "A home construction loan is an Nivara Home finance product, designed to help you construct your own home.If you have a plot of land and want to build a house to your own specifications, this product is ideal for you."
  },
  {
    q: "How do I get a Nivara home construction loan?",
    a: "Our application process is very easy. Fill out the form, and one of our relationship managers will get in touch with you to get all your details."
  },
  {
    q: "What documents are needed to apply for a home construction loan?",
    a: "- Age proof - Birth certificate, PAN card\n- Income proof - Salary slips, bank statements\n- A legal approval for construction from the Municipal Corporation\n- Approved sanction plan from the authority\n- Residence Proof: PAN Card, Passport, Any other Certificate from Statutory Authority\n- processing fee cheque"
  },
  {
    q: "Can I get a home loan for house construction?",
    a: "People can avail home loans to get their house constructed – either by themselves, or by employing a contractor to construct the house – on a plot that they own. Such loans are commonly termed construction loans."
  },
  {
    q: "How to get money for house construction?",
    a: "Apply for a home construction loan according to your eligibility. The lender will determine your loan eligibility based on your income and repayment capacity."
  },
  {
    q: "How will my EMI for a home construction loan be calculated?",
    a: "Your EMI is calculated based on the rate of interest charged to you at the time of application. We have two types of rates: fixed and floating, and this factors into the EMI amount you have to pay each month. To get an idea of what your EMI may look like, use our EMI calculator."
  }
];

import FeaturesBenefits from "../../../components/FeaturesBenefits/FeaturesBenefits";

const constructionLoanBenefits = [
  {
    title: "Available for with & without income proof customers",
    description: "Loan is available for customers with minimum wage too and with other non-income proof documentation."
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
    title: "Quick and Smooth Construction Loan Disbursal",
    description: "Get quick construction loan approval and disbursal with Nivara Home Finance. Say goodbye to delays and obstacles with our doorstep services."
  },
  {
    title: "24x7 assistance",
    description: "Connect with us on Chat, Social Media anytime, anywhere."
  },
  {
    title: "Multiple Repayment Options",
    description: "Pay your EMIs or pre-payments using multiple repayment options."
  },
  {
    title: "Customized Construction Loan",
    description: "Tailor your offer to match your budget, eligibility, and construction needs. Build your dream house with a generous loan and flexible 20 + year tenure."
  }
];

const ConstructionLoan = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page-wrapper">
      <section className="product-hero tight-whitespace-hero">
        <div className="product-hero-bg">
          <img src={con} alt="Construction Loan" />
          <div className="product-hero-overlay"></div>
        </div>
        <div className="product-hero-container">
          <div className="product-hero-content">
            <ScrollReveal direction="left">
              <h1 className="hero-title">
                Construction <span className="text-red">Loan</span>
              </h1>
              <p className="hero-subtitle_service">
                Build your home from the ground up with our stage-wise disbursement and flexible tenure options.
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
                  <li>Stage-wise disbursement</li>
                  <li>Flexible tenure up to 30 years</li>
                  <li>Low processing fees</li>
                  <li>Expert guidance throughout construction</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="construction-text-section">
          <h1 className="construction-title">
            Home Construction Loan
          </h1>
          <h3 className="construction-subtitle">
            Build the home of your dreams with the loan of your choice
          </h3>
          <h2 className="construction-heading">
            Flexible Home Construction Loans in Bangalore With Nivara Home Finance
          </h2>
          <p className="construction-text">
            A Home Construction Loan is a type of home loan that allows customers to obtain the necessary funds
            to finance the construction of residential house property on a piece of land. We bring over
            <strong> 10 years of expertise</strong> in Home construction loans and our customers have been able to
            expedite their home construction at competitive interest rates on Home construction loans,
            affordable EMIs and a hassle-free online application process.
          </p>
        </div>
      </ScrollReveal>

      {/* Features Strip Section */}
      <div className="conloan-feature-strip">
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
            <div className="conloan-feature-box">
              <div className={feature.circle ? "conloan-circle-check-icon" : "conloan-feature-icon"}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Features & Benefits Section */}
      <FeaturesBenefits 
        title=" Features and Benefits of a Home Construction Loan for Your Dream Home" 
        items={constructionLoanBenefits} 
      />


      <RequestQuote themeColor="#B3191F" />

      {/* Help Section */}
      <div className="conloan-help-section">
        <ScrollReveal direction="up">
          <h2 className="conloan-help-title">We are Here to Help You</h2>
          <p className="conloan-help-subtitle">
            Our mission is to deliver reliable, latest news and opinions.
          </p>
        </ScrollReveal>

        <div className="conloan-help-grid">
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
                className="conloan-help-card" 
                onClick={() => navigate(card.path)}
                style={{ cursor: "pointer" }}
              >
                <div className="conloan-help-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                {card.green ? (
                  <>
                    <p className="conloan-help-green">{card.text}</p>
                    <p className={card.text2?.includes('@') ? "conloan-help-green" : ""}>{card.text2}</p>
                  </>
                ) : (
                  <p>{card.text}</p>
                )}
                <span className="conloan-help-link">{card.link}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <ServiceFaqs faqs={constructionLoanFaqs} />
    </div>
  );
};

export default ConstructionLoan;




