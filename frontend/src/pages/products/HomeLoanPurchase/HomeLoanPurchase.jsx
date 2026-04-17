import React from "react";
import pur from "../../../assets/images/purchase.jpg";
import { FaHome, FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import "./HomeLoanPurchase.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const HomeLoanPurchase = () => {
  const navigate = useNavigate();

  return (
    <div className="page-center home-page">
      <ScrollReveal direction="down">
        <div className="loan-card-grid">
          {[1].map((item, index) => (
            <div className="loan-card" key={index}>
              <div className="loan-image">
                <img src={pur} alt="Home Loan" />
                <div className="image-overlay"></div>
                <div className="center-icon">
                  <FaHome className="icon-rotate" />
                </div>
              </div>

              <div className="loan-content">
                <h2>Home Purchase Loan</h2>
                <p className="subtitle">
                  Finance your dream home with flexible repayment options
                </p>

                <div className="slide-in-text">
                  <ul className="homefeatures">
                    <li>Up to 90% financing</li>
                    <li>Tenure up to 30 years</li>
                    <li>Competitive rates</li>
                  </ul>
                </div>

                <div className="ho-loan-buttons">
                  <button className="ho-loan-btn-outline">Learn More</button>
                  <button
                    className="ho-loan-btn-solid"
                    onClick={() => navigate("/apply-home-loan")}
                  >
                    Apply →
                  </button>
                </div>
              </div>
              <div className="home-loan-bottom-strip"></div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="home-loan-text-section">
          <h1 className="home-loan-title">
            Secure Your Dream Home with Nivara Home Finance – Top Home Purchase
            Loan Provider in Bangalore
          </h1>

          <p className="home-loan-text">
            Home purchase loans are given explicitly to borrowers looking to
            purchase a house or flat with
            <strong> Nivara Home Finance</strong>. With speedy approvals,
            competitive rates, easy process, with or without Income Proof
            Documents and minimum paperwork, we help bring you close to your
            dreams of buying a new house in an easy and hassle-free manner. We
            offer purchase loans for flats, houses, or bungalows from builders.
          </p>

          <p className="home-loan-text">
            Our relationship officers will guide you through the Home Loan
            application procedure. They will also provide guidance regarding the
            selection of the right Home Loan mix to the calculation of suitable
            Home Loan EMI value and tenure. Apart from guiding you through the
            Home Loan application procedure, we also provide excellent
            post-disbursement services.
          </p>
        </div>
      </ScrollReveal>

      {/* Features Strip Section */}
      <div className="homeloan-feature-strip">
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
            <div className="homeloan-feature-box">
              <div className={feature.circle ? "homeloan-circle-check-icon" : "homeloan-feature-icon"}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Features & Benefits Section */}
      <ScrollReveal direction="up">
        <div className="homeloan-benefits-section">
          <h2 className="homeloan-benefits-title">
            Features and Benefits of Nivara Home Loan Purchase
          </h2>

          <div className="homeloan-benefits-list">
            {[
              "Loan is available for customers with minimum wage too and with other non-income proof documentation.",
              "Our process is completely transparent and without any hidden charges.",
              "Our Loan expert will provide you services right at your doorstep.",
              "We have a wide network and are available in rural, semi-urban, and urban areas across locations.",
              "Apply with minimal documents, save time and effort.",
              "Home loan Approval in Simple steps.",
              "Connect with us on Chat, Social Media anytime, anywhere.",
              "Tailor-made home loans to suit your requirements.",
              "We maintain high levels of transparency in our relations with customers."
            ].map((benefit, index) => (
              <ScrollReveal 
                key={index} 
                direction="up" 
                delay={index * 0.05} 
                distance={10}
              >
                <div className="homeloan-benefit-item">
                  {benefit}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Help Section */}
      <div className="homeloan-help-section">
        <ScrollReveal direction="up">
          <h2 className="homeloan-help-title">We are Here to Help You</h2>
          <p className="homeloan-help-subtitle">
            Our mission is to deliver reliable, latest news and opinions.
          </p>
        </ScrollReveal>

        <div className="homeloan-help-grid">
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
              <div className="homeloan-help-card">
                <div className="homeloan-help-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                {card.green ? (
                  <>
                    <p className="homeloan-help-green">{card.text}</p>
                    <p className={card.text2.includes('@') ? "homeloan-help-green" : ""}>{card.text2}</p>
                  </>
                ) : (
                  <p>{card.text}</p>
                )}
                <span className="homeloan-help-link">{card.link}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal direction="up">
        <section className="quote-section">
          <div className="quote-wrapper">
            <div className="quote-header">
              <h2 className="quote-title">Request Quote Now</h2>
              <p className="quote-subtitle">
                Easy to apply for a loan with us, Once you have complete this
                form.
              </p>
            </div>

            <form className="quote-form">
              <div className="quote-form-grid">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="Contact Number" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="City" />
                <input type="date" />
                <input type="text" placeholder="Loan Amount" />
                <button type="submit" className="quote-btn">
                  SEND A REQUEST
                </button>
              </div>
            </form>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <div className="faq-section">
        <ScrollReveal direction="up">
          <h2 className="faq-title">
            Home Loan Purchase: Your Frequently Asked Questions Answered
          </h2>
        </ScrollReveal>

        <div className="faq-list">
          {[
            {
              q: "What is the need of a Home Loan?",
              a: (
                <>
                  <p>Customers can avail Home Loan for a variety of purposes that includes but not limited to:</p>
                  <ul>
                    <li>For the purpose of purchasing the Home/Flat.</li>
                    <li>For the purpose of Renovation.</li>
                    <li>For the purpose of Construction of Home.</li>
                    <li>For the purpose of Balance transfer of running Home Loan to NHFL.</li>
                  </ul>
                </>
              )
            },
            {
              q: "Is a personal loan better than a home loan Purchase?",
              a: "For buying a house, a home loan is more suitable due to higher amounts. Personal loans are ideal for non-specific personal needs."
            },
            {
              q: "Can I buy a house with two loans?",
              a: "No, availing two home loans for the same property is considered fraudulent and prevented by authorities."
            },
            {
              q: "Can we buy property on loan?",
              a: "Loan for land purchase is offered by banks when you need financing to buy a plot or a piece of land. This loan is generally provided for residential purposes and in urban areas. However, some banks do let you use the loan amount to purchase land in a rural area."
            },
            {
              q: "Can I switch from a fixed rate to a floating rate during my home loan tenure?",
              a: "Yes, you can switch from a fixed to floating rate of interest on your home loan during the repayment tenure. However, you will be charged a conversion fee by the lender in such cases."
            },
            {
              q: "What is the meaning of home loan purchase?",
              a: "A home loan is a secured loan that is obtained to purchase a property by offering it as collateral."
            }
          ].map((faq, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={index * 0.1}
            >
              <div className="faq-item">
                <h3>{faq.q}</h3>
                {typeof faq.a === 'string' ? <p>{faq.a}</p> : faq.a}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLoanPurchase;

