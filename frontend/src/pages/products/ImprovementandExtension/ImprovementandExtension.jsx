import React from "react";
import { FaHome, FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import rev from "../../../assets/images/Improvement Extension.png";
import "./ImprovementandExtension.css";
import "../ProductHero.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import ServiceFaqs from "../../../components/ServiceFaqs/ServiceFaqs";
import RequestQuote from "../../../components/RequestQuote/RequestQuote";

const ImprovementandExtension = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page-wrapper">
      <section className="product-hero">
        <div className="product-hero-bg">
          <img src={rev} alt="Improvement and Extension Loan" />
          <div className="product-hero-overlay"></div>
        </div>
        <div className="product-hero-container">
          <div className="product-hero-content">
            <ScrollReveal direction="left">
              <h1 className="hero-title">
                Improvement & <span className="text-red">Extension Loan</span>
              </h1>
              <p className="hero-subtitle_service">
                Renovate or extend your existing home with quick approvals, attractive rates, and minimal documentation.
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
                  <li>Quick and hassle-free approval</li>
                  <li>Minimal documentation required</li>
                  <li>Most attractive interest rates</li>
                  <li>Available for all income profiles</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

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

      <RequestQuote themeColor="#7EB542" />

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



