import React from "react";
import { FaHome } from "react-icons/fa";
import home5 from "../../../assets/images/home5.jpg";
import "./RefinanceLoan.css";
import { useNavigate } from "react-router-dom";

const RefinanceLoan = () => {
  const navigate = useNavigate();
  const cards = [1, 2, 3];

  return (
    <section className="refinance-section">
      <div className="refinance-grid">
        {cards.map((item, index) => (
          <div className="refinance-card" key={index}>
            <div className="refinance-imagebox">
              <img src={home5} alt="Refinance Loan" />

              {/* transparent color overlay */}
              <div className="refinance-overlay"></div>

              <div className="refinance-icon">
                <FaHome className="refinance-rotate-icon" />
              </div>
            </div>

            <div className="refinance-content">
              <h2>Refinance Loan</h2>

              <p className="refinance-subtitle">
                Renovate or extend your existing home
              </p>

              <ul className="refinance-features">
                <li>Quick approval</li>
                <li>Minimal documentation</li>
                <li>Attractive rates</li>
              </ul>

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

      <div className="refinance-text-section">
        <h1 className="refinance-main-title">Refinance Loan</h1>

        <h2 className="refinance-sub-heading">
          Taking out a New Loan To Pay off an old onen
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

      <section className="refinance-features-section">
        <div className="refinance-features-grid">
          <div className="refinance-feature-card">
            <div className="refinance-feature-icon">📄</div>
            <h3>Easy Loan Approvals</h3>
          </div>

          <div className="refinance-feature-card">
            <div className="refinance-feature-icon">💰</div>
            <h3>Lowest Possible Prices</h3>
          </div>

          <div className="refinance-feature-card">
            <div className="refinance-feature-icon">💼</div>
            <h3>Hassle free</h3>
          </div>

          <div className="refinance-feature-card">
            <div className="refinance-feature-icon">✅</div>
            <h3>Secure Loan Process</h3>
          </div>
        </div>
      </section>
      <section className="refinance-keyfeatures-section">
        <h2 className="refinance-keyfeatures-title">
          Key Features of Refinance Loan
        </h2>

        <div className="refinance-keyfeatures-content">
          <p>
            One of the reasons why someone may look to refinance a home loan is
            to reduce the loan tenure. The basic advantage of reducing the loan
            tenure is that there are savings on interest costs.
          </p>

          <p>
            If you’re dissatisfied with your current lender’s customer service
            or terms, refinancing gives you the opportunity to switch to a more
            favorable lender. Not only does this move ensure better service but
            also helps maximize your savings.
          </p>

          <p>
            It enables you to access additional funds based on the equity you’ve
            built in your property. By refinancing with a top-up loan, you can
            address financial needs like home improvements, education expenses,
            or debt consolidation without the hassle of applying for a separate
            loan.
          </p>

          <p>
            We have a wide network and are available in rural, semi-urban, and
            urban areas across locations.
          </p>

          <p>Apply with minimal documents, save time and effort..</p>

          <p>
            Refinancing your home can also shorten the length of your loan,
            allowing you to pay down your debt and build up equity faster. There
            are many reasons you might want to pay off your home sooner. Perhaps
            you want to purchase a rental property or reduce your overall debt.
          </p>
        </div>
      </section>

      <section className="refinance-quote-sec">
        <div className="refinance-quote-con">
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
      <section className="refinance-support-section">
        <div className="refinance-support-header">
          <h2>We are Here to Help You</h2>
          <p>Our mission is to deliver reliable, latest news and opinions.</p>
        </div>

        <div className="refinance-support-grid">
          {/* Card 1 */}
          <div className="refinance-support-card">
            <div className="refinance-support-icon">📄</div>
            <h3>APPLY FOR LOAN</h3>
            <p>Looking to buy a home loan? then apply for loan now.</p>
            <span className="refinance-support-link">Get Appointment</span>
          </div>

          {/* Card 2 */}
          <div className="refinance-support-card">
            <div className="refinance-support-icon">📞</div>
            <h3>CALL US AT</h3>
            <h4 className="refinance-support-phone">1800-309-1516</h4>
            <p className="refinance-support-mail">contact@nivarahousing.com</p>
            <span className="refinance-support-link">Contact Us</span>
          </div>

          {/* Card 3 */}
          <div className="refinance-support-card">
            <div className="refinance-support-icon">👥</div>
            <h3>TALK TO ADVISOR</h3>
            <h4 className="refinance-support-phone">+91 80 26552822</h4>
            <p>Need to loan advise?</p>
            <span className="refinance-support-link">Meet The Advisor</span>
          </div>
        </div>
      </section>

      <section className="refinance-faq-section">
        <h2 className="refinance-faq-title">Frequently Asked Questions</h2>

        <div className="refinance-faq-content">
          <div className="refinance-faq-item">
            <h4>What is refinancing a home loan?</h4>
            <p>
              Refinancing your home loan is nothing but a home loan balance
              transfer. It simply means the option to switch to another lender
              who can give a lower home loan interest rate.
            </p>
          </div>

          <div className="refinance-faq-item">
            <h4>When can I refinance my house?</h4>
            <p>
              You can refinance your house when you believe it makes financial
              sense, typically when you can secure lower interest rates, better
              loan terms, or achieve other financial goals through the process.
            </p>
          </div>

          <div className="refinance-faq-item">
            <h4>What do the best home loan and refinancing deals offer?</h4>
            <p>
              ● Lower Interest Rates ● Reduced Monthly Payments ● Shorter Loan
              Terms ● Switching Loan Types
            </p>
          </div>

          <div className="refinance-faq-item">
            <h4>How many times can you refinance a Home loan?</h4>
            <p>
              There is no strict limit on how many times you can refinance a
              mortgage loan, but it’s essential to consider the associated costs
              and benefits for each refinancing
            </p>
          </div>
          <div className="refinance-faq-item">
            <h4>Is it beneficial to refinance a home loan?</h4>
            <p>
              Yes, refinancing a home loan can be highly beneficial. It offers
              the opportunity to secure lower interest rates, adjust loan terms,
              consolidate debts, access home equity, and enhance your overall
              financial situation
            </p>
          </div>

          <div className="refinance-faq-item">
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
