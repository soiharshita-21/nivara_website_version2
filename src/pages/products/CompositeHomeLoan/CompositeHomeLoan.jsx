import React, { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import pol from "../../../assets/images/pol.jpg";
import "./CompositeHomeLoan.css";
import { useNavigate } from "react-router-dom";

const CompositeHomeLoan = () => {
   const navigate = useNavigate();
  const cards = [1]; // display only 1 card

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
    <section className="composite-section">
      <div className="composite-grid">
        {cards.map((item, index) => (
          <div className="composite-card animate-pop-up" key={index}>
            {/* Image */}
            <div className="composite-imagebox">
              <img src={pol} alt="Composite Home Loan" />

              {/* transparent color overlay */}
              <div className="composite-overlay"></div>

              <div className="composite-icon">
                <FaHome className="composite-rotate-icon" />
              </div>
            </div>

            {/* Content */}
            <div className="composite-content animate-pop-up">
              <h2 className="animate-pop-up">Composite Home Loan</h2>

              <p className="composite-subtitle">
                Combined loan for land purchase and construction
              </p>

              <div className="slide-in-text">
                <ul className="composite-features">
                  <li>Single application</li>
                  <li>End-to-end financing</li>
                  <li>Tax benefits</li>
                </ul>
              </div>

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
      <div className="composite-text-section animate-pop-up">
        <h1 className="composite-main-title animate-pop-up">Composite Home Loan</h1>

        <h2 className="composite-sub-heading animate-pop-up">
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
      {/* Features Strip Section */}
      <div className="com-feature-strip">
        <div className="com-feature-box animate-pop-up">
          <div className="com-feature-icon">📄</div>
          <h3 className="animate-pop-up">Easy Loan Approvals</h3>
        </div>

        <div className="com-feature-box animate-pop-up">
          <div className="com-feature-icon">💰</div>
          <h3 className="animate-pop-up">Lowest Possible Prices</h3>
        </div>

        <div className="com-feature-box animate-pop-up">
          <div className="com-feature-icon">💼</div>
          <h3 className="animate-pop-up">Hassle free</h3>
        </div>

        <div className="com-feature-box animate-pop-up">
          <div className="com-feature-icon">✅</div>
          <h3 className="animate-pop-up">Secure Loan Process</h3>
        </div>
      </div>
      {/* Features & Benefits Section */}
      <div className="com-benefits-section animate-pop-up">
        <h2 className="com-benefits-title animate-pop-up">
          Key Features of Composite Home Loan
        </h2>

        <div className="com-benefits-list">
          <div className="com-benefit-item animate-pop-up">
            A composite home loan covers both building and land expenditures.
          </div>

          <div className="com-benefit-item animate-pop-up">
            Our process is completely transparent and without any hidden
            charges.
          </div>

          <div className="com-benefit-item animate-pop-up">
            Our loan experts provide services right at your doorstep.
          </div>

          <div className="com-benefit-item animate-pop-up">
            We have a wide network and are available in rural, semi-urban, and
            urban areas.
          </div>

          <div className="com-benefit-item animate-pop-up">
            Apply with minimal documents, save time and effort.
          </div>

          <div className="com-benefit-item animate-pop-up">
            The composite loan limit is based on your loan repayment capacity.
          </div>

          <div className="com-benefit-item animate-pop-up">
            No prepayment fees if you go with a fluctuating interest rate.
          </div>

          <div className="com-benefit-item animate-pop-up">
            Immediate construction is usually a mandatory requirement within 1-2
            years.
          </div>

          <div className="com-benefit-item animate-pop-up">
            Connect with us on Chat, Social Media anytime, anywhere.
          </div>

          <div className="com-benefit-item animate-pop-up">
            Maintain high levels of transparency in our relations with
            customers.
          </div>
        </div>
      </div>

      <section className="com-quote-sec">
        <div className="com-quote-con animate-pop-up">
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
      {/* Help Section */}
      <div className="com-help-section animate-pop-up">
        <h2 className="com-help-title animate-pop-up">We are Here to Help You</h2>
        <p className="com-help-subtitle animate-pop-up">
          Our mission is to deliver reliable, latest news and opinions.
        </p>

        <div className="com-help-grid">
          {/* Card 1 */}
          <div className="com-help-card animate-pop-up">
            <div className="com-help-icon">🗓️</div>
            <h3 className="animate-pop-up">APPLY FOR LOAN</h3>
            <p>Looking to buy a home loan? then apply for loan now.</p>
            <span className="com-help-link">Get Appointment</span>
          </div>

          {/* Card 2 */}
          <div className="com-help-card animate-pop-up">
            <div className="com-help-icon">📞</div>
            <h3 className="animate-pop-up">CALL US AT</h3>
            <p className="com-help-green">1800-309-1516</p>
            <p className="com-help-green">contact@nivarahousing.com</p>
            <span className="com-help-link">Contact Us</span>
          </div>

          {/* Card 3 */}
          <div className="com-help-card animate-pop-up">
            <div className="com-help-icon">👥</div>
            <h3 className="animate-pop-up">TALK TO ADVISOR</h3>
            <p className="com-help-green">+91 80 26552822</p>
            <p>Need to loan advise?</p>
            <span className="com-help-link">Meet The Advisor</span>
          </div>
        </div>
      </div>
      {/* Composite Loan FAQ Section */}
      <section className="composite-faq-section animate-pop-up">
        <h2 className="composite-faq-title animate-pop-up">Composite Home Loan FAQs</h2>

        <div className="composite-faq-content animate-pop-up">
          <div className="composite-faq-item animate-pop-up">
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

          <div className="composite-faq-item animate-pop-up">
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

          <div className="composite-faq-item animate-pop-up">
            <h4>Can we claim a composite loan?</h4>
            <p>
              By completing your house construction within three years, you
              become eligible for tax benefits on your composite loan.
            </p>
          </div>

          <div className="composite-faq-item animate-pop-up">
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
