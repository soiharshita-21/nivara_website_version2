import React from "react";
import home5 from "../../../assets/images/home5.jpg";
import { FaHardHat } from "react-icons/fa";
import "./ConstructionLoan.css";
import { useNavigate } from "react-router-dom";

const ConstructionLoan = () => {
  const navigate = useNavigate();
  return (
   <div className="page-center construction-page">

  <div className="conloan-card-grid">

    {[1, 2, 3].map((item, index) => (
      <div className="conloan-card" key={index}>

        <div className="conloan-image">
          <img src={home5} alt="Construction Loan" />
          <div className="image-overlay"></div>

          <div className="cen-icon">
            <FaHardHat className="icon-rotate" />
          </div>
        </div>

        <div className="conloan-content">
          <h2>Construction Loan</h2>
          <p className="subtitle">
            Build your home from the ground up with our construction loans
          </p>

          <ul className="features">
            <li>Stage-wise disbursement</li>
            <li>Flexible tenure</li>
            <li>Low processing fee</li>
          </ul>

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
  {/* Construction Loan Text Section */}
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
    <strong> 9 years of expertise</strong> in Home construction loans and our customers have been able to 
    expedite their home construction at competitive interest rates on Home construction loans, 
    affordable EMIs and a hassle-free online application process.
  </p>

</div>
{/* Construction Feature Highlights */}
<div className="loan-highlights">

  <div className="highlight-card">
    <div className="highlight-icon">📄</div>
    <h3>Easy Loan Approvals</h3>
  </div>

  <div className="highlight-card">
    <div className="highlight-icon">💰</div>
    <h3>Lowest Possible Prices</h3>
  </div>

  <div className="highlight-card">
    <div className="highlight-icon">💼</div>
    <h3>Hassle free</h3>
  </div>

  <div className="highlight-card">
    <div className="highlight-icon">✅</div>
    <h3>Secure Loan Process</h3>
  </div>

</div>
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
{/* Benefits Section */}
<div className="construction-benefits-section">

  <h2 className="benefits-title">
    Benefits of a Home Construction Loan for Your Dream Home
  </h2>

  <div className="benefits-grid">

    <div className="benefit-item">Loan is available for customers with minimum wage too and with other non-income proof documentation.</div>

    <div className="benefit-item">Our process is completely transparent and without any hidden charges.</div>

    <div className="benefit-item">Our Loan expert will provide you services right at your doorstep.</div>

    <div className="benefit-item">We have a wide network and are available in rural, semi-urban, and urban areas across locations.</div>

    <div className="benefit-item">Apply with minimal documents, save time and effort.</div>

    <div className="benefit-item">Home loan Approval in Simple steps.</div>

    <div className="benefit-item">Get quick construction loan approval and disbursal with Nivara Home Finance. Say goodbye to delays and obstacles with our doorstep services.</div>

    <div className="benefit-item">Connect with us on Chat, Social Media anytime, anywhere.</div>

    <div className="benefit-item">Pay your EMIs or pre-payments using multiple repayment options.</div>

    <div className="benefit-item">Tailor your offer to match your budget, eligibility, and construction needs. Build your dream house with a generous loan and flexible 20+ year tenure.</div>

  </div>

</div>
{/* Support Section */}
<section className="support-section">

  <div className="support-header">
    <h2>We are Here to Help You</h2>
    <p>Our mission is to deliver reliable, latest news and opinions.</p>
  </div>

  <div className="support-grid">

    {/* Card 1 */}
    <div className="support-card">
      <div className="support-icon">📄</div>
      <h3>APPLY FOR LOAN</h3>
      <p>
        Looking to buy a home loan? then apply for loan now.
      </p>
      <span className="support-link">Get Appointment</span>
    </div>

    {/* Card 2 */}
    <div className="support-card">
      <div className="support-icon">📞</div>
      <h3>CALL US AT</h3>
      <h4 className="support-phone">1800-309-1516</h4>
      <p className="support-mail">contact@nivarahousing.com</p>
      <span className="support-link">Contact Us</span>
    </div>

    {/* Card 3 */}
    <div className="support-card">
      <div className="support-icon">👥</div>
      <h3>TALK TO ADVISOR</h3>
      <h4 className="support-phone">+91 80 26552822</h4>
      <p>Need to loan advise?</p>
      <span className="support-link">Meet The Advisor</span>
    </div>

  </div>

</section>
{/* Construction Loan FAQ Section */}
<section className="clfaq-section">

  <div className="clfaq-container">

    <h2 className="clfaq-title">Your Frequently Asked Questions Answered</h2>

    <div className="clfaq-list">

      <div className="clfaq-item">
        <h3>What is a construction home loan?</h3>
        <p>
          A home construction loan is an Nivara Home finance product, designed to help you construct your own home.
          If you have a plot of land and want to build a house to your own specifications, this product is ideal for you.
        </p>
      </div>

      <div className="clfaq-item">
        <h3>How do I get a Nivara home construction loan?</h3>
        <p>
          Our application process is very easy. Fill out the form, and one of our relationship managers will get in
          touch with you to get all your details.
        </p>
      </div>

      <div className="clfaq-item">
        <h3>What documents are needed to apply for a home construction loan?</h3>
        <p>
          Age proof – Birth certificate, PAN card<br/>
          Income proof – Salary slips, bank statements<br/>
          A legal approval for construction from the Municipal Corporation<br/>
          Approved sanction plan from the authority<br/>
          Residence Proof – PAN Card, Passport, or any other certificate from statutory authority<br/>
          Processing fee cheque
        </p>
      </div>

      <div className="clfaq-item">
        <h3>Can I get a home loan for house construction?</h3>
        <p>
          People can avail home loans to get their house constructed – either by themselves, or by employing a
          contractor to construct the house – on a plot that they own. Such loans are commonly termed construction loans.
        </p>
      </div>

      <div className="clfaq-item">
        <h3>How to get money for house construction?</h3>
        <p>
          Apply for a home construction loan according to your eligibility. The lender will determine your loan
          eligibility based on your income and repayment capacity.
        </p>
      </div>

      <div className="clfaq-item">
        <h3>How will my EMI for a home construction loan be calculated?</h3>
        <p>
          Your EMI is calculated based on the rate of interest charged to you at the time of application.
          We have two types of rates: fixed and floating, and this factors into the EMI amount you have to pay each month.
          To get an idea of what your EMI may look like, use our EMI calculator.
        </p>
      </div>

    </div>

  </div>

</section>




</div>

  );
};

export default ConstructionLoan;
