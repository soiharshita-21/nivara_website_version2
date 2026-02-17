import React from "react";
import { FaSyncAlt } from "react-icons/fa"; // balance transfer icon
import home from "../../../assets/images/home.jpg"; // you will replace this
import "./BalanceTransfer.css";

const BalanceTransfer = () => {
  const cards = [1, 2, 3];

  return (
    <section className="balance-section">
      <div className="balance-grid">
        {cards.map((item, index) => (
          <div className="balance-card" key={index}>
            <div className="balance-imagebox">
              <img src={home} alt="Balance Transfer" />

              {/* Light pink overlay */}
              <div className="balance-image-overlay"></div>

              <div className="balance-iconbox">
                <FaSyncAlt className="balance-rotate-icon" />
              </div>
            </div>

            {/* Content */}
            <div className="balance-content">
              <h2 className="balance-title">Balance Transfer</h2>

              <p className="balance-subtitle">
                Transfer your existing loan for better rates and terms
              </p>

              <ul className="balance-features">
                <li>Lower interest rates</li>
                <li>Top-up facility</li>
                <li>Easy process</li>
              </ul>

              <div className="balance-buttons">
                <button className="balance-btn-outline">Learn More</button>
                <button className="balance-btn-solid">
                  Apply <span>→</span>
                </button>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="balance-bottom-strip"></div>
          </div>
        ))}
      </div>
      <section className="balance-text-section">
        <h2 className="balance-main-title">Balance Transfer</h2>
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

      <section className="balance-features-strip">
        <div className="balance-feature-box">
          <div className="balance-feature-icon">📄</div>
          <h3>Easy Loan Approvals</h3>
        </div>

        <div className="balance-feature-box">
          <div className="balance-feature-icon">💰</div>
          <h3>Lowest Possible Prices</h3>
        </div>

        <div className="balance-feature-box">
          <div className="balance-feature-icon">💼</div>
          <h3>Hassle free</h3>
        </div>

        <div className="balance-feature-box">
          <div className="balance-feature-icon">✅</div>
          <h3>Secure Loan Process</h3>
        </div>
      </section>
      <section className="balance-keyfeatures-section">

  <h2 className="balance-keyfeatures-title">
    Key Features of Home Loan Balance Transfer
  </h2>

  <div className="balance-keyfeatures-points">

    <p>Loan is available for customers with minimum wage too and with other non-income proof documentation.</p>

    <p>Our process is completely transparent and without any hidden charges.</p>

    <p>Our loan experts will provide you services right at your doorstep.</p>

    <p>We have a wide network and are available in rural, semi-urban, and urban areas across locations.</p>

    <p>Apply with minimal documents, save time and effort.</p>

    <p>Home loan approval in simple steps.</p>

    <p>Tailor-made home loans to suit your requirements.</p>

    <p>We maintain high levels of transparency in our relations with customers.</p>

    <p className="balance-contact-line">
      Connect with us on Chat, Social Media anytime, anywhere.
    </p>

  </div>

</section>


      <section className="balance-quote-sec">
        <div className="balance-quote-con">
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
      <section className="balance-support-section">
        <div className="balance-support-header">
          <h2>We are Here to Help You</h2>
          <p>Our mission is to deliver reliable, latest news and opinions.</p>
        </div>

        <div className="balance-support-grid">
          {/* Card 1 */}
          <div className="balance-support-card">
            <div className="balance-support-icon">📄</div>
            <h3>APPLY FOR LOAN</h3>
            <p>Looking to buy a home loan? then apply for loan now.</p>
            <span className="balance-support-link">Get Appointment</span>
          </div>

          {/* Card 2 */}
          <div className="balance-support-card">
            <div className="balance-support-icon">📞</div>
            <h3>CALL US AT</h3>
            <h4 className="balance-support-phone">1800-309-1516</h4>
            <p className="balance-support-mail">contact@nivarahousing.com</p>
            <span className="balance-support-link">Contact Us</span>
          </div>

          {/* Card 3 */}
          <div className="balance-support-card">
            <div className="balance-support-icon">👥</div>
            <h3>TALK TO ADVISOR</h3>
            <h4 className="balance-support-phone">+91 80 26552822</h4>
            <p>Need to loan advise?</p>
            <span className="balance-support-link">Meet The Advisor</span>
          </div>
        </div>
      </section>
      <section className="balance-faq-section">
        <h2 className="balance-faq-title">
          Balance Transfer Home Loan – Frequently Asked Questions
        </h2>

        <div className="balance-faq-content">
          <div className="balance-faq-item">
            <h4>What is a balance transfer loan?</h4>
            <p>
              A loan balance transfer refers to the process of transferring your
              outstanding loans to a new lender.
            </p>
          </div>

          <div className="balance-faq-item">
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

          <div className="balance-faq-item">
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

          <div className="balance-faq-item">
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
