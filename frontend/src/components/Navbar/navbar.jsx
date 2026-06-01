import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Search, ArrowRight } from "lucide-react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";

const allPages = [
  { name: "Home", path: "/" },
  { name: "Vision & Mission", path: "/aboutus/vision-mission" },
  { name: "Core Values", path: "/aboutus/core-values" },
  { name: "Investors", path: "/aboutus/investors" },
  { name: "Board of Directors", path: "/aboutus/board" },
  { name: "Management Team", path: "/aboutus/management" },
  { name: "CSR Initiatives", path: "/aboutus/csr-initiatives" },
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
  { name: "E-Nach Mandate", path: "https://nach.nivarahousing.com/auth/nach-mandate-login" },
  { name: "Interest Rate", path: "/customercenter/interest-rate" },
  { name: "Calculator", path: "/customercenter/calculator" },
  { name: "FAQs", path: "/customercenter/faqs" },
  { name: "Auction Properties", path: "/customercenter/auction-properties" },
  { name: "Recovery Agents", path: "/customercenter/recovery-agents" },
  { name: "MITC", path: "/customercenter/mitc" },
  { name: "Branch Locations", path: "/contactus/branch/branch" },
  { name: "Office Locations", path: "/contactus/offices/offices" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);
  const [activeSubNestedDropdown, setActiveSubNestedDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [dynamicPages, setDynamicPages] = useState([]);
  const searchRef = useRef(null);
  const location = useLocation();

  // Close menu and search when location changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveNestedDropdown(null);
    setActiveSubNestedDropdown(null);
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
    fetch("http://localhost:5001/api/pages")
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) setDynamicPages(data);
      })
      .catch(err => console.error("Error fetching dynamic pages:", err));
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
    setActiveNestedDropdown(null); // Reset nested dropdown when main changes
    setActiveSubNestedDropdown(null);
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const toggleNestedDropdown = (index) => {
    setActiveSubNestedDropdown(null);
    if (activeNestedDropdown === index) {
      setActiveNestedDropdown(null);
    } else {
      setActiveNestedDropdown(index);
    }
  };

  const toggleSubNestedDropdown = (index) => {
    if (activeSubNestedDropdown === index) {
      setActiveSubNestedDropdown(null);
    } else {
      setActiveSubNestedDropdown(index);
    }
  };

  return (
    <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="nav_logo-link">
          <img src={logo} alt="Nivara Logo" className="nav_logo"  />
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
                    {result.path && result.path.startsWith("http") ? (
                      <a href={result.path} target="_blank" rel="noopener noreferrer">
                        <span>{result.name}</span>
                        <ArrowRight size={14} />
                      </a>
                    ) : (
                      <Link to={result.path}>
                        <span>{result.name}</span>
                        <ArrowRight size={14} />
                      </Link>
                    )}
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
              {/* About Nivara */}
              <li className={`nested-dropdown ${activeNestedDropdown === "about-nivara" ? "open" : ""}`}>
                <div className="nested-trigger" onClick={() => toggleNestedDropdown("about-nivara")}>
                  <span>About Nivara</span>
                  <ChevronRight size={14} className="nested-chevron" />
                </div>
                <ul className="nested-menu">
                  <li><Link to="/aboutus">Company Overview</Link></li>
                  <li><Link to="/aboutus/vision-mission">Vision & Mission</Link></li>
                  <li><Link to="/aboutus/core-values">Objectives & Core Values</Link></li>
                </ul>
              </li>

              {/* Leadership */}
              <li className={`nested-dropdown ${activeNestedDropdown === "leadership" ? "open" : ""}`}>
                <div className="nested-trigger" onClick={() => toggleNestedDropdown("leadership")}>
                  <span>Leadership</span>
                  <ChevronRight size={14} className="nested-chevron" />
                </div>
                <ul className="nested-menu">
                  <li><Link to="/aboutus/board">Board of Directors</Link></li>
                  <li><Link to="/aboutus/management">Management Team</Link></li>
                  <li><Link to="/aboutus/investors">Investors</Link></li>
                </ul>
              </li>

              {/* Governance & Ethics */}
              <li className={`nested-dropdown ${activeNestedDropdown === "governance" ? "open" : ""}`}>
                <div className="nested-trigger" onClick={() => toggleNestedDropdown("governance")}>
                  <span>Governance & Ethics</span>
                  <ChevronRight size={14} className="nested-chevron" />
                </div>
                <ul className="nested-menu">
                  <li className={`sub-nested-dropdown ${activeSubNestedDropdown === "corporate-governance" ? "open" : ""}`}>
                    <div className="sub-nested-trigger" onClick={(e) => {
                      e.stopPropagation();
                      toggleSubNestedDropdown("corporate-governance");
                    }}>
                      <span>Corporate Governance</span>
                      <ChevronRight size={12} className="sub-nested-chevron" />
                    </div>
                    <ul className="sub-nested-menu">
                      <li><Link to="/aboutus/policy">Policy</Link></li>
                      <li><Link to="/customercenter/publicdisclosure">Public Disclosure</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/aboutus/privacy">Privacy Policy</Link></li>
                </ul>
              </li>

              {/* Social Responsibility */}
              <li className={`nested-dropdown ${activeNestedDropdown === "social" ? "open" : ""}`}>
                <div className="nested-trigger" onClick={() => toggleNestedDropdown("social")}>
                  <span>Social Responsibility</span>
                  <ChevronRight size={14} className="nested-chevron" />
                </div>
                <ul className="nested-menu">
                  <li><Link to="/aboutus/csr-initiatives">CSR Initiatives</Link></li>
                </ul>
              </li>
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
          <li className={`nav-item dropdown ${activeDropdown === 2 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(2)}>
              <span>Customer Services</span>
              <ChevronDown size={16} className="chevron" />
            </div>
            <ul className="dropdown-menu">
              <li><a href="https://nach.nivarahousing.com/auth/nach-mandate-login" target="_blank" rel="noopener noreferrer">E-NACH Mandate</a></li>
              <li><Link to="/customercenter/ecs-mandate">ECS Mandate</Link></li>
              <li><Link to="/customercenter/enach-bankcode">E-NACH Net Banking & Debit Card</Link></li>
              <li><Link to="/customercenter/consumer-education">Consumer Education Literature</Link></li>
              <li><Link to="/customercenter/release-of-property">Release of Property</Link></li>
              <li><Link to="/customercenter/risk-based-pricing">Risk Based Pricing</Link></li>
              <li><Link to="/customercenter/app-form">App Form</Link></li>
              <li><Link to="/customercenter/interest-rate">Interest Rates</Link></li>
              <li><Link to="/customercenter/calculator">EMI Calculator</Link></li>
              <li><Link to="/customercenter/mitc">MITC</Link></li>
              <li><Link to="/customercenter/fair-practice-code">Fair Practice Code</Link></li>

              {/* Support & Assistance */}
              <li className={`nested-dropdown ${activeNestedDropdown === "support" ? "open" : ""}`}>
                <div className="nested-trigger" onClick={() => toggleNestedDropdown("support")}>
                  <span>Support & Assistance</span>
                  <ChevronRight size={14} className="nested-chevron" />
                </div>
                <ul className="nested-menu">
                  <li><Link to="/customercenter/faqs">FAQs</Link></li>
                </ul>
              </li>

              {/* Property & Recovery */}
              <li className={`nested-dropdown ${activeNestedDropdown === "property" ? "open" : ""}`}>
                <div className="nested-trigger" onClick={() => toggleNestedDropdown("property")}>
                  <span>Property & Recovery</span>
                  <ChevronRight size={14} className="nested-chevron" />
                </div>
                <ul className="nested-menu">
                  <li><Link to="/customercenter/auction-properties">Auction Properties</Link></li>
                  <li><Link to="/customercenter/recovery-agents">Recovery Agents</Link></li>
                  {dynamicPages.filter(p => p.menu_location === "customercenter").map(p => (
                    <li key={p.id}><Link to={`/p/${p.slug}`}>{p.title}</Link></li>
                  ))}
                </ul>
              </li>

             
            </ul>
          </li>

          {/* PARTNERS */}
          <li className={`nav-item dropdown ${activeDropdown === 3 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(3)}>
              <span>Partners</span>
              <ChevronDown size={16} className="chevron" />
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/ourpartners/lenders/lenders">Lenders</Link></li>
              <li><Link to="/ourpartners/ourinsurancepartners/ourinsurancepartners">Insurance Partners</Link></li>
            </ul>
          </li>

          {/* INVESTOR RELATIONS */}
          <li className={`nav-item dropdown ${activeDropdown === 4 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(4)}>
              <span>Investor Relations</span>
              <ChevronDown size={16} className="chevron" />
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/investorsrelation/annual-returns">Annual Returns</Link></li>
               {/* General Meeting */}
              <li className={`nested-dropdown ${activeNestedDropdown === "general-meeting" ? "open" : ""}`}>
                <div className="nested-trigger" onClick={() => toggleNestedDropdown("general-meeting")}>
                  <span>General Meeting</span>
                  <ChevronRight size={14} className="nested-chevron" />
                </div>
                <ul className="nested-menu">
                  <li><Link to="/investorsrelation/notices">Notices</Link></li>
                  <li><Link to="/investorsrelation/transcripts">Transcripts</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          {/* MEDIA */}
          <li className={`nav-item dropdown ${activeDropdown === 5 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(5)}>
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

          {/* CAREERS */}
          <li className="nav-item">
            <Link to="/career/career" className="nav-link"><span>Careers</span></Link>
          </li>

          {/* CONTACT US */}
          <li className={`nav-item dropdown ${activeDropdown === 6 ? "open" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown(6)}>
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
