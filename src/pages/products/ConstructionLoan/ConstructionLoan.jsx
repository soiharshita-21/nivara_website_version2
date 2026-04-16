import React, { useEffect } from "react";
import con from "../../../assets/images/construction.jpg";
import { FiHome } from "react-icons/fi";
import "./ConstructionLoan.css";
import { useNavigate } from "react-router-dom";

const ConstructionLoan = () => {
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
    <div className="page-center construction-page">

      <div className="conloan-card-grid animate-pop-up">

        {[1].map((item, index) => (
          <div className="conloan-card animate-pop-up" key={index}>

            <div className="conloan-image">
              <img src={con} alt="Construction Loan" />
              <div className="image-overlay"></div>

              <div className="cen-icon">
                <FiHome className="icon-rotatecon" />
              </div>
            </div>

            <div className="conloan-content animate-pop-up">
              <h2 className="animate-pop-up">Construction Loan</h2>
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
      {/* Construction Loan Text Section */}
      <div className="construction-text-section animate-pop-up">

        <h1 className="construction-title animate-pop-up">
          Home Construction Loan
        </h1>

        <h3 className="construction-subtitle">
          Build the home of your dreams with the loan of your choice
        </h3>

        <h2 className="construction-heading animate-pop-up">
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
      {/* Features Strip Section */}
      <div className="conloan-feature-strip">
        <div className="conloan-feature-box animate-pop-up">
          <div className="conloan-feature-icon">📄</div>
          <h3 className="animate-pop-up">Easy Loan Approvals</h3>
        </div>

        <div className="conloan-feature-box animate-pop-up">
          <div className="conloan-feature-icon">💰</div>
          <h3 className="animate-pop-up">Lowest Possible Prices</h3>
        </div>

        <div className="conloan-feature-box animate-pop-up">
          <div className="conloan-feature-icon">💼</div>
          <h3 className="animate-pop-up">Hassle free</h3>
        </div>

        <div className="conloan-feature-box animate-pop-up">
          <div className="conloan-feature-icon">✅</div>
          <h3 className="animate-pop-up">Secure Loan Process</h3>
        </div>
      </div>
      <section className="quote-sec">
        <div className="quote-con animate-pop-up">

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
      {/* Features & Benefits Section */}
      <div className="conloan-benefits-section animate-pop-up">
        <h2 className="conloan-benefits-title animate-pop-up">
          Benefits of a Home Construction Loan for Your Dream Home
        </h2>

        <div className="conloan-benefits-list">
          <div className="conloan-benefit-item animate-pop-up">
            Loan is available for customers with minimum wage too and with other
            non-income proof documentation.
          </div>

          <div className="conloan-benefit-item animate-pop-up">
            Our process is completely transparent and without any hidden
            charges.
          </div>

          <div className="conloan-benefit-item animate-pop-up">
            Our Loan expert will provide you services right at your doorstep.
          </div>

          <div className="conloan-benefit-item animate-pop-up">
            We have a wide network and are available in rural, semi-urban, and
            urban areas across locations.
          </div>

          <div className="conloan-benefit-item animate-pop-up">
            Apply with minimal documents, save time and effort.
          </div>

          <div className="conloan-benefit-item animate-pop-up">
            Home loan Approval in Simple steps.
          </div>

          <div className="conloan-benefit-item animate-pop-up">
            Get quick construction loan approval and disbursal with Nivara Home
            Finance. Say goodbye to delays and obstacles with our doorstep
            services.
          </div>

          <div className="conloan-benefit-item animate-pop-up">
            Connect with us on Chat, Social Media anytime, anywhere.
          </div>

          <div className="conloan-benefit-item animate-pop-up">
            Pay your EMIs or pre-payments using multiple repayment options.
          </div>

          <div className="conloan-benefit-item animate-pop-up">
            Tailor your offer to match your budget, eligibility, and
            construction needs. Build your dream house with a generous loan and
            flexible 20+ year tenure.
          </div>
        </div>
      </div>
      {/* Help Section */}
      <div className="conloan-help-section animate-pop-up">
        <h2 className="conloan-help-title animate-pop-up">We are Here to Help You</h2>
        <p className="conloan-help-subtitle animate-pop-up">
          Our mission is to deliver reliable, latest news and opinions.
        </p>

        <div className="conloan-help-grid">
          {/* Card 1 */}
          <div className="conloan-help-card animate-pop-up">
            <div className="conloan-help-icon">🗓️</div>
            <h3 className="animate-pop-up">APPLY FOR LOAN</h3>
            <p>Looking to buy a home loan? then apply for loan now.</p>
            <span className="conloan-help-link">Get Appointment</span>
          </div>

          {/* Card 2 */}
          <div className="conloan-help-card animate-pop-up">
            <div className="conloan-help-icon">📞</div>
            <h3 className="animate-pop-up">CALL US AT</h3>
            <p className="conloan-help-green">1800-309-1516</p>
            <p className="conloan-help-green">contact@nivarahousing.com</p>
            <span className="conloan-help-link">Contact Us</span>
          </div>

          {/* Card 3 */}
          <div className="conloan-help-card animate-pop-up">
            <div className="conloan-help-icon">👥</div>
            <h3 className="animate-pop-up">TALK TO ADVISOR</h3>
            <p className="conloan-help-green">+91 80 26552822</p>
            <p>Need to loan advise?</p>
            <span className="conloan-help-link">Meet The Advisor</span>
          </div>
        </div>
      </div>
      {/* Construction Loan FAQ Section */}
      <section className="clfaq-section animate-pop-up">

        <div className="clfaq-container animate-pop-up">

          <h2 className="clfaq-title animate-pop-up">Your Frequently Asked Questions Answered</h2>

          <div className="clfaq-list">

            <div className="clfaq-item animate-pop-up">
              <h3 className="animate-pop-up">What is a construction home loan?</h3>
              <p>
                A home construction loan is an Nivara Home finance product, designed to help you construct your own home.
                If you have a plot of land and want to build a house to your own specifications, this product is ideal for you.
              </p>
            </div>

            <div className="clfaq-item animate-pop-up">
              <h3 className="animate-pop-up">How do I get a Nivara home construction loan?</h3>
              <p>
                Our application process is very easy. Fill out the form, and one of our relationship managers will get in
                touch with you to get all your details.
              </p>
            </div>

            <div className="clfaq-item animate-pop-up">
              <h3 className="animate-pop-up">What documents are needed to apply for a home construction loan?</h3>
              <p>
                Age proof – Birth certificate, PAN card<br />
                Income proof – Salary slips, bank statements<br />
                A legal approval for construction from the Municipal Corporation<br />
                Approved sanction plan from the authority<br />
                Residence Proof – PAN Card, Passport, or any other certificate from statutory authority<br />
                Processing fee cheque
              </p>
            </div>

            <div className="clfaq-item animate-pop-up">
              <h3 className="animate-pop-up">Can I get a home loan for house construction?</h3>
              <p>
                People can avail home loans to get their house constructed – either by themselves, or by employing a
                contractor to construct the house – on a plot that they own. Such loans are commonly termed construction loans.
              </p>
            </div>

            <div className="clfaq-item animate-pop-up">
              <h3 className="animate-pop-up">How to get money for house construction?</h3>
              <p>
                Apply for a home construction loan according to your eligibility. The lender will determine your loan
                eligibility based on your income and repayment capacity.
              </p>
            </div>

            <div className="clfaq-item animate-pop-up">
              <h3 className="animate-pop-up">How will my EMI for a home construction loan be calculated?</h3>
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
