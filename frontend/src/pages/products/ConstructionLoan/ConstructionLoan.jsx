import React from "react";
import con from "../../../assets/images/construction.jpg";
import { FiHome } from "react-icons/fi";
import { FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import "./ConstructionLoan.css";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

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
                <div className="image-overlay"></div>
                <div className="cen-icon">
                  <FiHome className="icon-rotatecon" />
                </div>
              </div>

              <div className="conloan-content">
                <h2>Construction Loan</h2>
                <p className="subtitle">
                  Build your home from the ground up with our construction loans
                </p>

                <div className="slide-in-text">
                  <ul className="features">
                    <li>Stage-wise disbursement</li>
                    <li>Flexible tenure</li>
                    <li>Low processing fee</li>
                  </ul>
                </div>

                <div className="con-loan-buttons">
                  <button className="con-loan-btn-outline">Learn More</button>
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

      <div className="clfaq-section">
        <ScrollReveal direction="up">
          <h2 className="clfaq-title">Your Frequently Asked Questions Answered</h2>
        </ScrollReveal>

        <div className="clfaq-list">
          {[
            {
              q: "What is a construction home loan?",
              a: "A home construction loan is an Nivara Home finance product, designed to help you construct your own home. If you have a plot of land and want to build a house to your own specifications, this product is ideal for you."
            },
            {
              q: "How do I get a Nivara home construction loan?",
              a: "Our application process is very easy. Fill out the form, and one of our relationship managers will get in touch with you to get all your details."
            },
            {
              q: "What documents are needed to apply for a home construction loan?",
              a: (
                <>
                  Age proof – Birth certificate, PAN card<br />
                  Income proof – Salary slips, bank statements<br />
                  A legal approval for construction from the Municipal Corporation<br />
                  Approved sanction plan from the authority<br />
                  Residence Proof – PAN Card, Passport, or any other certificate from statutory authority<br />
                  Processing fee cheque
                </>
              )
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
          ].map((faq, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={index * 0.1}
            >
              <div className="clfaq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstructionLoan;


