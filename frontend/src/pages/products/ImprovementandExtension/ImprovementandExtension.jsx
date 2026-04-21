import React from "react";
import { FaHome, FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import rev from "../../../assets/images/Renovation.jpg";
import "./ImprovementandExtension.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import ServiceFaqs from "../../../components/ServiceFaqs/ServiceFaqs";

const ImprovementandExtension = () => {
  const navigate = useNavigate();
  const cards = [1];

  return (
    <div className="page-center improv-page">
      <ScrollReveal direction="down">
        <div className="improv-grid">
          {cards.map((item, index) => (
            <div className="improv-card" key={index}>
              <div className="improv-imagebox">
                <img src={rev} alt="Improvement and Extension Loan" />
                <div className="improv-overlay"></div>
                <div className="improv-icon">
                  <FaHome className="improv-rotate-icon" />
                </div>
              </div>

              <div className="improv-content">
                <h2>Improvement and Extension Loan</h2>
                <p className="improv-subtitle">
                  Renovate or extend your existing home
                </p>

                <div className="slide-in-text">
                  <ul className="improv-features">
                    <li>Quick approval</li>
                    <li>Minimal documentation</li>
                    <li>Attractive rates</li>
                  </ul>
                </div>

                <div className="improv-buttons">
                  <button className="improv-btn-outline">Learn More</button>
                  <button
                    className="improv-loan-btn-solid"
                    onClick={() => navigate("/apply-home-loan")}
                  >
                    Apply →
                  </button>
                </div>
              </div>
              <div className="improv-bottom-strip"></div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="improv-text-section">
          <h1 className="improv-main-title">Improvement and Extension Loan</h1>
          <h2 className="improv-sub-heading">
            Build Your dream house with a Nivara Improvement and Extension Loan
          </h2>
          <h3 className="improv-highlight">
            Get the Best Improvement and Extension Loan with Nivara Home Finance
          </h3>
          <p className="improv-description">
            Now convert your house into a contemporary home with Home Improvement
            (Repair and Renovation) Loan from Nivara Home Finance. This loan helps
            you improve the present home into a pleasant environment to live with
            Easy approvals, competitive rates, easy process, and minimum paperwork
            and with or without income proof documents. Our relationship officers
            will guide you through the Home Loan application procedure. They also
            provide guidance regarding the selection of the right Home Loan mix to
            the calculation of suitable Home Loan EMI value and tenure. Apart from
            guiding you through the Home Loan application procedure, we also
            provide excellent post-disbursement services.
          </p>
        </div>
      </ScrollReveal>

      {/* Features Strip Section */}
      <div className="improv-feature-strip">
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
            <div className="improv-feature-box">
              <div className={feature.circle ? "improv-circle-check-icon" : "improv-feature-icon"}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Features & Benefits Section */}
      <ScrollReveal direction="up">
        <div className="improv-benefits-section">
          <h2 className="improv-benefits-title">
            Key Features of Improvement and Extension Loan
          </h2>

          <div className="improv-benefits-list">
            {[
              "Available for with & without income proof customers",
              "No hidden charges",
              "Doorstep service",
              "Easily available in rural India",
              "Easy documentation",
              "End to End Process",
              "24x7 assistance",
              "Customized Repayment Options"
            ].map((benefit, index) => (
              <ScrollReveal 
                key={index} 
                direction="up" 
                delay={index * 0.05} 
                distance={10}
              >
                <div className="improv-benefit-item">
                  {benefit}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up">
        <section className="improv-quote-sec">
          <div className="improv-quote-con">
            <h2 className="improv-quote-ti">Request Quote Now</h2>
            <p className="improv-quote-subti">
              Easy to apply for a loan with us, Once you have complete this form.
            </p>

            <form className="improv-form">
              <div className="improv-form-grid">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="E-mail" />
                <input type="tel" placeholder="Contact Number" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="City" />
                <input type="date" placeholder="dd-mm-yyyy" />
                <input type="number" placeholder="Loan Amount" />
                <button type="submit" className="improv-quote-button">
                  SEND A REQUEST
                </button>
              </div>
            </form>
          </div>
        </section>
      </ScrollReveal>

      {/* Help Section */}
      <div className="improv-help-section">
        <ScrollReveal direction="up">
          <h2 className="improv-help-title">We are Here to Help You</h2>
          <p className="improv-help-subtitle">
            Our mission is to deliver reliable, latest news and opinions.
          </p>
        </ScrollReveal>

        <div className="improv-help-grid">
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
              <div className="improv-help-card">
                <div className="improv-help-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                {card.green ? (
                  <>
                    <p className="improv-help-green">{card.text}</p>
                    <p className={card.text2?.includes('@') ? "improv-help-green" : ""}>{card.text2}</p>
                  </>
                ) : (
                  <p>{card.text}</p>
                )}
                <span className="improv-help-link">{card.link}</span>
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

export default ImprovementandExtension;
 

