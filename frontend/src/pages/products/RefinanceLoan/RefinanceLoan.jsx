import React, { useEffect } from "react";
import { FaHome, FaCheck, FaFileAlt, FaCoins, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import ref from "../../../assets/images/refinance.jpg";
import "./RefinanceLoan.css";
import { useNavigate } from "react-router-dom";

const RefinanceLoan = () => {
  const navigate = useNavigate();
  const cards = [1];

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
    <section className="refinance-section">
      <div className="refinance-grid">
        {cards.map((item, index) => (
          <div className="refinance-card animate-pop-up" key={index}>
            <div className="refinance-imagebox">
              <img src={ref} alt="Refinance Loan" />

              {/* transparent color overlay */}
              <div className="refinance-overlay"></div>

              <div className="refinance-icon">
                <FaHome className="refinance-rotate-icon" />
              </div>
            </div>

            <div className="refinance-content animate-pop-up">
              <h2 className="animate-pop-up">Refinance Loan</h2>

              <p className="refinance-subtitle">
                Renovate or extend your existing home
              </p>

              <div className="slide-in-text">
                <ul className="refinance-features">
                  <li>Quick approval</li>
                  <li>Minimal documentation</li>
                  <li>Attractive rates</li>
                </ul>
              </div>

              <div className="refinance-buttons">
                <button className="refinance-btn-outline">Learn More</button>
                <button
                  className="refinance-loan-btn-solid"
                  onClick={() => navigate("/apply-home-loan")}
                >
                  Apply →
                </button>
              </div>
            </div>

            <div className="refinance-bottom-strip"></div>
          </div>
        ))}
      </div>

      <div className="refinance-text-section animate-pop-up">
        <h1 className="refinance-main-title animate-pop-up">Refinance Loan</h1>

        <h2 className="refinance-sub-heading animate-pop-up">
          Taking out a New Loan To Pay off an old one
        </h2>

        <h3 className="refinance-highlight">
          Refinance Home Loan with Nivara Home Finance
        </h3>

        <p className="refinance-description">
          Refinancing your loan can help you save money and lower payments. Our
          team of specialists will help you find the best refinance loan
          solution. Get started today with our free rate quote calculator and
          discover how much you could save.refinancing a home loan is an
          excellent way to reduce home loan liabilities. You may also think
          about refinancing your loan if a lender offers lower interest rates or
          better terms.
        </p>
      </div>

      {/* Features Strip Section */}
      <div className="refinance-feature-strip">
        <div className="refinance-feature-box animate-pop-up">
          <div className="refinance-feature-icon"><FaFileAlt /></div>
          <h3 className="animate-pop-up">Easy Loan Approvals</h3>
        </div>

        <div className="refinance-feature-box animate-pop-up">
          <div className="refinance-feature-icon"><FaCoins /></div>
          <h3 className="animate-pop-up">Lowest Possible Prices</h3>
        </div>

        <div className="refinance-feature-box animate-pop-up">
          <div className="refinance-feature-icon"><FaBriefcase /></div>
          <h3 className="animate-pop-up">Hassle free</h3>
        </div>

        <div className="refinance-feature-box animate-pop-up">
          <div className="refinance-circle-check-icon">
            <FaCheck />
          </div>
          <h3 className="animate-pop-up">Secure Loan Process</h3>
        </div>
      </div>
      {/* Features & Benefits Section */}
      <div className="refinance-benefits-section animate-pop-up">
        <h2 className="refinance-benefits-title animate-pop-up">
          Key Features of Refinance Loan
        </h2>

        <div className="refinance-benefits-list">
          {[
            "Easy Loan Approvals",
            "Lowest Possible Prices",
            "Hassle free",
            "Secure Loan Process",
            "Loan Tenure Change",
            "Switching Lenders",
            "Top-up Facility",
            "Easily available in rural India",
            "Easy documentation",
            "Pay Off Your Home Loan Sooner",
            "Switch from a Floating Interest Rate to a Fixed Interest Rate",
            "Lower Your Interest Rate",
            "Lower Your Monthly Payment"
          ].map((benefit, index) => (
            <div key={index} className="refinance-benefit-item animate-pop-up">
              {benefit}
            </div>
          ))}
        </div>
      </div>

      <section className="refinance-quote-sec">
        <div className="refinance-quote-con animate-pop-up">
          <h2 className="refinance-quote-ti">Request Quote Now</h2>
          <p className="refinance-quote-subti">
            Easy to apply for a loan with us, Once you have complete this form.
          </p>

          <form className="refinance-form">
            <div className="refinance-form-grid">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="E-mail" />

              <input type="tel" placeholder="Contact Number" />
              <input type="text" placeholder="State" />

              <input type="text" placeholder="City" />
              <input type="date" placeholder="dd-mm-yyyy" />

              <input type="number" placeholder="Loan Amount" />

              <button type="submit" className="refinance-quote-button">
                SEND A REQUEST
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Help Section */}
      <div className="refinance-help-section animate-pop-up">
        <h2 className="refinance-help-title animate-pop-up">We are Here to Help You</h2>
        <p className="refinance-help-subtitle animate-pop-up">
          Our mission is to deliver reliable, latest news and opinions.
        </p>

        <div className="refinance-help-grid">
          {/* Card 1 */}
          <div className="refinance-help-card animate-pop-up">
            <div className="refinance-help-icon"><FaCalendarAlt /></div>
            <h3 className="animate-pop-up">APPLY FOR LOAN</h3>
            <p>Looking to buy a home loan? then apply for loan now.</p>
            <span className="refinance-help-link">Get Appointment</span>
          </div>

          {/* Card 2 */}
          <div className="refinance-help-card animate-pop-up">
            <div className="refinance-help-icon"><FaPhoneAlt /></div>
            <h3 className="animate-pop-up">CALL US AT</h3>
            <p className="refinance-help-green">1800-309-1516</p>
            <p className="refinance-help-green">contact@nivarahousing.com</p>
            <span className="refinance-help-link">Contact Us</span>
          </div>

          {/* Card 3 */}
          <div className="refinance-help-card animate-pop-up">
            <div className="refinance-help-icon"><FaUserTie /></div>
            <h3 className="animate-pop-up">TALK TO ADVISOR</h3>
            <p className="refinance-help-green">+91 80 26552822</p>
            <p>Need to loan advise?</p>
            <span className="refinance-help-link">Meet The Advisor</span>
          </div>
        </div>
      </div>

      <section className="refinance-faq-section animate-pop-up">
        <h2 className="refinance-faq-title animate-pop-up">Frequently Asked Questions</h2>

        <div className="refinance-faq-content animate-pop-up">
          <div className="refinance-faq-item animate-pop-up">
            <h4>What is refinancing a home loan?</h4>
            <p>
              Refinancing your home loan is nothing but a home loan balance
              transfer. It simply means the option to switch to another lender
              who can give a lower home loan interest rate.
            </p>
          </div>

          <div className="refinance-faq-item animate-pop-up">
            <h4>When can I refinance my house?</h4>
            <p>
              You can refinance your house when you believe it makes financial
              sense, typically when you can secure lower interest rates, better
              loan terms, or achieve other financial goals through the process.
            </p>
          </div>

          <div className="refinance-faq-item animate-pop-up">
            <h4>What do the best home loan and refinancing deals offer?</h4>
            <p>
              ● Lower Interest Rates ● Reduced Monthly Payments ● Shorter Loan
              Terms ● Switching Loan Types
            </p>
          </div>

          <div className="refinance-faq-item animate-pop-up">
            <h4>How many times can you refinance a Home loan?</h4>
            <p>
              There is no strict limit on how many times you can refinance a
              mortgage loan, but it’s essential to consider the associated costs
              and benefits for each refinancing
            </p>
          </div>
          <div className="refinance-faq-item animate-pop-up">
            <h4>Is it beneficial to refinance a home loan?</h4>
            <p>
              Yes, refinancing a home loan can be highly beneficial. It offers
              the opportunity to secure lower interest rates, adjust loan terms,
              consolidate debts, access home equity, and enhance your overall
              financial situation
            </p>
          </div>

          <div className="refinance-faq-item animate-pop-up">
            <h4>
              What is the correlation between home loan interest rates and
              refinancing?
            </h4>

            <p>
              The decision to refinance a home loan is heavily influenced by
              interest rates. When interest rates fall by even a modest amount,
              it can result in significant savings over the life of the loan.
              Keep an eye on the economy and interest rate forecasts. If rates
              are predicted to climb, you might wish to refinance sooner rather
              than later to secure favorable home loan refinancing rates.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RefinanceLoan;
