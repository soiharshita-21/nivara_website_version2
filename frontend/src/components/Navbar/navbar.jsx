import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dynamicPages, setDynamicPages] = useState([]);
  const location = useLocation();
  const navRef = useRef(null);

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
    if (!apiBaseUrl) {
      setDynamicPages([]);
      return;
    }

    let isMounted = true;

    fetch(`${apiBaseUrl}/api/pages`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const data = await res.json();
        if (isMounted && Array.isArray(data)) {
          setDynamicPages(data);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setDynamicPages([]);
        }
        console.warn("Dynamic pages unavailable:", err.message || err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  const handleMenuClick = (e) => {
    if (e.target.closest("a")) {
      setActiveDropdown(null);
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isOpen ? "menu-open" : ""}`} ref={navRef}>
      <div className="navbar-container">
        <Link to="/" className="nav_logo-link" onClick={handleLogoClick}>
          <img src={logo} alt="Nivara Logo" className="nav_logo"  />
        </Link>

        {/* Hamburger Icon */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`navbar-menu ${isOpen ? "active" : ""}`} onClick={handleMenuClick}>

          {/* ABOUT US */}
          <li className={`nav-item dropdown ${activeDropdown === 0 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(0)}>
              <span>About Us</span>
              <ChevronDown size={16} className="chevron" />
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/aboutus">About Nivara</Link></li>
              <li><Link to="/aboutus/leadership">Leadership</Link></li>
              <li><Link to="/aboutus/privacy">Privacy</Link></li>
              <li><Link to="/aboutus/csr-initiatives">CSR Initiatives</Link></li>
              <li><Link to="/ourpartners/lenders/lenders">Lenders</Link></li>
              <li><Link to="/ourpartners/ourinsurancepartners/ourinsurancepartners">Insurance Partners</Link></li>
              <li><Link to="/career/career">Careers</Link></li>
            </ul>
          </li>

          {/* LOAN PRODUCTS */}
          <li className={`nav-item dropdown ${activeDropdown === 1 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(1)}>
              <span>Loan Products</span>
              <ChevronDown size={16} className="chevron" />
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/services/construction-loan">Home Loan for Construction</Link></li>
              <li><Link to="/services/home-loan">Home Loan for Purchase</Link></li>
              <li><Link to="/services/composite-loan">Composite Home Loan</Link></li>
              <li><Link to="/services/improvementandextension">Improvement & Extension Loan</Link></li>
              <li><Link to="/services/lap">Loan Against Property</Link></li>
              <li><Link to="/services/refinance-loan">Refinance Loan</Link></li>
              <li><Link to="/services/balance-transfer">Balance Transfer</Link></li>
              {dynamicPages.filter(p => p.menu_location === "services").map(p => (
                <li key={p.id}><Link to={`/p/${p.slug}`}>{p.title}</Link></li>
              ))}
            </ul>
          </li>

          {/* CUSTOMER SERVICES */}
          <li className={`nav-item dropdown mega-dropdown ${activeDropdown === 2 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(2)}>
              <span>Customer Services</span>
              <ChevronDown size={16} className="chevron" />
            </div>
            <div className="dropdown-menu mega-menu">
              <div className="mega-menu-column">
                <h4>Mandates & Forms</h4>
                <ul>
                  <li><a href="https://nach.nivarahousing.com/auth/nach-mandate-login" target="_blank" rel="noopener noreferrer">E-NACH Mandate</a></li>
                  <li><Link to="/customercenter/ecs-mandate">ECS Mandate</Link></li>
                  <li><Link to="/customercenter/enach-bankcode">E-NACH Bank Code</Link></li>
                  <li><Link to="/customercenter/app-form">Application Form</Link></li>
                  <li><Link to="/customercenter/consumer-education">Consumer Education</Link></li>
                </ul>
              </div>
              <div className="mega-menu-column">
                <h4>Rates & Compliance</h4>
                <ul>
                  <li><Link to="/customercenter/interest-rate">Interest Rates</Link></li>
                  <li><Link to="/customercenter/risk-based-pricing">Risk Based Pricing</Link></li>
                  <li><Link to="/customercenter/mitc">MITC</Link></li>
                  <li><Link to="/customercenter/fair-practice-code">Fair Practice Code</Link></li>
                  <li><Link to="/customercenter/complaint">Grievance & Complaint</Link></li>
                </ul>
              </div>
              <div className="mega-menu-column">
                <h4>Support & Assets</h4>
                <ul>
                  <li><Link to="/customercenter/calculator">EMI Calculator</Link></li>
                  <li><Link to="/customercenter/faqs">FAQs</Link></li>
                  <li><Link to="/customercenter/auction-properties">Auction Properties</Link></li>
                  <li><Link to="/customercenter/recovery-agents">Recovery Agents</Link></li>
                  {dynamicPages.filter(p => p.menu_location === "customercenter").map(p => (
                    <li key={p.id}><Link to={`/p/${p.slug}`}>{p.title}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          {/* CORPORATE GOVERNANCE */}
          <li className="nav-item">
            <Link
              to="/customercenter/corporategovernance"
              className={`nav-link ${
                location.pathname.startsWith("/customercenter/corporategovernance") ||
                location.pathname.startsWith("/investorsrelation")
                  ? "active"
                  : ""
              }`}
            >
              <span>Corporate Governance</span>
            </Link>
          </li>

          {/* MEDIA */}
          <li className={`nav-item dropdown ${activeDropdown === 4 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(4)}>
              <span>Media</span>
              <ChevronDown size={16} className="chevron" />
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/media/blog/blog">Blog</Link></li>
              <li><Link to="/media/pressrelease/pressrelease">Press Releases</Link></li>
              <li><Link to="/media/nivara-gallery/nivara-gallery">Gallery</Link></li>
              {dynamicPages.filter(p => p.menu_location === "media").map(p => (
                <li key={p.id}><Link to={`/p/${p.slug}`}>{p.title}</Link></li>
              ))}
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
              <li><Link to="/contactus/offices/offices">Office</Link></li>
            </ul>
          </li>
        </ul>

      </div>

      {location.pathname === "/" && (
        <div className="hanging-banner-wrapper">
          <div className="thread thread-left"></div>
          <div className="thread thread-right"></div>
          <div className="hanging-rating-banner">
            <span>Credit Rating:</span>
            <strong>A-; Stable</strong>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
