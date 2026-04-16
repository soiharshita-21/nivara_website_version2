import React, { useEffect } from "react";
import { FiHome } from "react-icons/fi";
import rev from "../../../assets/images/Renovation.jpg";
import "./ImprovementandExtension.css";
import { useNavigate } from "react-router-dom";

const ImprovmentandExtension = () => {
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
    <section className="improv-section">
      <div className="improv-grid">
        {cards.map((item, index) => (
          <div className="improv-card animate-pop-up" key={index}>
            <div className="improv-imagebox">
              <img src={rev} alt="Improvement and Extension Loan" />

              {/* transparent color layer */}
              <div className="improv-overlay"></div>

              <div className="improv-icon">
                <FiHome className="improv-rotate-icon" />
              </div>
            </div>

            <div className="improv-content animate-pop-up">
              <h2 className="animate-pop-up">Improvement and Extension Loan</h2>

              <p className="improv-subtitle">
                Renovate or extend your existing home
              </p>

              <div className="slide-in-text">
                <ul className="improv-features">
                  <li>Quick approval</li>
                  <li>Minimal documentation</li>
                  <li>Attractive rates</li>
                </ul>
              </div>

              <div className="improv-buttons">
                <button className="improv-btn-outline">Learn More</button>
                <button
                  className="improv-loan-btn-solid"
                  onClick={() => navigate("/apply-home-loan")}
                >
                  Apply →
                </button>
              </div>
            </div>

            <div className="improv-bottom-strip"></div>
          </div>
        ))}
      </div>

      <div className="improv-text-section animate-pop-up">
        <h1 className="improv-main-title animate-pop-up">Improvement and Extension Loan</h1>

        <h2 className="improv-sub-heading animate-pop-up">
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

      {/* Features Strip Section */}
      <div className="improv-feature-strip">
        <div className="improv-feature-box animate-pop-up">
          <div className="improv-feature-icon">📄</div>
          <h3 className="animate-pop-up">Easy Loan Approvals</h3>
        </div>

        <div className="improv-feature-box animate-pop-up">
          <div className="improv-feature-icon">💰</div>
          <h3 className="animate-pop-up">Lowest Possible Prices</h3>
        </div>

        <div className="improv-feature-box animate-pop-up">
          <div className="improv-feature-icon">💼</div>
          <h3 className="animate-pop-up">Hassle free</h3>
        </div>

        <div className="improv-feature-box animate-pop-up">
          <div className="improv-feature-icon">✅</div>
          <h3 className="animate-pop-up">Secure Loan Process</h3>
        </div>
      </div>
      {/* Features & Benefits Section */}
      <div className="improv-benefits-section animate-pop-up">
        <h2 className="improv-benefits-title animate-pop-up">
          Key Features of Improvement and Extension Loan
        </h2>

        <div className="improv-benefits-list">
          <div className="improv-benefit-item animate-pop-up">
            Loan is available for customers with minimum wage too and with other
            non-income proof documentation.
          </div>

          <div className="improv-benefit-item animate-pop-up">
            Our process is completely transparent and without any hidden
            charges.
          </div>

          <div className="improv-benefit-item animate-pop-up">
            Our loan experts provide services right at your doorstep.
          </div>

          <div className="improv-benefit-item animate-pop-up">
            We have a wide network and are available in rural, semi-urban, and
            urban areas across locations.
          </div>

          <div className="improv-benefit-item animate-pop-up">
            Apply with minimal documents, save time and effort.
          </div>

          <div className="improv-benefit-item animate-pop-up">
            Home loan approval in simple steps with fast processing.
          </div>

          <div className="improv-benefit-item animate-pop-up">
            Tailor-made home loans to suit your requirements.
          </div>

          <div className="improv-benefit-item animate-pop-up">
            We maintain high levels of transparency in our relations with
            customers.
          </div>

          <div className="improv-benefit-item animate-pop-up">
            Connect with us on Chat, Social Media anytime, anywhere.
          </div>
        </div>
      </div>

      <section className="improv-quote-sec">
        <div className="improv-quote-con animate-pop-up">
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
      {/* Help Section */}
      <div className="improv-help-section animate-pop-up">
        <h2 className="improv-help-title animate-pop-up">We are Here to Help You</h2>
        <p className="improv-help-subtitle animate-pop-up">
          Our mission is to deliver reliable, latest news and opinions.
        </p>

        <div className="improv-help-grid">
          {/* Card 1 */}
          <div className="improv-help-card animate-pop-up">
            <div className="improv-help-icon">🗓️</div>
            <h3 className="animate-pop-up">APPLY FOR LOAN</h3>
            <p>Looking to buy a home loan? then apply for loan now.</p>
            <span className="improv-help-link">Get Appointment</span>
          </div>

          {/* Card 2 */}
          <div className="improv-help-card animate-pop-up">
            <div className="improv-help-icon">📞</div>
            <h3 className="animate-pop-up">CALL US AT</h3>
            <p className="improv-help-green">1800-309-1516</p>
            <p className="improv-help-green">contact@nivarahousing.com</p>
            <span className="improv-help-link">Contact Us</span>
          </div>

          {/* Card 3 */}
          <div className="improv-help-card animate-pop-up">
            <div className="improv-help-icon">👥</div>
            <h3 className="animate-pop-up">TALK TO ADVISOR</h3>
            <p className="improv-help-green">+91 80 26552822</p>
            <p>Need to loan advise?</p>
            <span className="improv-help-link">Meet The Advisor</span>
          </div>
        </div>
      </div>

      <section className="improv-faq-section animate-pop-up">
        <h2 className="improv-faq-title animate-pop-up">Frequently Asked Questions</h2>

        <div className="improv-faq-content animate-pop-up">
          <div className="improv-faq-item animate-pop-up">
            <h4>What is the Home Loan Extension / Home Loan Improvement?</h4>
            <p>
              It is a loan to extend or add living space to your home such as
              additional rooms, floors, and other structural extensions.
            </p>
          </div>

          <div className="improv-faq-item animate-pop-up">
            <h4>Who can avail of an Extension Home Loan?</h4>
            <p>
              Any person who wishes to add space to their existing Apartment,
              Floor, or Row house can avail a Home Extension Loan from Nivara
              Home Finance. Existing home loan customers can also avail a Home
              Extension Loan.
            </p>
          </div>

          <div className="improv-faq-item animate-pop-up">
            <h4>Can a Home Renovation loan fund the purchase of furniture?</h4>
            <p>
              No. A home improvement loan can only be used to fund the
              structural renovation of your home. It cannot be used to purchase
              movable objects such as furniture or electronic gadgets.
            </p>
          </div>

          <div className="improv-faq-item animate-pop-up">
            <h4>What comes under home renovation?</h4>
            <p>
              You can use your house renovation loan for a variety of
              improvements such as renovations, repairs, flooring, extensions,
              and painting. In short, the loan can be utilized for overall
              development and improvement of your home.
            </p>
          </div>

          <div className="improv-faq-item animate-pop-up">
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
