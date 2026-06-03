import React from "react";
import { FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import bal from "../../../assets/images/Balance Transfer.png"; // you will replace this
import "./BalanceTransfer.css";
import "../ProductHero.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import ServiceFaqs from "../../../components/ServiceFaqs/ServiceFaqs";
import RequestQuote from "../../../components/RequestQuote/RequestQuote";

const balanceTransferFaqs = [
  {
    q: "What is a balance transfer loan ?",
    a: "A loan balance transfer refers to the process of transferring your outstanding loans to a new lender."
  },
  {
    q: "Why should I think about refinancing my home loan balance? ",
    a: "Paying your home loan can sometimes get challenging with the high-interest rates. Refinancing can offer you a way out. If you find a lender offering lower interest rates or better loan terms than your current lender, you can think about refinancing your home loan balance. Refinancing can help you reduce your monthly EMI (Equated Monthly Installment) payments, save on interest costs, and in some cases, shorten the loan term."
  },
  {
    q: "Is there a charge to transfer the rest of my home loan?",
    a: "Yes, we charge a processing fee for the home loan balance transfer facility to TCHFL (Tata Capital Home Finance Limited). The fee can differ based on the home loan amount and other factors. You can find the exact charge in the MITC (Most Important Terms and Conditions) document that will be shared with you when you apply for refinancing to Nivara Hol."
  },
  {
    q: "What are the documents required for a balance transfer loan ? ",
    a: "Age Proof , Address Proof , KYC Documents ,Home Loan Approval Letter , Interest certificates from the initial lender and With or Without income proof Documents ."
  }
];

import FeaturesBenefits from "../../../components/FeaturesBenefits/FeaturesBenefits";

const balanceTransferBenefits = [
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
    title: "24x7 assistance",
    description: "Connect with us on Chat, Social Media anytime, anywhere."
  },
  {
    title: "Customized Repayment Options",
    description: "Tailor-made home loans to suit your requirements."
  },
  {
    title: "Transparent client interactions",
    description: "We maintain high levels of transparency in our relations with customers."
  }
];

const BalanceTransfer = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page-wrapper">
      <section className="product-hero full-whitespace-hero">
        <div className="product-hero-bg">
          <img src={bal} alt="Balance Transfer" />
          <div className="product-hero-overlay"></div>
        </div>
        <div className="product-hero-container">
          <div className="product-hero-content">
            <ScrollReveal direction="left">
              <h1 className="hero-title">
                Balance <span className="text-red">Transfer</span>
              </h1>
              <p className="hero-subtitle_service">
                Transfer your existing loan to Nivara for better interest rates, top-up facilities, and a smoother repayment journey.
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
                  <li>Significantly lower interest rates</li>
                  <li>Attractive top-up loan facility</li>
                  <li>Zero hidden charges</li>
                  <li>Doorstep service for transfer</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="balance-text-section">
          <h2 className="balance-main-title">Balance Transfer</h2>
          <p className="balance-tagline">We will lift your Loan Burden</p>

          <h3 className="balance-subheading">
            Home Loan Balance Transfer with Nivara Home Finance:
          </h3>

          <p className="balance-description">
            NIVARA Home Finance offers Balance Transfer Loans at attractive
            interest rates to lower your loan repayments. Move your Home Loan
            outstanding balances to NHFL, pay lower monthly installments and enjoy
            the savings for the other things in life that really matter to you and
            your family.
          </p>
        </div>
      </ScrollReveal>

      {/* Features Strip Section */}
      <div className="balance-feature-strip">
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
            <div className="balance-feature-box">
              <div className={feature.circle ? "balance-circle-check-icon" : "balance-feature-icon"}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Features & Benefits Section */}
      <FeaturesBenefits 
        title=" Features  and Benefits of Home Loan Balance Transfer" 
        items={balanceTransferBenefits} 
      />


      <RequestQuote themeColor="#E32125" />

      {/* Help Section */}
      <div className="balance-help-section">
        <ScrollReveal direction="up">
          <h2 className="balance-help-title">We are Here to Help You</h2>
          <p className="balance-help-subtitle">
            Our mission is to deliver reliable, latest news and opinions.
          </p>
        </ScrollReveal>

        <div className="balance-help-grid">
          {[
            { icon: <FaCalendarAlt />, title: "APPLY FOR LOAN", text: "Looking to buy a home loan? then apply for loan now.", link: "Get Appointment", path: "/get-appointment" },
            { icon: <FaPhoneAlt />, title: "CALL US AT", text: "1800-309-1516", text2: "contact@nivarahousing.com", link: "Contact Us", path: "/contact-inquiry", green: true },
            { icon: <FaUserTie />, title: "TALK TO ADVISOR", text: "+91 80 26552822", text2: "Need to loan advise?", link: "Meet The Advisor", path: "/meet-advisor", green: true }
          ].map((card, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1 + 0.1}
            >
              <div 
                className="balance-help-card" 
                onClick={() => navigate(card.path)}
                style={{ cursor: "pointer" }}
              >
                <div className="balance-help-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                {card.green ? (
                  <>
                    <p className="balance-help-green">{card.text}</p>
                    <p className={card.text2?.includes('@') ? "balance-help-green" : ""}>{card.text2}</p>
                  </>
                ) : (
                  <p>{card.text}</p>
                )}
                <span className="balance-help-link">{card.link}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <ServiceFaqs faqs={balanceTransferFaqs} />
    </div>
  );
};

export default BalanceTransfer;

