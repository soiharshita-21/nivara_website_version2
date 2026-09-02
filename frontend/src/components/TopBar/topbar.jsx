import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Search, ArrowRight } from "lucide-react";
import "./topbar.css";

const allPages = [
  { name: "Home", path: "/" },
  { name: "About Us (Company Overview)", path: "/aboutus" },
  { name: "Vision & Mission", path: "/aboutus/vision-mission" },
  { name: "Core Values", path: "/aboutus/core-values" },
  { name: "Investors", path: "/aboutus/investors" },
  { name: "Board of Directors", path: "/aboutus/board" },
  { name: "Management Team", path: "/aboutus/management" },
  { name: "Privacy Policy", path: "/aboutus/privacy" },
  { name: "Corporate Governance Policy", path: "/aboutus/policy" },
  { name: "CSR Initiatives", path: "/aboutus/csr-initiatives" },
  { name: "KYC & AML Measures", path: "/aboutus/kyc-aml-measures" },
  { name: "Home Loan for Purchase", path: "/services/home-loan" },
  { name: "Construction Loan", path: "/services/construction-loan" },
  { name: "Composite Home Loan", path: "/services/composite-loan" },
  { name: "Loan Against Property", path: "/services/lap" },
  { name: "Balance Transfer", path: "/services/balance-transfer" },
  { name: "Refinance Loan", path: "/services/refinance-loan" },
  { name: "Improvement & Extension Loan", path: "/services/improvementandextension" },
  { name: "Lenders", path: "/ourpartners/lenders/lenders" },
  { name: "Insurance Partners", path: "/ourpartners/ourinsurancepartners/ourinsurancepartners" },
  { name: "Investor Relations - Annual Returns", path: "/investorsrelation/annual-returns" },
  { name: "Investor Relations - General Meeting Notices", path: "/investorsrelation/notices" },
  { name: "Investor Relations - General Meeting Transcripts", path: "/investorsrelation/transcripts" },
  { name: "Blog", path: "/media/blog/blog" },
  { name: "Press Release", path: "/media/pressrelease/pressrelease" },
  { name: "Gallery", path: "/media/nivara-gallery/nivara-gallery" },
  { name: "Careers", path: "/career/career" },
  { name: "E-Nach Mandate", path: "https://nach.nivarahousing.com/auth/nach-mandate-login" },
  { name: "ECS Mandate", path: "/customercenter/ecs-mandate" },
  { name: "E-NACH Net Banking & Debit Card", path: "/customercenter/enach-bankcode" },
  { name: "Consumer Education Literature", path: "/customercenter/consumer-education" },
  { name: "Release of Property", path: "/customercenter/release-of-property" },
  { name: "Risk Based Pricing", path: "/customercenter/risk-based-pricing" },
  { name: "Application Form (App Form)", path: "/customercenter/app-form" },
  { name: "Interest Rate", path: "/customercenter/interest-rate" },
  { name: "Calculator", path: "/customercenter/calculator" },
  { name: "FAQs", path: "/customercenter/faqs" },
  { name: "Auction Properties", path: "/customercenter/auction-properties" },
  { name: "Recovery Agents", path: "/customercenter/recovery-agents" },
  { name: "MITC", path: "/customercenter/mitc" },
  { name: "Fair Practice Code", path: "/customercenter/fair-practice-code" },
  { name: "Corporate Governance", path: "/customercenter/corporategovernance" },
  { name: "Public Disclosure", path: "/customercenter/publicdisclosure" },
  { name: "Grievance Redressal", path: "/customercenter/grievance-redressal" },
  { name: "Complaint", path: "/customercenter/complaint" },
  { name: "Branch Locations", path: "/contactus/branch/branch" },
  { name: "Office Locations", path: "/contactus/offices/offices" },
  { name: "Why Choose Us", path: "/why-choose-us" },
  { name: "Apply for Home Loan", path: "/apply-home-loan" },
  { name: "Get Appointment", path: "/get-appointment" },
  { name: "Contact Inquiry", path: "/contact-inquiry" },
  { name: "Meet Advisor", path: "/meet-advisor" },
];

const TopBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();

  // Close search when location changes
  useEffect(() => {
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

  return (
    <div className="topbar">
      <div className="topbar-left">
        {/* Phone */}
        <a href="tel:18003091516" className="topbar-link">
          <FaPhoneAlt />
          <span>1800-309-1516 (Toll Free)</span>
        </a>

        {/* Email */}
        <a href="mailto:contact@nivarahousing.com" className="topbar-link">
          <FaEnvelope />
          <span>contact@nivarahousing.com</span>
        </a>
        <div className="topbar-link">
          <span>ISO 27001:2022 Certified!</span>
        </div>
      </div>

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
          <Search className="search-icon" size={18} />

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
    </div>
  );
};

export default TopBar;
