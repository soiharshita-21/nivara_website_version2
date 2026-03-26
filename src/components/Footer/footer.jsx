import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-pattern"></div>

      <div className="footer-container">
        <div className="footer-col brand">
          <div className="brand-logo">
            <div className="logo-circle">N</div>
            <div>
              <h2>NIVARA</h2>
              <span>Housing Finance</span>
            </div>
          </div>

          <p className="brand-desc">
            Empowering dreams of homeownership with affordable and accessible
            financing solutions.
          </p>

          <div className="socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Home Loan for Purchase</li>
            <li>Loan for Construction</li>
            <li>Composite Home Loan</li>
            <li>Loan Against Property</li>
            <li>Balance Transfer</li>
            <li>Refinance Loan</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Vision & Mission</li>
            <li>Board of Directors</li>
            <li>Management Team</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Customer Centre</h4>
          <ul>
            <li>Interest Rate</li>
            <li>EMI Calculator</li>
            <li>FAQs</li>
            <li>Fair Practice Code</li>
            <li>Public Disclosure</li>
            <li>Download Forms</li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h4>Contact Us</h4>

          <div className="contact-item">
            <span className="icon">
              <FaMapMarkerAlt />
            </span>
            <p>
              Nivara Head Office,
              <br />
              MG Road, Kochi,
              <br />
              Kerala - 682016
            </p>
          </div>

          <div className="contact-item">
            <span className="icon">
              <FaPhoneAlt />
            </span>
            <p>1800-XXX-XXXX</p>
          </div>

          <div className="contact-item">
            <span className="icon">
              <FaEnvelope />
            </span>
            <p>info@nivara.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>KYC & AML</span>
          <span>Loan Process</span>
          <span>Grievance Redressal</span>
        </div>

        <p>© 2026 Nivara Housing Finance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
