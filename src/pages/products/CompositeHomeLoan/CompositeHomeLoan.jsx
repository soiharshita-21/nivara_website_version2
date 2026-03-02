import React from "react";
import { FaHome } from "react-icons/fa";
import home5 from "../../../assets/images/home5.jpg";
import "./CompositeHomeLoan.css";
import { useNavigate } from "react-router-dom";

const CompositeHomeLoan = () => {
   const navigate = useNavigate();
  const cards = [1, 2, 3]; // repeat same card 3 times

  return (
    <section className="composite-section">
      <div className="composite-grid">
        {cards.map((item, index) => (
          <div className="composite-card" key={index}>
            {/* Image */}
            <div className="composite-imagebox">
              <img src={home5} alt="Composite Home Loan" />

              {/* transparent color overlay */}
              <div className="composite-overlay"></div>

              <div className="composite-icon">
                <FaHome className="composite-rotate-icon" />
              </div>
            </div>

            {/* Content */}
            <div className="composite-content">
              <h2>Composite Home Loan</h2>

              <p className="composite-subtitle">
                Combined loan for land purchase and construction
              </p>

              <ul className="composite-features">
                <li>Single application</li>
                <li>End-to-end financing</li>
                <li>Tax benefits</li>
              </ul>

              <div className="composite-buttons">
                <button className="composite-btn-outline">Learn More</button>
                 <button
                  className="comp-loan-btn-solid"
                  onClick={() => navigate("/apply-home-loan")}
                >
                  Apply →
                </button>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="composite-loan-bottom-strip"></div>
          </div>
        ))}
      </div>
      {/* After composite-grid */}
      <div className="composite-text-section">
        <h1 className="composite-main-title">Composite Home Loan</h1>

        <h2 className="composite-sub-heading">
          Build Your dream house with a Nivara Composite Home loan
        </h2>

        <h3 className="composite-highlight">
          Get the Best Composite Home Loan in Bangalore with Nivara Home Finance
        </h3>

        <p className="composite-description">
          The thought of building your own home can be exciting. You can plan
          and design the home just the way you want to suit your preference,
          needs and taste in aesthetics. After all, you would want your home to
          reflect your personality. And, if you’re going to buy land to
          construct your home, applying for a composite loan can help you get
          the desired funds and accomplish your dream of being a homeowner.
        </p>
      </div>

      {/* Composite Features Section */}
      <section className="composite-features-section">
        <div className="composite-features-grid">
          <div className="composite-feature-card">
            <div className="composite-feature-icon">📄</div>
            <h3>Easy Loan Approvals</h3>
          </div>

          <div className="composite-feature-card">
            <div className="composite-feature-icon">💰</div>
            <h3>Lowest Possible Prices</h3>
          </div>

          <div className="composite-feature-card">
            <div className="composite-feature-icon">💼</div>
            <h3>Hassle free</h3>
          </div>

          <div className="composite-feature-card">
            <div className="composite-feature-icon">✅</div>
            <h3>Secure Loan Process</h3>
          </div>
        </div>
      </section>
      {/* Composite Key Features Section */}
      <section className="composite-keyfeatures-section">
        <h2 className="composite-keyfeatures-title">
          Key Features of Composite Home Loan
        </h2>

        <div className="composite-keyfeatures-content">
          <p>
            A composite home loan differs from a land loan in that it covers
            both building and land expenditures. If you plan to start
            construction immediately, you should opt for a composite loan, but
            if you plan to construct later, a land loan might be a better
            option.
          </p>

          <p>
            Our process is completely transparent and without any hidden
            charges.
          </p>

          <p>Our loan experts provide services right at your doorstep.</p>

          <p>
            We have a wide network and are available in rural, semi-urban, and
            urban areas across locations.
          </p>

          <p>Apply with minimal documents, save time and effort.</p>

          <p>
            The composite loan limit is based on your loan repayment capacity.
          </p>

          <p>
            It’s possible that you’ll have to pay prepayment fees if you go with
            a fixed interest rate, but you may not have to do so if you go with
            a fluctuating interest rate on your composite loan. Prepayment fees
            may differ from one lender to the next.
          </p>

          <p>
            We maintain high levels of transparency in our relations with
            customers.
          </p>

          <p>
            To avail of a composite home loan, immediate construction is a
            mandatory requirement. Lenders usually want borrowers to start
            building within one to two years of getting a loan. If they don’t,
            they may have to pay higher interest rates or pay off the loan and
            close it.
          </p>

          <p className="composite-contact-line">
            Connect with us on Chat, Social Media anytime, anywhere.
          </p>
        </div>
      </section>

      <section className="com-quote-sec">
        <div className="com-quote-con">
          <h2 className="com-quote-ti">Request Quote Now</h2>
          <p className="com-quote-subti">
            Easy to apply for a loan with us, Once you have complete this form.
          </p>

          <form className="com-form">
            <div className="com-form-grid">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="E-mail" />

              <input type="tel" placeholder="Contact Number" />
              <input type="text" placeholder="State" />

              <input type="text" placeholder="City" />
              <input type="date" placeholder="dd-mm-yyyy" />

              <input type="number" placeholder="Loan Amount" />

              <button type="submit" className="com-quote-button">
                SEND A REQUEST
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="com-support-section">
        <div className="com-support-header">
          <h2>We are Here to Help You</h2>
          <p>Our mission is to deliver reliable, latest news and opinions.</p>
        </div>

        <div className="com-support-grid">
          {/* Card 1 */}
          <div className="com-support-card">
            <div className="com-support-icon">📄</div>
            <h3>APPLY FOR LOAN</h3>
            <p>Looking to buy a home loan? then apply for loan now.</p>
            <span className="com-support-link">Get Appointment</span>
          </div>

          {/* Card 2 */}
          <div className="com-support-card">
            <div className="com-support-icon">📞</div>
            <h3>CALL US AT</h3>
            <h4 className="com-support-phone">1800-309-1516</h4>
            <p className="com-support-mail">contact@nivarahousing.com</p>
            <span className="com-support-link">Contact Us</span>
          </div>

          {/* Card 3 */}
          <div className="com-support-card">
            <div className="com-support-icon">👥</div>
            <h3>TALK TO ADVISOR</h3>
            <h4 className="com-support-phone">+91 80 26552822</h4>
            <p>Need to loan advise?</p>
            <span className="com-support-link">Meet The Advisor</span>
          </div>
        </div>
      </section>
      {/* Composite Loan FAQ Section */}
      <section className="composite-faq-section">
        <h2 className="composite-faq-title">Composite Home Loan FAQs</h2>

        <div className="composite-faq-content">
          <div className="composite-faq-item">
            <h4>What is a composite loan?</h4>
            <p>
              Composite loan is a loan extended by banks and financial
              institutions for the purpose of purchasing a plot or land and
              constructing a house on it within a given timeline. It’s a
              combination of a plot loan and a construction loan. In this type
              of loan, the cost of both land or plot and construction of the
              house is covered.
            </p>
          </div>

          <div className="composite-faq-item">
            <h4>
              What is a composite home loan scheme in Nivara Home Finance?
            </h4>
            <p>
              A composite home loan scheme is a similar housing loan that
              includes all components of home development, such as land purchase
              and construction costs. This loan is different from regular home
              loans because it lets you buy land and build a house within a
              certain amount of time.
            </p>
          </div>

          <div className="composite-faq-item">
            <h4>Can we claim a composite loan?</h4>
            <p>
              By completing your house construction within three years, you
              become eligible for tax benefits on your composite loan.
            </p>
          </div>

          <div className="composite-faq-item">
            <h4>What are the benefits of a composite loan?</h4>
            <p>
              The composite loan tax benefits include combining land and
              construction costs and tax incentives.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CompositeHomeLoan;
