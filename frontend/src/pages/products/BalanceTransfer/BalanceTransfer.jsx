import React from "react";
import { FiHome } from "react-icons/fi";// balance transfer icon
import { FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import bal from "../../../assets/images/Balance Transfer.png"; // you will replace this
import "./BalanceTransfer.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import ServiceFaqs from "../../../components/ServiceFaqs/ServiceFaqs";
import RequestQuote from "../../../components/RequestQuote/RequestQuote";

const BalanceTransfer = () => {
  const navigate = useNavigate();
  const cards = [1];

  return (
    <section className="balance-section">
      <ScrollReveal direction="down">
        <div className="balance-grid">
          {cards.map((item, index) => (
            <div className="balance-card" key={index}>
              <div className="balance-imagebox">
                <img src={bal} alt="Balance Transfer" />
                <div className="balance-image-overlay"></div>

                {/* NEW: Overlay Points */}
                <div className="balance-image-points">
                  <h4 className="points-title">Why Choose Us</h4>

                  <div className="point">Lower Interest Rates</div>
                  <div className="point">Top-up Facility</div>
                  <div className="point">Easy Process</div>
                </div>

              </div>

              <div className="balance-content">
                <h2 className="balance-title">Balance Transfer</h2>
                <p className="balance-subtitle">
                  Transfer your existing loan for better rates and terms
                </p>

                {/* <div className="slide-in-text">
                  <ul className="balance-features">
                    <li>Lower interest rates</li>
                    <li>Top-up facility</li>
                    <li>Easy process</li>
                  </ul>
                </div> */}

                <div className="balance-buttons">
                  <button
                    className="balance-loan-btn-solid"
                    onClick={() => navigate("/apply-home-loan")}
                  >
                    Apply →
                  </button>
                </div>
              </div>
              <div className="balance-bottom-strip"></div>
            </div>
          ))}
        </div>
      </ScrollReveal>

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
      <ScrollReveal direction="up">
        <div className="balance-benefits-section">
          <h2 className="balance-benefits-title">
            Key Features of Home Loan Balance Transfer
          </h2>

          <div className="balance-benefits-list">
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
                <div className="balance-benefit-item">
                  {benefit}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <RequestQuote themeColor="#d32f2f" />

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
            { icon: <FaCalendarAlt />, title: "APPLY FOR LOAN", text: "Looking to buy a home loan? then apply for loan now.", link: "Get Appointment" },
            { icon: <FaPhoneAlt />, title: "CALL US AT", text: "1800-309-1516", text2: "contact@nivarahousing.com", link: "Contact Us", green: true },
            { icon: <FaUserTie />, title: "TALK TO ADVISOR", text: "+91 80 26552822", text2: "Need to loan advise?", link: "Meet The Advisor", green: true }
          ].map((card, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1 + 0.1}
            >
              <div className="balance-help-card">
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
      <ServiceFaqs />
    </section>
  );
};

export default BalanceTransfer;
