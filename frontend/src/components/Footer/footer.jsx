import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Nivara_logo.png";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <ScrollReveal direction="up" distance={30}>
        <div className="footer-pattern"></div>

        <div className="footer-newsletter">
          <div className="newsletter-container">
            <h2 className="newsletter-title">Signup Our Newsletter</h2>
            <div className="newsletter-form">
              <input type="email" placeholder="Write E-Mail Address" />
              <button type="submit">GO!</button>
            </div>
          </div>
        </div>

        <div className="footer-container">
          <div className="footer-col brand">
            <div className="brand-logo">
              <img src={logo} alt="Nivara Logo" className="footer-logo" />
            </div>

            <p className="brand-desc">
              Empowering dreams of homeownership with affordable and accessible
              financing solutions.
            </p>

            <div className="socials">
              <a href="https://www.facebook.com/nivarahomefinance"><FaFacebookF /></a>
              <a href="https://twitter.com/nivarahomeloan"><FaTwitter /></a>
              <a href="https://www.linkedin.com/company/nivara-home-finance-ltd/"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/nivarahomefinance/"><FaInstagram /></a>
               <a href="https://www.linkedin.com/company/nivara-home-finance-ltd/"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/home-loan" onClick={handleLinkClick}>Home Loan for Purchase</Link></li>
              <li><Link to="/services/construction-loan" onClick={handleLinkClick}>Loan for Construction</Link></li>
              <li><Link to="/services/composite-loan" onClick={handleLinkClick}>Composite Home Loan</Link></li>
              <li><Link to="/services/lap" onClick={handleLinkClick}>Loan Against Property</Link></li>
              <li><Link to="/services/balance-transfer" onClick={handleLinkClick}>Balance Transfer</Link></li>
              <li><Link to="/services/refinance-loan" onClick={handleLinkClick}>Refinance Loan</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/aboutus" onClick={handleLinkClick}>About Us</Link></li>
              <li><Link to="/aboutus/vision-mission" onClick={handleLinkClick}>Vision & Mission</Link></li>
              <li><Link to="/aboutus/board" onClick={handleLinkClick}>Board of Directors</Link></li>
              <li><Link to="/aboutus/management" onClick={handleLinkClick}>Management Team</Link></li>
              <li><Link to="/career/career" onClick={handleLinkClick}>Career</Link></li>
              <li><Link to="/contactus/offices/offices" onClick={handleLinkClick}>Contact Us</Link></li>
              <li><Link to="/why-choose-us" onClick={handleLinkClick}>Why Choose Us</Link></li>
              
            </ul>
          </div>

          <div className="footer-col">
            <h4>Customer Centre</h4>
            <ul>
              <li><Link to="/customercenter/interest-rate" onClick={handleLinkClick}>Interest Rate</Link></li>
              <li><Link to="/customercenter/calculator" onClick={handleLinkClick}>EMI Calculator</Link></li>
              <li><Link to="/customercenter/faqs" onClick={handleLinkClick}>FAQs</Link></li>
              <li><Link to="/customercenter/fair-practice-code" onClick={handleLinkClick}>Fair Practice Code</Link></li>
              <li><Link to="/customercenter/publicdisclosure" onClick={handleLinkClick}>Public Disclosure</Link></li>
              <li><Link to="/customercenter/download" onClick={handleLinkClick}>Download Forms</Link></li>
              <li><Link to="/kyc-aml-measures" onClick={handleLinkClick}>KYC & AML Measures</Link></li>
              <li><Link to="/customercenter/recovery-agents" onClick={handleLinkClick}>Recovery Agents</Link></li>
              <li><Link to="/customercenter/mitc" onClick={handleLinkClick}>MITC</Link></li>
            </ul>
          </div>

          <div className="footer-col contact">
            <h4>Contact Us</h4>

            <div className="contact-item">
              <span className="icon"><FaMapMarkerAlt /></span>
              <p>3rd Floor, BNR Complex, 25/101/3, opposite RBI Layout Main Road, Puttenahalli, JP Nagar 7th Phase, J. P. Nagar, Bengaluru, Karnataka 560078</p>
            </div>

            <div className="contact-item">
              <span className="icon"><FaPhoneAlt /></span>
              <p>1800-309-1516</p>
            </div>

            <div className="contact-item">
              <span className="icon"><FaEnvelope /></span>
              <p>info@nivarahousing.com</p>
            </div>

            <div className="officers-item">
              <p>Grievance Officer: - Rajesh CA<br/>Phone: +91 80 26552822</p>
            </div>

            <div className="rating-item">
              <p>CIN: U65922KA2014PLC077547<br/>Credit Rating: A-; Stable</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Nivara Housing Finance. All rights reserved.</p>
        </div>
      </ScrollReveal>
    </footer>
  );
};
export default Footer;