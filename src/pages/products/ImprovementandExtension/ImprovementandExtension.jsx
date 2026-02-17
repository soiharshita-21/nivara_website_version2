import React from "react";
import { FaWrench } from "react-icons/fa";
import home from "../../../assets/images/home.jpg";
import "./ImprovementandExtension.css";

const ImprovmentandExtension = () => {
  const cards = [1, 2, 3];

  return (
    <section className="improv-section">
      <div className="improv-grid">
        {cards.map((item, index) => (
          <div className="improv-card" key={index}>
            <div className="improv-imagebox">
              <img src={home} alt="Improvement and Extension Loan" />

              {/* transparent color layer */}
              <div className="improv-overlay"></div>

              <div className="improv-icon">
                <FaWrench className="improv-rotate-icon" />
              </div>
            </div>

            <div className="improv-content">
              <h2>Improvement and Extension Loan</h2>

              <p className="improv-subtitle">
                Renovate or extend your existing home
              </p>

              <ul className="improv-features">
                <li>Quick approval</li>
                <li>Minimal documentation</li>
                <li>Attractive rates</li>
              </ul>

              <div className="improv-buttons">
                <button className="improv-btn-outline">Learn More</button>
                <button className="improv-btn-solid">Apply →</button>
              </div>
            </div>

            <div className="improv-bottom-strip"></div>
          </div>
        ))}
      </div>

      <div className="improv-text-section">
        <h1 className="improv-main-title">Improvement and Extension Loan</h1>

        <h2 className="improv-sub-heading">
          Build Your dream house with a Nivara Improvement and Extension Loan
        </h2>

        <h3 className="improv-highlight">
          Get the Best Improvement and Extension Loan with Nivara Home Finance
        </h3>

        <p className="improv-description">
          Now convert your house into a contemporary home with Home Improvement
          (Repair and Renovation) Loan from Nivara Home Finance. This loan helps
          you improve the present home into a pleasant environment to live with
          Easy approvals, competitive rates, easy process, and minimum paperwork
          and with or without income proof documents . Our relationship officers
          will guide you through the Home Loan application procedure. They also
          provide guidance regarding the selection of the right Home Loan mix to
          the calculation of suitable Home Loan EMI value and tenure. Apart from
          guiding you through the Home Loan application procedure, we also
          provide excellent post-disbursement services.
        </p>
      </div>

      <section className="improv-features-section">
        <div className="improv-features-grid">
          <div className="improv-feature-card">
            <div className="improv-feature-icon">📄</div>
            <h3>Easy Loan Approvals</h3>
          </div>

          <div className="improv-feature-card">
            <div className="improv-feature-icon">💰</div>
            <h3>Lowest Possible Prices</h3>
          </div>

          <div className="improv-feature-card">
            <div className="improv-feature-icon">💼</div>
            <h3>Hassle free</h3>
          </div>

          <div className="improv-feature-card">
            <div className="improv-feature-icon">✅</div>
            <h3>Secure Loan Process</h3>
          </div>
        </div>
      </section>
      <section className="improv-keyfeatures-section">
        <h2 className="improv-keyfeatures-title">
          Key Features of Improvement and Extension Loan
        </h2>

        <div className="improv-keyfeatures-content">
          <p>
            Loan is available for customers with minimum wage too and with other
            non-income proof documentation.
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

          <p>Home loan approval in simple steps with fast processing.</p>

          <p>Tailor-made home loans to suit your requirements.</p>

          <p>
            We maintain high levels of transparency in our relations with
            customers.
          </p>

          <p className="improv-contact-line">
            Connect with us on Chat, Social Media anytime, anywhere.
          </p>
        </div>
      </section>

      <section className="improv-quote-sec">
        <div className="improv-quote-con">
          <h2 className="improv-quote-ti">Request Quote Now</h2>
          <p className="improv-quote-subti">
            Easy to apply for a loan with us, Once you have complete this form.
          </p>

          <form className="improv-form">
            <div className="improv-form-grid">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="E-mail" />

              <input type="tel" placeholder="Contact Number" />
              <input type="text" placeholder="State" />

              <input type="text" placeholder="City" />
              <input type="date" placeholder="dd-mm-yyyy" />

              <input type="number" placeholder="Loan Amount" />

              <button type="submit" className="improv-quote-button">
                SEND A REQUEST
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="improv-support-section">
        <div className="improv-support-header">
          <h2>We are Here to Help You</h2>
          <p>Our mission is to deliver reliable, latest news and opinions.</p>
        </div>

        <div className="improv-support-grid">
          {/* Card 1 */}
          <div className="improv-support-card">
            <div className="improv-support-icon">📄</div>
            <h3>APPLY FOR LOAN</h3>
            <p>Looking to buy a home loan? then apply for loan now.</p>
            <span className="improv-support-link">Get Appointment</span>
          </div>

          {/* Card 2 */}
          <div className="improv-support-card">
            <div className="improv-support-icon">📞</div>
            <h3>CALL US AT</h3>
            <h4 className="improv-support-phone">1800-309-1516</h4>
            <p className="improv-support-mail">contact@nivarahousing.com</p>
            <span className="improv-support-link">Contact Us</span>
          </div>

          {/* Card 3 */}
          <div className="improv-support-card">
            <div className="improv-support-icon">👥</div>
            <h3>TALK TO ADVISOR</h3>
            <h4 className="improv-support-phone">+91 80 26552822</h4>
            <p>Need to loan advise?</p>
            <span className="improv-support-link">Meet The Advisor</span>
          </div>
        </div>
      </section>

      <section className="improv-faq-section">
        <h2 className="improv-faq-title">Frequently Asked Questions</h2>

        <div className="improv-faq-content">
          <div className="improv-faq-item">
            <h4>What is the Home Loan Extension / Home Loan Improvement?</h4>
            <p>
              It is a loan to extend or add living space to your home such as
              additional rooms, floors, and other structural extensions.
            </p>
          </div>

          <div className="improv-faq-item">
            <h4>Who can avail of an Extension Home Loan?</h4>
            <p>
              Any person who wishes to add space to their existing Apartment,
              Floor, or Row house can avail a Home Extension Loan from Nivara
              Home Finance. Existing home loan customers can also avail a Home
              Extension Loan.
            </p>
          </div>

          <div className="improv-faq-item">
            <h4>Can a Home Renovation loan fund the purchase of furniture?</h4>
            <p>
              No. A home improvement loan can only be used to fund the
              structural renovation of your home. It cannot be used to purchase
              movable objects such as furniture or electronic gadgets.
            </p>
          </div>

          <div className="improv-faq-item">
            <h4>What comes under home renovation?</h4>
            <p>
              You can use your house renovation loan for a variety of
              improvements such as renovations, repairs, flooring, extensions,
              and painting. In short, the loan can be utilized for overall
              development and improvement of your home.
            </p>
          </div>

          <div className="improv-faq-item">
            <h4>
              What are the documents required for a home loan extension from
              Nivara Home Finance?
            </h4>
            <p>The following documents are required:</p>
            <p>
              PAN Card (mandatory), Passport, Voter ID, Aadhar Card, Driving
              License, Construction Estimate, and Property Documents.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ImprovmentandExtension;
