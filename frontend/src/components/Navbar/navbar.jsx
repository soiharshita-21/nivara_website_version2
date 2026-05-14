import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search, ArrowRight } from "lucide-react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";

const allPages = [
  { name: "Home", path: "/" },
  { name: "Vision & Mission", path: "/aboutus/vision-mission" },
  { name: "Core Values", path: "/aboutus/core-values" },
  { name: "Investors", path: "/aboutus/investors" },
  { name: "Board of Directors", path: "/aboutus/board" },
  { name: "Management Team", path: "/aboutus/management" },
  { name: "Home Loan for Purchase", path: "/services/home-loan" },
  { name: "Construction Loan", path: "/services/construction-loan" },
  { name: "Composite Home Loan", path: "/services/composite-loan" },
  { name: "Loan Against Property", path: "/services/lap" },
  { name: "Balance Transfer", path: "/services/balance-transfer" },
  { name: "Refinance Loan", path: "/services/refinance-loan" },
  { name: "Improvement & Extension Loan", path: "/services/improvementandextension" },
  { name: "Lenders", path: "/ourpartners/lenders/lenders" },
  { name: "Insurance Partners", path: "/ourpartners/ourinsurancepartners/ourinsurancepartners" },
  { name: "Investor Relations", path: "/investorsrelation" },
  { name: "Blog", path: "/media/blog/blog" },
  { name: "Press Release", path: "/media/pressrelease/pressrelease" },
  { name: "Gallery", path: "/media/nivara-gallery/nivara-gallery" },
  { name: "Careers", path: "/career/career" },
  { name: "E-Nach Mandate", path: "/customercenter/e-nach" },
  { name: "Interest Rate", path: "/customercenter/interest-rate" },
  { name: "Calculator", path: "/customercenter/calculator" },
  { name: "FAQs", path: "/customercenter/faqs" },
  { name: "Auction Properties", path: "/customercenter/auction-properties" },
  { name: "Recovery Agents", path: "/customercenter/recovery-agents" },
  { name: "Branch Locations", path: "/contactus/branch/branch" },
  { name: "Office Locations", path: "/contactus/offices/offices" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();

  // Close menu and search when location changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setShowSearch(false);
    setSearchQuery("");
  }, [location]);

  // Handle outside click for search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      const filtered = allPages.filter(page =>
        page.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [searchQuery]);

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

        {/* Search Bar */}
        <div className="search-group" ref={searchRef}>
          <div className={`search-wrapper ${showSearch ? "active" : ""}`}>
            <input
              type="text"
              placeholder="Search services, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSearch(true)}
            />
            <Search className="search-icon" size={20} />

            {showSearch && searchResults.length > 0 && (
              <ul className="search-results">
                {searchResults.map((result, index) => (
                  <li key={index}>
                    <Link to={result.path}>
                      <span>{result.name}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

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
              <li><Link to="/services/construction-loan">Loan For Home Under Construction</Link></li>
              <li><Link to="/services/home-loan">Home Loan For Purchase</Link></li>
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
              <li><Link to="/customercenter/auction-properties">Auction Properties</Link></li>
              <li><Link to="/customercenter/recovery-agents">Recovery Agents</Link></li>
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

      <div className="hanging-banner-wrapper">
        <div className="thread thread-left"></div>
        <div className="thread thread-right"></div>
        <div className="hanging-rating-banner">
          <span>Credit Rating:</span>
          <strong>A-; Stable</strong>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
