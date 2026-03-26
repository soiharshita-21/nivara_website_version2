import React, { useEffect } from "react";
import { FaSyncAlt } from "react-icons/fa"; // balance transfer icon
import pol from "../../../assets/images/pol.jpg"; // you will replace this
import "./BalanceTransfer.css";
import { useNavigate } from "react-router-dom";

const BalanceTransfer = () => {
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
    <section className="balance-section">
      <div className="balance-grid">
        {cards.map((item, index) => (
          <div className="balance-card animate-pop-up" key={index}>
            <div className="balance-imagebox">
              <img src={pol} alt="Balance Transfer" />

              {/* Light pink overlay */}
              <div className="balance-image-overlay"></div>

              <div className="balance-iconbox">
                <FaSyncAlt className="balance-rotate-icon" />
              </div>
            </div>

            {/* Content */}
            <div className="balance-content animate-pop-up">
              <h2 className="balance-title animate-pop-up">Balance Transfer</h2>

              <p className="balance-subtitle">
                Transfer your existing loan for better rates and terms
              </p>

              <div className="slide-in-text">
                <ul className="balance-features">
                  <li>Lower interest rates</li>
                  <li>Top-up facility</li>
                  <li>Easy process</li>
                </ul>
              </div>

              <div className="balance-buttons">
                <button className="balance-btn-outline">Learn More</button>
                <button
                  className="balance-loan-btn-solid"
                  onClick={() => navigate("/apply-home-loan")}
                >
                  Apply →
                </button>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="balance-bottom-strip"></div>
          </div>
        ))}
      </div>
      <section className="balance-text-section animate-pop-up">
        <h2 className="balance-main-title animate-pop-up">Balance Transfer</h2>
        <p className="balance-tagline">We will lift your Loan Burden</p>

        <h3 className="balance-subheading">
          Home Loan Balance Transfer with Nivara Home Finance:
        </h3>

        <p className="balance-description">
          NIVARA Home Finance offers Balance Transfer Loans at attractive
          interest rates to lower your loan repayments. Move your Home Loan
          outstanding balances to NHFL, pay lower monthly installments and enjoy
          the savings for the other things in life that really matter to you and
          your family.
        </p>
      </section>

      {/* Features Strip Section */}
      <div className="balance-feature-strip">
        <div className="balance-feature-box animate-pop-up">
          <div className="balance-feature-icon">📄</div>
          <h3 className="animate-pop-up">Easy Loan Approvals</h3>
        </div>

        <div className="balance-feature-box animate-pop-up">
          <div className="balance-feature-icon">💰</div>
          <h3 className="animate-pop-up">Lowest Possible Prices</h3>
        </div>

        <div className="balance-feature-box animate-pop-up">
          <div className="balance-feature-icon">💼</div>
          <h3 className="animate-pop-up">Hassle free</h3>
        </div>

        <div className="balance-feature-box animate-pop-up">
          <div className="balance-feature-icon">✅</div>
          <h3 className="animate-pop-up">Secure Loan Process</h3>
        </div>
      </div>
      {/* Features & Benefits Section */}
      <div className="balance-benefits-section animate-pop-up">
        <h2 className="balance-benefits-title animate-pop-up">
          Key Features of Home Loan Balance Transfer
        </h2>

        <div className="balance-benefits-list">
          <div className="balance-benefit-item animate-pop-up">
            Loan is available for customers with minimum wage too and with other
            non-income proof documentation.
          </div>

          <div className="balance-benefit-item animate-pop-up">
            Our process is completely transparent and without any hidden
            charges.
          </div>

          <div className="balance-benefit-item animate-pop-up">
            Our loan experts will provide you services right at your doorstep.
          </div>

          <div className="balance-benefit-item animate-pop-up">
            We have a wide network and are available in rural, semi-urban, and
            urban areas across locations.
          </div>

          <div className="balance-benefit-item animate-pop-up">
            Apply with minimal documents, save time and effort.
          </div>

          <div className="balance-benefit-item animate-pop-up">
            Home loan approval in simple steps.
          </div>

          <div className="balance-benefit-item animate-pop-up">
            Tailor-made home loans to suit your requirements.
          </div>

          <div className="balance-benefit-item animate-pop-up">
            We maintain high levels of transparency in our relations with
            customers.
          </div>

          <div className="balance-benefit-item animate-pop-up">
            Connect with us on Chat, Social Media anytime, anywhere.
          </div>
        </div>
      </div>


      <section className="balance-quote-sec">
        <div className="balance-quote-con animate-pop-up">
          <h2 className="balance-quote-ti">Request Quote Now</h2>
          <p className="balance-quote-subti">
            Easy to apply for a loan with us, Once you have complete this form.
          </p>

          <form className="balance-form">
            <div className="balance-form-grid">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="E-mail" />

              <input type="tel" placeholder="Contact Number" />
              <input type="text" placeholder="State" />

              <input type="text" placeholder="City" />
              <input type="date" placeholder="dd-mm-yyyy" />

              <input type="number" placeholder="Loan Amount" />

              <button type="submit" className="balance-quote-button">
                SEND A REQUEST
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Help Section */}
      <div className="balance-help-section animate-pop-up">
        <h2 className="balance-help-title animate-pop-up">We are Here to Help You</h2>
        <p className="balance-help-subtitle animate-pop-up">
          Our mission is to deliver reliable, latest news and opinions.
        </p>

        <div className="balance-help-grid">
          {/* Card 1 */}
          <div className="balance-help-card animate-pop-up">
            <div className="balance-help-icon">🗓️</div>
            <h3 className="animate-pop-up">APPLY FOR LOAN</h3>
            <p>Looking to buy a home loan? then apply for loan now.</p>
            <span className="balance-help-link">Get Appointment</span>
          </div>

          {/* Card 2 */}
          <div className="balance-help-card animate-pop-up">
            <div className="balance-help-icon">📞</div>
            <h3 className="animate-pop-up">CALL US AT</h3>
            <p className="balance-help-green">1800-309-1516</p>
            <p className="balance-help-green">contact@nivarahousing.com</p>
            <span className="balance-help-link">Contact Us</span>
          </div>

          {/* Card 3 */}
          <div className="balance-help-card animate-pop-up">
            <div className="balance-help-icon">👥</div>
            <h3 className="animate-pop-up">TALK TO ADVISOR</h3>
            <p className="balance-help-green">+91 80 26552822</p>
            <p>Need to loan advise?</p>
            <span className="balance-help-link">Meet The Advisor</span>
          </div>
        </div>
      </div>
      <section className="balance-faq-section animate-pop-up">
        <h2 className="balance-faq-title animate-pop-up">
          Balance Transfer Home Loan – Frequently Asked Questions
        </h2>

        <div className="balance-faq-content animate-pop-up">
          <div className="balance-faq-item animate-pop-up">
            <h4>What is a balance transfer loan?</h4>
            <p>
              A loan balance transfer refers to the process of transferring your
              outstanding loans to a new lender.
            </p>
          </div>

          <div className="balance-faq-item animate-pop-up">
            <h4>Why should I think about refinancing my home loan balance?</h4>
            <p>
              Paying your home loan can sometimes get challenging with
              high-interest rates. Refinancing can offer you a way out. If you
              find a lender offering lower interest rates or better loan terms
              than your current lender, you can think about refinancing your
              home loan balance. Refinancing can help you reduce your monthly
              EMI (Equated Monthly Installment) payments, save on interest
              costs, and in some cases, shorten the loan term.
            </p>
          </div>

          <div className="balance-faq-item animate-pop-up">
            <h4>Is there a charge to transfer the rest of my home loan?</h4>
            <p>
              Yes, we charge a processing fee for the home loan balance transfer
              facility to TCHFL (Tata Capital Home Finance Limited). The fee can
              differ based on the home loan amount and other factors. You can
              find the exact charge in the MITC (Most Important Terms and
              Conditions) document that will be shared with you when you apply
              for refinancing to Nivara Home Finance Limited.
            </p>
          </div>

          <div className="balance-faq-item animate-pop-up">
            <h4>
              What are the documents required for a balance transfer loan?
            </h4>
            <p>
              Age Proof, Address Proof, KYC Documents, Home Loan Approval
              Letter, Interest certificates from the initial lender, and with or
              without income proof documents.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BalanceTransfer;
