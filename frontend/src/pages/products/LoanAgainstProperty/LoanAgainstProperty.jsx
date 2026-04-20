import React from "react";
import lop from "../../../assets/images/LOP.jpg";
import { FiHome } from "react-icons/fi";
import { FaHome, FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";

import "./LoanAgainstProperty.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const LoanAgainstProperty = () => {
  const navigate = useNavigate();

  return (
    <div className="page-center lap-page">
      <ScrollReveal direction="down">
        <div className="lap-card-grid">
          {[1].map((item, index) => (
            <div className="lap-card" key={index}>
              <div className="lap-image">
                <img src={lop} alt="Loan Against Property" />
                <div className="lap-image-overlay"></div>
                <div className="lap-center-icon">
                  <FiHome className="lap-icon-only-rotate" />
                </div>
              </div>

              <div className="lap-content">
                <h2 className="lap-title">Loan Against Property</h2>
                <p className="lap-subtitle">
                  Unlock the value of your property for any purpose
                </p>

                <div className="slide-in-text">
                  <ul className="lap-features">
                    <li>High loan amount</li>
                    <li>Flexible usage</li>
                    <li>Long tenure</li>
                  </ul>
                </div>

                <div className="lap-buttons">
                  <button className="lap-btn-outline">Learn More</button>
                  <button
                    className="lap-loan-btn-solid"
                    onClick={() => navigate("/apply-home-loan")}
                  >
                    Apply →
                  </button>
                </div>
              </div>
              <div className="lap-strip"></div>
            </div>
          ))}
        </div>
      </ScrollReveal>

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

      <ScrollReveal direction="up">
        <section className="lap-quote-sec">
          <div className="lap-quote-con">
            <h2 className="lap-quote-ti">Request Quote Now</h2>
            <p className="lap-quote-subti">
              Easy to apply for a loan with us, Once you have complete this form.
            </p>

            <form className="lap-form">
              <div className="lap-form-grid">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="E-mail" />
                <input type="tel" placeholder="Contact Number" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="City" />
                <input type="date" placeholder="dd-mm-yyyy" />
                <input type="number" placeholder="Loan Amount" />
                <button type="submit" className="lap-quote-b">
                  SEND A REQUEST
                </button>
              </div>
            </form>
          </div>
        </section>
      </ScrollReveal>

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

      <div className="lap-faq-section">
        <ScrollReveal direction="up">
          <h2 className="lap-faq-heading">Loan Against Property FAQs</h2>
        </ScrollReveal>

        <div className="lap-faq-list">
          {[
            {
              q: "What is a Loan Against Property?",
              a: "A loan against property (LAP) is a secured loan that banks, housing finance companies and NBFCs provide against residential or commercial property. These loans typically have lower interest rates compared to personal or business loans and are disbursed in a reasonable time. Anyone with a pre-owned property can avail such loans, whether salaried or self-employed. The quantum of loan sanctioned is also higher than other available options."
            },
            {
              q: "Is loan against property a good idea?",
              a: "Yes. LAP offers better benefits compared to personal loans. It provides greater flexibility, lower interest rates, higher loan amounts, and longer repayment tenure. It is best suited for business owners and self-employed professionals."
            },
            {
              q: "Can I convert a loan against property to a home loan?",
              a: "Yes, it is possible to convert a LAP (Loan Against Property) into a home loan. However, the process and eligibility criteria vary depending on the lending institution and the original loan terms."
            },
            {
              q: "How does Loan Against Property work?",
              a: "Loan Against Property is a secured loan where borrowers pledge their property as collateral to avail funds. The loan amount is determined based on the property’s value and the borrower’s repayment capacity."
            },
            {
              q: "Who can avail Loan Against Property from Nivara Home Finance?",
              a: "Any Resident Indian individual, partnership firm, or company can apply for a Loan Against Property with Nivara Home Finance."
            },
            {
              q: "What are the documents required to apply for Loan Against Property?",
              a: (
                <>
                  <p>Along with the application form, the following documents are required:</p>
                  <ul>
                    <li>Proof of residence</li>
                    <li>Proof of identity</li>
                    <li>Latest financial documents</li>
                    <li>Copies of all property documents</li>
                  </ul>
                </>
              )
            }
          ].map((faq, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={index * 0.1}
            >
              <div className="lap-faq-item">
                <h4>{faq.q}</h4>
                {typeof faq.a === 'string' ? <p>{faq.a}</p> : faq.a}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanAgainstProperty;
 