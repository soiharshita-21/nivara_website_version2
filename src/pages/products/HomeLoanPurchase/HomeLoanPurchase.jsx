import React from 'react';
import home from '../../../assets/images/home.jpg';
import { FiHome } from "react-icons/fi";
import './HomeLoanPurchase.css';

const HomeLoanPurchase = () => {
  return (
    <div className="page-center home-page">

  <div className="loan-card-grid">

    {[1, 2, 3].map((item, index) => (
      <div className="loan-card" key={index}>

        <div className="loan-image">
          <img src={home} alt="Home Loan" />
          <div className="image-overlay"></div>

          <div className="center-icon">
            <FiHome className="icon-rotate" />
          </div>
        </div>

        <div className="loan-content">
          <h2>Home Purchase Loan</h2>
          <p className="subtitle">
            Finance your dream home with flexible repayment options
          </p>

          <ul className="features">
            <li>Up to 90% financing</li>
            <li>Tenure up to 30 years</li>
            <li>Competitive rates</li>
          </ul>

          <div className="home-loan-buttons">
            <button className="home-loan-btn-outline">Learn More</button>
            <button className="home-loan-btn-solid">Apply →</button>
          </div>
        </div>

        <div className="home-loan-bottom-strip"></div>

      </div>
    ))}

  </div>
  <div className="home-loan-text-section">

  <h1 className="home-loan-title">
    Secure Your Dream Home with Nivara Home Finance – Top Home Purchase Loan Provider in Bangalore
  </h1>

  <p className="home-loan-text">
    Home purchase loans are given explicitly to borrowers looking to purchase a house or flat with 
    <strong> Nivara Home Finance</strong>. With speedy approvals, competitive rates, easy process, 
    with or without Income Proof Documents and minimum paperwork, we help bring you close to your dreams 
    of buying a new house in an easy and hassle-free manner. We offer purchase loans for flats, houses, 
    or bungalows from builders.
  </p>

  <p className="home-loan-text">
    Our relationship officers will guide you through the Home Loan application procedure. They will also 
    provide guidance regarding the selection of the right Home Loan mix to the calculation of suitable 
    Home Loan EMI value and tenure. Apart from guiding you through the Home Loan application procedure, 
    we also provide excellent post-disbursement services.
  </p>

</div>
{/* Features Strip Section */}
<div className="home-feature-strip">

  <div className="home-feature-box">
    <div className="home-feature-icon">📄</div>
    <h3>Easy Loan Approvals</h3>
  </div>

  <div className="home-feature-box">
    <div className="home-feature-icon">💰</div>
    <h3>Lowest Possible Prices</h3>
  </div>

  <div className="home-feature-box">
    <div className="home-feature-icon">💼</div>
    <h3>Hassle free</h3>
  </div>

  <div className="home-feature-box">
    <div className="home-feature-icon">✅</div>
    <h3>Secure Loan Process</h3>
  </div>

</div>
{/* Features & Benefits Section */}
<div className="benefits-section">

  <h2 className="benefits-title">
    Features and Benefits of Nivara Home Loan Purchase
  </h2>

  <div className="benefits-list">

    <div className="benefit-item">Loan is available for customers with minimum wage too and with other non-income proof documentation.</div>

    <div className="benefit-item">Our process is completely transparent and without any hidden charges.</div>

    <div className="benefit-item">Our Loan expert will provide you services right at your doorstep.</div>

    <div className="benefit-item">We have a wide network and are available in rural, semi-urban, and urban areas across locations.</div>

    <div className="benefit-item">Apply with minimal documents, save time and effort.</div>

    <div className="benefit-item">Home loan Approval in Simple steps.</div>

    <div className="benefit-item">Connect with us on Chat, Social Media anytime, anywhere.</div>

    <div className="benefit-item">Tailor-made home loans to suit your requirements.</div>

    <div className="benefit-item">We maintain high levels of transparency in our relations with customers.</div>

  </div>

</div>

{/* Help Section */}
<div className="help-section">

  <h2 className="help-title">We are Here to Help You</h2>
  <p className="help-subtitle">
    Our mission is to deliver reliable, latest news and opinions.
  </p>

  <div className="help-grid">

    {/* Card 1 */}
    <div className="help-card">
      <div className="help-icon">🗓️</div>
      <h3>APPLY FOR LOAN</h3>
      <p>Looking to buy a home loan? then apply for loan now.</p>
      <span className="help-link">Get Appointment</span>
    </div>

    {/* Card 2 */}
    <div className="help-card">
      <div className="help-icon">📞</div>
      <h3>CALL US AT</h3>
      <p className="help-green">1800-309-1516</p>
      <p className="help-green">contact@nivarahousing.com</p>
      <span className="help-link">Contact Us</span>
    </div>

    {/* Card 3 */}
    <div className="help-card">
      <div className="help-icon">👥</div>
      <h3>TALK TO ADVISOR</h3>
      <p className="help-green">+91 80 26552822</p>
      <p>Need to loan advise?</p>
      <span className="help-link">Meet The Advisor</span>
    </div>

  </div>
</div>
<section className="quote-section">
  <div className="quote-wrapper">

    <div className="quote-header">
      <h2 className="quote-title">Request Quote Now</h2>
      <p className="quote-subtitle">
        Easy to apply for a loan with us, Once you have complete this form.
      </p>
    </div>

    <form className="quote-form">
      <div className="quote-form-grid">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="E-mail" />

        <input type="text" placeholder="Contact Number" />
        <input type="text" placeholder="State" />

        <input type="text" placeholder="City" />
        <input type="date" />

        <input type="text" placeholder="Loan Amount" />
        <button type="submit" className="quote-btn">SEND A REQUEST</button>
      </div>
    </form>

  </div>
</section>


{/* FAQ Section */}
<div className="faq-section">

  <h2 className="faq-title">
    Home Loan Purchase: Your Frequently Asked Questions Answered
  </h2>

  <div className="faq-list">

    <div className="faq-item">
      <h3>What is the need of a Home Loan?</h3>
      <p>
        Customers can avail Home Loan for a variety of purposes that includes but not limited to:
      </p>
      <ul>
        <li>For the purpose of purchasing the Home/Flat.</li>
        <li>For the purpose of Renovation.</li>
        <li>For the purpose of Construction of Home.</li>
        <li>For the purpose of Balance transfer of running Home Loan to NHFL.</li>
      </ul>
    </div>

    <div className="faq-item">
      <h3>Is a personal loan better than a home loan Purchase?</h3>
      <p>
        For buying a house, a home loan is more suitable due to higher amounts. Personal loans are ideal for non-specific personal needs.
      </p>
    </div>

    <div className="faq-item">
      <h3>Can I buy a house with two loans?</h3>
      <p>
        No, availing two home loans for the same property is considered fraudulent and prevented by authorities.
      </p>
    </div>

    <div className="faq-item">
      <h3>Can we buy property on loan?</h3>
      <p>
        Loan for land purchase is offered by banks when you need financing to buy a plot or a piece of land. This loan is generally provided for residential purposes and in urban areas. However, some banks do let you use the loan amount to purchase land in a rural area.
      </p>
    </div>

    <div className="faq-item">
      <h3>Can I switch from a fixed rate to a floating rate during my home loan tenure?</h3>
      <p>
        Yes, you can switch from a fixed to floating rate of interest on your home loan during the repayment tenure. However, you will be charged a conversion fee by the lender in such cases.
      </p>
    </div>

    <div className="faq-item">
      <h3>What is the meaning of home loan purchase?</h3>
      <p>
        A home loan is a secured loan that is obtained to purchase a property by offering it as collateral.
      </p>
    </div>

  </div>

</div>




</div>

  );
};

export default HomeLoanPurchase;
