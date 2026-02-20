import React from "react";
import home from "../../../assets/images/home.jpg";
import { FiCreditCard } from "react-icons/fi";

import "./LoanAgainstProperty.css";

const LoanAgainstProperty = () => {
  return (
    <div className="lap-page">
      <div className="lap-card-grid">
        {[1, 2, 3].map((item, index) => (
          <div className="lap-card" key={index}>
            <div className="lap-image">
              <img src={home} alt="Loan Against Property" />
              <div className="lap-image-overlay"></div>
              <div className="lap-center-icon">
                <FiCreditCard className="lap-icon-only-rotate" />
              </div>
            </div>

            <div className="lap-content">
              <h2 className="lap-title">Loan Against Property</h2>

              <p className="lap-subtitle">
                Unlock the value of your property for any purpose
              </p>

              <ul className="lap-features">
                <li>High loan amount</li>
                <li>Flexible usage</li>
                <li>Long tenure</li>
              </ul>

              <div className="lap-buttons">
                <button className="lap-btn-outline">Learn More</button>
                <button className="lap-btn-solid">
                  Apply <span>→</span>
                </button>
              </div>
            </div>

            <div className="lap-strip"></div>
          </div>
        ))}
      </div>

      {/* Text Section */}
      <div className="loan-against-text-section">
        <h1 className="loan-against-title">Loan Against Property</h1>

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
      <div className="lap-highlights">
        <div className="lap-highlight-card">
          <div className="lap-highlight-icon">📄</div>
          <h3>Easy Loan Approvals</h3>
        </div>

        <div className="lap-highlight-card">
          <div className="lap-highlight-icon">💰</div>
          <h3>Lowest Possible Prices</h3>
        </div>

        <div className="lap-highlight-card">
          <div className="lap-highlight-icon">💼</div>
          <h3>Hassle free</h3>
        </div>

        <div className="lap-highlight-card">
          <div className="lap-highlight-icon">✅</div>
          <h3>Secure Loan Process</h3>
        </div>
      </div>
     
      <div className="lap-keyfeatures-section">
        <h2 className="lap-section-heading">
          Key Features of Nivara Loan Against Property
        </h2>

        <ul className="lap-keyfeatures-list">
          <li>Lower interest rates compared to other unsecured loans</li>
          <li>Higher loan amount based on property value</li>
          <li>Repayment tenure up to 20 years</li>
          <li>Completely transparent process with no hidden charges</li>
          <li>Doorstep service by our loan experts</li>
          <li>Wide network across rural, semi-urban, and urban areas</li>
          <li>Apply with minimal documents and save time and effort</li>
        </ul>
      </div>

    
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
    <div className="lap-support-grid">

    {/* Card 1 */}
     <section className="lap-support-section">
        <div className="lap-support-header">
          <h2>We are Here to Help You</h2>
          <p>Our mission is to deliver reliable, latest news and opinions.</p>
        </div> 
        <div className="lap-support-grid">
    <div className="lap-support-card">
      <div className="lap-support-icon">📄</div>
      <h3>APPLY FOR LOAN</h3>
      <p>
        Looking to buy a home loan? then apply for loan now.
      </p>
      <span className="lap-support-link">Get Appointment</span>
    </div>

    {/* Card 2 */}
    <div className="lap-support-card">
      <div className="lap-support-icon">📞</div>
      <h3>CALL US AT</h3>
      <h4 className="lap-support-phone">1800-309-1516</h4>
      <p className="lap-support-mail">contact@nivarahousing.com</p>
      <span className="lap-support-link">Contact Us</span>
    </div>

    {/* Card 3 */}
    <div className="lap-support-card">
      <div className="lap-support-icon">👥</div>
      <h3>TALK TO ADVISOR</h3>
      <h4 className="lap-support-phone">+91 80 26552822</h4>
      <p>Need to loan advise?</p>
      <span className="lap-support-link">Meet The Advisor</span>
    </div>
    </div>
    </section>

  </div>
  {/* FAQ Section */}
<div className="lap-faq-section">

  <h2 className="lap-faq-heading">
    Loan Against Property FAQs
  </h2>

  <div className="lap-faq-list">

    <div className="lap-faq-item">
      <h4>What is a Loan Against Property?</h4>
      <p>
        A loan against property (LAP) is a secured loan that banks, housing finance companies and NBFCs 
        provide against residential or commercial property. These loans typically have lower interest 
        rates compared to personal or business loans and are disbursed in a reasonable time. Anyone 
        with a pre-owned property can avail such loans, whether salaried or self-employed. The quantum 
        of loan sanctioned is also higher than other available options.
      </p>
    </div>

    <div className="lap-faq-item">
      <h4>Is loan against property a good idea?</h4>
      <p>
        Yes. LAP offers better benefits compared to personal loans. It provides greater flexibility, 
        lower interest rates, higher loan amounts, and longer repayment tenure. It is best suited for 
        business owners and self-employed professionals.
      </p>
    </div>

    <div className="lap-faq-item">
      <h4>Can I convert a loan against property to a home loan?</h4>
      <p>
        Yes, it is possible to convert a LAP (Loan Against Property) into a home loan. However, the 
        process and eligibility criteria vary depending on the lending institution and the original 
        loan terms.
      </p>
    </div>

    <div className="lap-faq-item">
      <h4>How does Loan Against Property work?</h4>
      <p>
        Loan Against Property is a secured loan where borrowers pledge their property as collateral 
        to avail funds. The loan amount is determined based on the property’s value and the borrower’s 
        repayment capacity.
      </p>
    </div>

    <div className="lap-faq-item">
      <h4>Who can avail Loan Against Property from Nivara Home Finance?</h4>
      <p>
        Any Resident Indian individual, partnership firm, or company can apply for a Loan Against 
        Property with Nivara Home Finance.
      </p>
    </div>

    <div className="lap-faq-item">
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
