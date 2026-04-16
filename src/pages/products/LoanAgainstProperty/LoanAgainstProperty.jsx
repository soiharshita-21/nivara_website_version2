import React, { useEffect } from "react";
import lop from "../../../assets/images/LOP.jpg";
import { FiHome } from "react-icons/fi";

import "./LoanAgainstProperty.css";
import { useNavigate } from "react-router-dom";

const LoanAgainstProperty = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".animate-pop-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="lap-page">
      <div className="lap-card-grid animate-pop-up">
        {[1].map((item, index) => (
          <div className="lap-card animate-pop-up" key={index}>
            <div className="lap-image">
              <img src={lop} alt="Loan Against Property" />
              <div className="lap-image-overlay"></div>
              <div className="lap-center-icon">
                <FiHome className="lap-icon-only-rotate" />
              </div>
            </div>

            <div className="lap-content animate-pop-up">
              <h2 className="lap-title animate-pop-up">Loan Against Property</h2>

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

      {/* Text Section */}
      <div className="loan-against-text-section animate-pop-up">
        <h1 className="loan-against-title animate-pop-up">Loan Against Property</h1>

        <h3 className="loan-against-subtitle">
          Unlock the Potential of Your Property with Nivara Loan Against
          Property
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
      {/* Features Strip Section */}
      <div className="lap-feature-strip">
        <div className="lap-feature-box animate-pop-up">
          <div className="lap-feature-icon">📄</div>
          <h3 className="animate-pop-up">Easy Loan Approvals</h3>
        </div>

        <div className="lap-feature-box animate-pop-up">
          <div className="lap-feature-icon">💰</div>
          <h3 className="animate-pop-up">Lowest Possible Prices</h3>
        </div>

        <div className="lap-feature-box animate-pop-up">
          <div className="lap-feature-icon">💼</div>
          <h3 className="animate-pop-up">Hassle free</h3>
        </div>

        <div className="lap-feature-box animate-pop-up">
          <div className="lap-feature-icon">✅</div>
          <h3 className="animate-pop-up">Secure Loan Process</h3>
        </div>
      </div>

      {/* Features & Benefits Section */}
      <div className="lap-benefits-section animate-pop-up">
        <h2 className="lap-benefits-title animate-pop-up">
          Key Features of Nivara Loan Against Property
        </h2>

        <div className="lap-benefits-list">
          <div className="lap-benefit-item animate-pop-up">
            Lower interest rates compared to other unsecured loans
          </div>
          <div className="lap-benefit-item animate-pop-up">
            Higher loan amount based on property value
          </div>
          <div className="lap-benefit-item animate-pop-up">
            Repayment tenure up to 20 years
          </div>
          <div className="lap-benefit-item animate-pop-up">
            Completely transparent process with no hidden charges
          </div>
          <div className="lap-benefit-item animate-pop-up">
            Doorstep service by our loan experts
          </div>
          <div className="lap-benefit-item animate-pop-up">
            Wide network across rural, semi-urban, and urban areas
          </div>
          <div className="lap-benefit-item animate-pop-up">
            Apply with minimal documents and save time and effort
          </div>
        </div>
      </div>


      <section className="lap-quote-sec">
        <div className="lap-quote-con animate-pop-up">

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
      {/* Help Section */}
      <div className="lap-help-section animate-pop-up">
        <h2 className="lap-help-title animate-pop-up">We are Here to Help You</h2>
        <p className="lap-help-subtitle animate-pop-up">
          Our mission is to deliver reliable, latest news and opinions.
        </p>

        <div className="lap-help-grid">
          {/* Card 1 */}
          <div className="lap-help-card animate-pop-up">
            <div className="lap-help-icon">🗓️</div>
            <h3 className="animate-pop-up">APPLY FOR LOAN</h3>
            <p>Looking to buy a home loan? then apply for loan now.</p>
            <span className="lap-help-link">Get Appointment</span>
          </div>

          {/* Card 2 */}
          <div className="lap-help-card animate-pop-up">
            <div className="lap-help-icon">📞</div>
            <h3 className="animate-pop-up">CALL US AT</h3>
            <p className="lap-help-green">1800-309-1516</p>
            <p className="lap-help-green">contact@nivarahousing.com</p>
            <span className="lap-help-link">Contact Us</span>
          </div>

          {/* Card 3 */}
          <div className="lap-help-card animate-pop-up">
            <div className="lap-help-icon">👥</div>
            <h3 className="animate-pop-up">TALK TO ADVISOR</h3>
            <p className="lap-help-green">+91 80 26552822</p>
            <p>Need to loan advise?</p>
            <span className="lap-help-link">Meet The Advisor</span>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="lap-faq-section animate-pop-up">

        <h2 className="lap-faq-heading animate-pop-up">
          Loan Against Property FAQs
        </h2>

        <div className="lap-faq-list">

          <div className="lap-faq-item animate-pop-up">
            <h4>What is a Loan Against Property?</h4>
            <p>
              A loan against property (LAP) is a secured loan that banks, housing finance companies and NBFCs
              provide against residential or commercial property. These loans typically have lower interest
              rates compared to personal or business loans and are disbursed in a reasonable time. Anyone
              with a pre-owned property can avail such loans, whether salaried or self-employed. The quantum
              of loan sanctioned is also higher than other available options.
            </p>
          </div>

          <div className="lap-faq-item animate-pop-up">
            <h4>Is loan against property a good idea?</h4>
            <p>
              Yes. LAP offers better benefits compared to personal loans. It provides greater flexibility,
              lower interest rates, higher loan amounts, and longer repayment tenure. It is best suited for
              business owners and self-employed professionals.
            </p>
          </div>

          <div className="lap-faq-item animate-pop-up">
            <h4>Can I convert a loan against property to a home loan?</h4>
            <p>
              Yes, it is possible to convert a LAP (Loan Against Property) into a home loan. However, the
              process and eligibility criteria vary depending on the lending institution and the original
              loan terms.
            </p>
          </div>

          <div className="lap-faq-item animate-pop-up">
            <h4>How does Loan Against Property work?</h4>
            <p>
              Loan Against Property is a secured loan where borrowers pledge their property as collateral
              to avail funds. The loan amount is determined based on the property’s value and the borrower’s
              repayment capacity.
            </p>
          </div>

          <div className="lap-faq-item animate-pop-up">
            <h4>Who can avail Loan Against Property from Nivara Home Finance?</h4>
            <p>
              Any Resident Indian individual, partnership firm, or company can apply for a Loan Against
              Property with Nivara Home Finance.
            </p>
          </div>

          <div className="lap-faq-item animate-pop-up">
            <h4>What are the documents required to apply for Loan Against Property?</h4>
            <p>Along with the application form, the following documents are required:</p>
            <ul>
              <li>Proof of residence</li>
              <li>Proof of identity</li>
              <li>Latest financial documents</li>
              <li>Copies of all property documents</li>
            </ul>
          </div>

        </div>
      </div>



    </div>
  );
};

export default LoanAgainstProperty;
