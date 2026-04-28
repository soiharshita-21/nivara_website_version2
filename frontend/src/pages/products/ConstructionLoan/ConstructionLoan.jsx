import React from "react";
import con from "../../../assets/images/Loan for construction.png";
import { FiHome } from "react-icons/fi";
import { FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import "./ConstructionLoan.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import ServiceFaqs from "../../../components/ServiceFaqs/ServiceFaqs";

const ConstructionLoan = () => {
  const navigate = useNavigate();

  return (
    <div className="page-center construction-page">
      <ScrollReveal direction="down">
        <div className="conloan-card-grid">
          {[1].map((item, index) => (
            <div className="conloan-card" key={index}>
              <div className="conloan-image">
                <img src={con} alt="Construction Loan" />
                <div className="conloan-overlay"></div>
                
                {/* NEW: Overlay Points */}
                <div className="conloan-image-points">
                  <h4 className="points-title">Why Choose Us</h4>
                  <div className="point">Stage-wise disbursement</div>
                  <div className="point">Flexible tenure</div>
                  <div className="point">Low processing fee</div>
                </div>


              </div>

              <div className="conloan-content">
                <h2>Construction Loan</h2>
                <p className="subtitle">
                  Build your home from the ground up with our construction loans
                </p>

                {/* <div className="slide-in-text">
                  <ul className="features">
                    <li>Stage-wise disbursement</li>
                    <li>Flexible tenure</li>
                    <li>Low processing fee</li>
                  </ul>
                </div> */}

                <div className="con-loan-buttons">
                  <button
                    className="home-loan-btn-solid"
                    onClick={() => navigate("/apply-home-loan")}
                  >
                    Apply →
                  </button>
                </div>
              </div>
              <div className="con-loan-bottom-strip"></div>
            </div>
          ))}
        </div>
      </ScrollReveal>

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

      <ScrollReveal direction="up">
        <section className="quote-sec">
          <div className="quote-con">
            <h2 className="quote-ti">Request Quote Now</h2>
            <p className="quote-subti">
              Easy to apply for a loan with us, Once you have complete this form.
            </p>

            <form className="form">
              <div className="form-grid">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="E-mail" />
                <input type="tel" placeholder="Contact Number" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="City" />
                <input type="date" placeholder="dd-mm-yyyy" />
                <input type="number" placeholder="Loan Amount" />
                <button type="submit" className="quote-b">
                  SEND A REQUEST
                </button>
              </div>
            </form>
          </div>
        </section>
      </ScrollReveal>

      {/* Features & Benefits Section */}
      <ScrollReveal direction="up">
        <div className="conloan-benefits-section">
          <h2 className="conloan-benefits-title">
            Benefits of a Home Construction Loan for Your Dream Home
          </h2>

          <div className="conloan-benefits-list">
            {[
              "Available for with & without income proof customers",
              "No hidden charges",
              "Doorstep service",
              "Easily available in rural India",
              "Easy documentation",
              "End to End Process",
              "Quick and Smooth Construction Loan Disbursal",
              "24x7 assistance",
              "Multiple Repayment Options",
              "Customized Construction Loan"
            ].map((benefit, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 0.05}
                distance={10}
              >
                <div className="conloan-benefit-item">
                  {benefit}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

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
            { icon: <FaCalendarAlt />, title: "APPLY FOR LOAN", text: "Looking to buy a home loan? then apply for loan now.", link: "Get Appointment" },
            { icon: <FaPhoneAlt />, title: "CALL US AT", text: "1800-309-1516", text2: "contact@nivarahousing.com", link: "Contact Us", green: true },
            { icon: <FaUserTie />, title: "TALK TO ADVISOR", text: "+91 80 26552822", text2: "Need to loan advise?", link: "Meet The Advisor", green: true }
          ].map((card, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1 + 0.1}
            >
              <div className="conloan-help-card">
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
      <ServiceFaqs />
    </div>
  );
};

export default ConstructionLoan;


