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
import { Link } from "react-router-dom";
import logo from "../../assets/images/Nivara_logo.png"; // adjust path if needed

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
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
            {/* 
            <div>
              <h2>NIVARA</h2>
              <span>Housing Finance</span>
            </div> */}
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
          </ul>
        </div>

        <div className="footer-col contact">
          <h4>Contact Us</h4>

          <div className="contact-item">
            <span className="icon">
              <FaMapMarkerAlt />
            </span>
            <p>
              3rd Floor, BNR Complex, 25/101/3, opposite RBI Layout Main Road, Puttenahalli, JP Nagar 7th Phase, J. P. Nagar, Bengaluru, Karnataka 560078
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