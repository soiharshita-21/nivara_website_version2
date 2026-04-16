import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Nivara Logo" className="logo" width={150} />
        </Link>

        {/* Hamburger Icon */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          {/* HOME */}
          <li className="nav-item">
            <Link to="/" className="nav-link"><span>Home</span></Link>
          </li>

          {/* ABOUT US */}
          <li className={`nav-item dropdown ${activeDropdown === 0 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(0)}>
              <span>About Us</span>
              <ChevronDown size={16} className="chevron" />
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/aboutus/vision-mission">Vision & Mission</Link></li>
              <li><Link to="/aboutus/core-values">Objectives & Core Values</Link></li>
              <li><Link to="/aboutus/investors">Investors</Link></li>
              <li><Link to="/aboutus/board">Board of Directors</Link></li>
              <li><Link to="/aboutus/management">Management Team</Link></li>
              <li><Link to="/aboutus/privacy">Privacy</Link></li>
              <li><Link to="/aboutus/policy">Policy</Link></li>
            </ul>
          </li>

          {/* SERVICES */}
          <li className={`nav-item dropdown ${activeDropdown === 1 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(1)}>
              <span>Services</span>
              <ChevronDown size={16} className="chevron" />
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/services/home-loan">Home Loan for Purchase</Link></li>
              <li><Link to="/services/construction-loan">Construction Loan</Link></li>
              <li><Link to="/services/composite-loan">Composite Home Loan</Link></li>
              <li><Link to="/services/lap">Loan Against Property</Link></li>
              <li><Link to="/services/balance-transfer">Balance Transfer</Link></li>
              <li><Link to="/services/refinance-loan">Refinance Loan</Link></li>
              <li><Link to="/services/improvementandextension">Improvement & Extension Loan</Link></li>
            </ul>
          </li>

          {/* OUR PARTNERS */}
          <li className={`nav-item dropdown ${activeDropdown === 2 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(2)}>
              <span>Our Partners</span>
              <ChevronDown size={16} className="chevron" />
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/ourpartners/lenders/lenders">Lenders</Link></li>
              <li><Link to="/ourpartners/ourinsurancepartners/ourinsurancepartners">Our Insurance Partners</Link></li>
            </ul>
          </li>

          {/* INVESTOR RELATIONS */}
          <li className="nav-item">
            <Link to="/investorsrelation" className="nav-link"><span>Investor Relations</span></Link>
          </li>

          {/* MEDIA */}
          <li className={`nav-item dropdown ${activeDropdown === 3 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(3)}>
              <span>Media</span>
              <ChevronDown size={16} className="chevron" />
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/media/blog/blog">Blog</Link></li>
              <li><Link to="/media/pressrelease/pressrelease">Press Release</Link></li>
              <li><Link to="/media/nivara-gallery/nivara-gallery">Nivara Gallery</Link></li>
            </ul>
          </li>

          {/* CAREERS */}
          <li className="nav-item">
            <Link to="/career/career" className="nav-link"><span>Careers</span></Link>
          </li>

          {/* CUSTOMER CENTRE */}
          <li className={`nav-item dropdown ${activeDropdown === 4 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(4)}>
              <span>Customer Centre</span>
              <ChevronDown size={16} className="chevron" />
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/customercenter/e-nach">E-Nach Mandate</Link></li>
              <li><Link to="/customercenter/interest-rate">Interest Rate</Link></li>
              <li><Link to="/customercenter/quick-link">Quick Link</Link></li>
              <li><Link to="/customercenter/fair-practice-code">Fair Practice Code</Link></li>
              <li><Link to="/customercenter/publicdisclosure">Public Disclosure</Link></li>
              <li><Link to="/customercenter/corporategovernance">Corporate Governance</Link></li>
              <li><Link to="/customercenter/download">Download</Link></li>
              <li><Link to="/customercenter/calculator">Calculator</Link></li>
              <li><Link to="/customercenter/faqs">FAQs</Link></li>
            </ul>
          </li>

          {/* CONTACT US */}
          <li className={`nav-item dropdown ${activeDropdown === 5 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(5)}>
              <span>Contact Us</span>
              <ChevronDown size={16} className="chevron" />
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/contactus/branch/branch">Branch</Link></li>
              <li><Link to="/contactus/offices/offices">Offices</Link></li>
            </ul>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;

