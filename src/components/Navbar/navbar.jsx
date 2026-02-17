import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Company Logo" className="logo" width={150} />

      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* ABOUT US */}
        <li className="dropdown">
          <span>About Us ▾</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/aboutus/vision-mission">Vision & Mission</Link>
            </li>
            <li>
              <Link to="/aboutus/core-values">Objectives & Core Values</Link>
            </li>
             <li>
              <Link to="/aboutus/investors">Investors</Link>
            </li>
            <li>
              <Link to="/aboutus/board">Board of Directors</Link>
            </li>
            <li>
              <Link to="/aboutus/management">Management Team</Link>
            </li>
            <li>
              <Link to="/aboutus/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/aboutus/policy">Policy</Link>
            </li>
          </ul>
        </li>

        {/* PRODUCTS */}
        <li className="dropdown">
          <span>Products ▾</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/products/home-loan">Home Loan for Purchase</Link>
            </li>
            <li>
              <Link to="/products/construction-loan">Construction Loan</Link>
            </li>
            <li>
              <Link to="/products/composite-loan">Composite Home Loan</Link>
            </li>
            <li>
              <Link to="/products/lap">Loan Against Property</Link>
            </li>
            <li>
              <Link to="/products/balance-transfer">Balance Transfer</Link>
            </li>
            <li>
              <Link to="/products/refinance-loan">Refinance Loan</Link>
            </li>
             <li>
              <Link to="/products/improvementandextension">Improvement & Extension Loan</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/investorsrelation">InvestorsRelation</Link>
        </li>

        {/* CUSTOMER CENTER */}
        <li className="dropdown">
          <span>Customer Center ▾</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/customercenter/e-nach">E-Nach</Link>
            </li>
            <li>
              <Link to="/customercenter/interest-rate">Interest Rate</Link>
            </li>
            <li>
              <Link to="/customercenter/quick-link">Quick Link</Link>
            </li>
            <li>
              <Link to="/customercenter/fair-practice-code">
                Fair Practice Code
              </Link>
            </li>
            <li>
              <Link to="/customercenter/publicdisclosure">
                Public Disclosure
              </Link>
            </li>
            <li>
              <Link to="/customercenter/corporategovernance">
                Corporate Governance
              </Link>
            </li>
            <li>
              <Link to="/customercenter/download">Download</Link>
            </li>
            <li>
              <Link to="/customercenter/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/customercenter/faqs">FAQs</Link>
            </li>
          </ul>
        </li>

        {/* MEDIA */}
        <li className="dropdown">
          <span>Media ▾</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/media/blog">Blog</Link>
            </li>
            <li>
              <Link to="/media/press-release">Press Release</Link>
            </li>
            <li>
              <Link to="/media/nivara-gallery">Nivara Gallery</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/career">Career</Link>
        </li>

        {/* CONTACT */}
        <li className="dropdown">
          <span>Contact Us ▾</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/contactus/branch">Branch</Link>
            </li>
            <li>
              <Link to="/contactus/offices">Offices</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
