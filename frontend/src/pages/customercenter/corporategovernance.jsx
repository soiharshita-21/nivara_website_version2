import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import {
  FaFilePdf,
  FaFileAlt,
  FaBullhorn,
  FaMicrophone,
  FaChevronRight,
  FaDownload,
  FaSearch,
  FaShieldAlt,
  FaChartLine,
  FaBalanceScale,
  FaRegFilePdf,
} from "react-icons/fa";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import bannerImg from "../../assets/images/about_us.png";
import pb1 from "../../assets/images/publicdisclosure1.png";
import pb2 from "../../assets/images/saf.png";
import "./CorporateGovernance.css";

/* --------------------------------------------------------------------------
   Default Fallback Data
   -------------------------------------------------------------------------- */
const defaultPolicies = [
  { name: "POSH Policy", link: "/files/policy-posh.pdf", tag: "Workplace & Ethics" },
  { name: "Whistle Blower Policy", link: "/files/policy-whistle-blower.pdf", tag: "Ethics & Compliance" },
  { name: "KYC & AML Policy", link: "/files/policy-kyc-aml.pdf", tag: "Regulatory Compliance" },
  { name: "Nomination & Remuneration Policy", link: "/files/policy-nomination-remuneration.pdf", tag: "Board & Management" },
  { name: "Conversion Policy", link: "/files/policy-conversion.pdf", tag: "Operational Guidelines" },
  { name: "Code of Conduct for Independent Directors", link: "/files/policy-code-independent-directors.pdf", tag: "Corporate Governance" },
  { name: "Related Party Transaction Policy", link: "/files/policy-related-party.pdf", tag: "Financial Compliance" },
  { name: "Equal Opportunity Policy", link: "/files/policy-equal-opportunity.pdf", tag: "Human Resources" },
  { name: "Corporate Social Responsibility", link: "/files/policy-csr.pdf", tag: "Social Impact" },
  { name: "Social Media Policy", link: "/files/policy-social-media.pdf", tag: "Brand & Communications" },
  { name: "Anti Bribery and Anti Corruption Policy", link: "/files/policy-anti-bribery.pdf", tag: "Integrity & Conduct" },
  { name: "Trade Relief Policy", link: "/files/policy-trade-relief.pdf", tag: "Credit & Lending" },
  { name: "Internal Guidelines on Corporate Governance", link: "/files/policy-corporate-governance.pdf", tag: "Statutory Guidelines" },
];

const defaultAnnualReturns = [
  { year: "2019–20", name: "Annual Return 2019-20", path: "/files/Annual-Return-2019-20.pdf" },
  { year: "2020–21", name: "Annual Return 2020-21", path: "/files/Annual-Return-2020-21.pdf" },
  { year: "2021–22", name: "Annual Return 2021-22", path: "/files/Annual-Return-2021-22.pdf" },
  { year: "2022–23", name: "Annual Return 2022-23", path: "/files/Annual-Return-2022-23.pdf" },
  { year: "2023–24", name: "Annual Return 2023-24", path: "/files/Annual-Return-2023-24.pdf" },
  { year: "2024–25", name: "Annual Return 2024-25", path: "/files/Annual_Return_2024-25.pdf" },
];

const defaultNotices = [
  { name: "Notice of AGM 26.06.2024", path: "/files/Notice-of-AGM_26.06.2024.pdf", date: "26 Jun 2024" },
  { name: "Notice of EGM 11.09.2024", path: "/files/Notice-of-EGM_11.09.2024.pdf", date: "11 Sep 2024" },
  { name: "Notice of EGM 09.01.2025", path: "/files/Notice-of-EGM_09.01.2025.pdf", date: "09 Jan 2025" },
  { name: "Notice of 28th EGM 13.03.2025", path: "/files/Notice-of-28th-EGM_13.03.2025.pdf", date: "13 Mar 2025" },
  { name: "Notice of 29th EGM 23.07.2025", path: "/files/Signed_Notice_of_29th_EGM-1.pdf", date: "23 Jul 2025" },
  { name: "Notice of 30th EGM 12.12.2025", path: "/files/Notice_of_30th_EGM_to_circulate.pdf", date: "12 Dec 2025" },
  { name: "Notice of 31st EGM 23.03.2026", path: "/files/Notice_of_31st_EGM_Signed.pdf", date: "23 Mar 2026" },
  { name: "Notice of AGM 25.05.2026", path: "/files/Notice of AGM 25.05.2026.pdf", date: "25 May 2026" },
];

const defaultTranscripts = [
  { name: "Transcript of AGM 26.06.2024", path: "/files/Transcript_10th-AGM_26.06.2024.pdf", date: "26 Jun 2024" },
  { name: "Transcript of EGM 11.09.2024", path: "/files/Transcript_25th-EGM_11.09.2024-1.pdf", date: "11 Sep 2024" },
  { name: "Transcript of EGM 09.01.2025", path: "/files/Transcript_26th-EGM_09.01.2025.pdf", date: "09 Jan 2025" },
  { name: "Transcript of EGM 07.02.2025", path: "/files/Transcript_27th-EGM_07.02.2025.pdf", date: "07 Feb 2025" },
  { name: "Transcript of EGM 13.03.2025", path: "/files/Transcript-of-EGM-13.03.2025.pdf", date: "13 Mar 2025" },
  { name: "Transcript of AGM 19.05.2025", path: "/files/Transcript-AGM-19.05.2025-.pdf", date: "19 May 2025" },
  { name: "Transcript of EGM 23.07.2025", path: "/files/Transcript-EGM-23.07.2025-.pdf", date: "23 Jul 2025" },
  { name: "Transcript of EGM 12.12.2025", path: "/files/Transcript_EGM_12.12.2025.pdf", date: "12 Dec 2025" },
  { name: "Transcript of EGM 23.03.2026", path: "/files/Transcript-EGM-23.03.2026.pdf", date: "23 Mar 2026" },
  { name: "Transcript of AGM 25.05.2026", path: "/files/Transcript of AGM 25.05.2026.pdf", date: "25 May 2026" },
];

const defaultDisclosures = [
  { name: "Public Disclosure March 2021", path: "/files/pd-mar-2021.pdf", category: "public_disclosure", period: "Q4 FY 2020-21" },
  { name: "Public Disclosure June 2021", path: "/files/pd-jun-2021.pdf", category: "public_disclosure", period: "Q1 FY 2021-22" },
  { name: "Public Disclosure September 2021", path: "/files/pd-sep-2021.pdf", category: "public_disclosure", period: "Q2 FY 2021-22" },
  { name: "Public Disclosure December 2021", path: "/files/pd-dec-2021.pdf", category: "public_disclosure", period: "Q3 FY 2021-22" },
  { name: "Public Disclosure March 2022", path: "/files/pd-mar-2022.pdf", category: "public_disclosure", period: "Q4 FY 2021-22" },
  { name: "Public Disclosure June 2022", path: "/files/pd-jun-2022.pdf", category: "public_disclosure", period: "Q1 FY 2022-23" },
  { name: "Public Disclosure September 2022", path: "/files/pd-sep-2022.pdf", category: "public_disclosure", period: "Q2 FY 2022-23" },
  { name: "Public Disclosure December 2022", path: "/files/pd-dec-2022.pdf", category: "public_disclosure", period: "Q3 FY 2022-23" },
  { name: "Public Disclosure March 2023", path: "/files/pd-mar-2023.pdf", category: "public_disclosure", period: "Q4 FY 2022-23" },
  { name: "Public Disclosure June 2023", path: "/files/pd-jun-2023.pdf", category: "public_disclosure", period: "Q1 FY 2023-24" },
  { name: "Public Disclosure September 2023", path: "/files/pd-sep-2023.pdf", category: "public_disclosure", period: "Q2 FY 2023-24" },
  { name: "Public Disclosure December 2023", path: "/files/pd-dec-2023.pdf", category: "public_disclosure", period: "Q3 FY 2023-24" },
  { name: "Public Disclosure March 2024", path: "/files/pd-mar-2024.pdf", category: "public_disclosure", period: "Q4 FY 2023-24" },
  { name: "Public Disclosure June 2024", path: "/files/pd-jun-2024.pdf", category: "public_disclosure", period: "Q1 FY 2024-25" },
  { name: "Public Disclosure September 2024", path: "/files/pd-sep-2024.pdf", category: "public_disclosure", period: "Q2 FY 2024-25" },
  { name: "Public Disclosure December 2024", path: "/files/pd-dec-2024.pdf", category: "public_disclosure", period: "Q3 FY 2024-25" },
  { name: "Public Disclosure March 2025", path: "/files/pd-mar-2025.pdf", category: "public_disclosure", period: "Q4 FY 2024-25" },
  { name: "Public Disclosure June 2025", path: "/files/pd-jun-2025.pdf", category: "public_disclosure", period: "Q1 FY 2025-26" },
  { name: "Public Disclosure September 2025", path: "/files/pd-sep-2025.pdf", category: "public_disclosure", period: "Q2 FY 2025-26" },
  { name: "Public Disclosure December 2025", path: "/files/pd-dec-2025.pdf", category: "public_disclosure", period: "Q3 FY 2025-26" },
  { name: "Public Disclosure March 2026", path: "/files/pd-mar-2026.pdf", category: "public_disclosure", period: "Q4 FY 2025-26" },
  { name: "Public Disclosure June 2026", path: "/files/pd-jun-2026.pdf", category: "public_disclosure", period: "Q1 FY 2026-27" },
];

const defaultSarfaesiDocs = [
  { name: "Updated list of properties under SARFAESI Act as on 31st August 2025", path: "/files/sarfaesi-aug-2025.pdf", category: "sarfaesi", period: "August 2025" },
  { name: "Updated list of properties under SARFAESI Act as on 30th September 2025", path: "/files/sarfaesi-sep-2025.pdf", category: "sarfaesi", period: "September 2025" },
  { name: "Updated list of properties under SARFAESI Act as on 31st October 2025", path: "/files/sarfaesi-oct-2025.pdf", category: "sarfaesi", period: "October 2025" },
  { name: "Updated list of properties under SARFAESI Act as on 30th November 2025", path: "/files/sarfaesi-nov-2025.pdf", category: "sarfaesi", period: "November 2025" },
  { name: "Updated list of properties under SARFAESI Act as on 31st December 2025", path: "/files/sarfaesi-dec-2025.pdf", category: "sarfaesi", period: "December 2025" },
  { name: "Updated list of properties under SARFAESI Act as on 31st January 2026", path: "/files/sarfaesi-jan-2026.pdf", category: "sarfaesi", period: "January 2026" },
  { name: "Updated list of properties under SARFAESI Act as on 28th February 2026", path: "/files/sarfaesi-feb-2026.pdf", category: "sarfaesi", period: "February 2026" },
  { name: "Updated list of properties under SARFAESI Act as on 31st March 2026", path: "/files/sarfaesi-mar-2026.pdf", category: "sarfaesi", period: "March 2026" },
  { name: "Updated list of properties under SARFAESI Act as on 30th April 2026", path: "/files/sarfaesi-apr-2026.pdf", category: "sarfaesi", period: "April 2026" },
  { name: "Updated list of properties under SARFAESI Act as on 31st May 2026", path: "/files/sarfaesi-may-2026.pdf", category: "sarfaesi", period: "May 2026" },
  { name: "Updated list of properties under SARFAESI Act as on 30th June 2026", path: "/files/sarfaesi-jun-2026.pdf", category: "sarfaesi", period: "June 2026" },
  { name: "Updated list of properties under SARFAESI Act as on 31st July 2026", path: "/files/sarfaesi-jul-2026.pdf", category: "sarfaesi", period: "July 2026" },
];

/* --------------------------------------------------------------------------
   Corporate Governance Component
   -------------------------------------------------------------------------- */
const CorporateGovernance = ({ initialTab, initialSub }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const validTabs = ["policies", "investors", "disclosures"];
  const urlTab = searchParams.get("tab");
  const defaultTab = initialTab || (validTabs.includes(urlTab) ? urlTab : "policies");
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Sub-tabs & Search States
  const urlSub = searchParams.get("sub");
  const defaultSub = initialSub || urlSub || "all";
  const [investorSubTab, setInvestorSubTab] = useState(defaultSub);
  const [disclosureSubTab, setDisclosureSubTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Live Data States
  const [policies, setPolicies] = useState(defaultPolicies);
  const [annualReturns, setAnnualReturns] = useState(defaultAnnualReturns);
  const [notices, setNotices] = useState(defaultNotices);
  const [transcripts, setTranscripts] = useState(defaultTranscripts);
  const [disclosures, setDisclosures] = useState(defaultDisclosures);
  const [sarfaesiDocs, setSarfaesiDocs] = useState(defaultSarfaesiDocs);

  // Synchronize Tab from Props or URL
  useEffect(() => {
    if (initialTab && validTabs.includes(initialTab)) {
      setActiveTab(initialTab);
    } else if (urlTab && validTabs.includes(urlTab)) {
      setActiveTab(urlTab);
    }
  }, [initialTab, urlTab]);

  useEffect(() => {
    if (initialSub) {
      setInvestorSubTab(initialSub);
    } else if (urlSub) {
      setInvestorSubTab(urlSub);
    }
  }, [initialSub, urlSub]);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    setSearchParams({ tab: newTab });
    setSearchQuery("");
  };

  // Live Documents Fetching
  useEffect(() => {
    const fetchAllDocuments = async () => {
      try {
        const baseUrl =
          import.meta.env.VITE_API_BASE_URL ||
          (typeof window !== "undefined" && window.location.port === "3000"
            ? "http://localhost:5001"
            : "");
        const res = await axios.get(`${baseUrl}/api/documents?t=${Date.now()}`);

        if (Array.isArray(res.data) && res.data.length > 0) {
          const apiPolicies = [];
          const apiNotices = [];
          const apiReturns = [];
          const apiTranscripts = [];
          const apiDisclosures = [];
          const apiSarfaesi = [];

          res.data.forEach((doc) => {
            const path = doc.full_url || doc.file_url;
            const extra = doc.extra_info
              ? typeof doc.extra_info === "string"
                ? doc.extra_info
                : JSON.stringify(doc.extra_info)
              : null;

            if (doc.category === "policies") {
              apiPolicies.push({
                name: doc.title,
                link: path,
                tag: "Company Policy",
              });
            } else if (doc.category === "investor_notices") {
              apiNotices.push({
                name: doc.title,
                path: path,
                date: doc.created_at
                  ? new Date(doc.created_at).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Notice",
              });
            } else if (doc.category === "investor_reports") {
              apiReturns.push({
                year: doc.title.replace(/[^0-9–-]/g, "") || doc.title,
                name: doc.title,
                path: path,
              });
            } else if (doc.category === "investor_transcripts") {
              apiTranscripts.push({
                name: doc.title,
                path: path,
                date: doc.created_at
                  ? new Date(doc.created_at).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Transcript",
              });
            } else if (doc.category === "public_disclosure") {
              apiDisclosures.push({
                name: doc.title,
                path: path,
                category: "public_disclosure",
                period: "Quarterly Disclosure",
              });
            } else if (doc.category === "sarfaesi") {
              apiSarfaesi.push({
                name: doc.title,
                path: path,
                category: "sarfaesi",
                period: "Monthly SARFAESI",
              });
            }
          });

          if (apiPolicies.length > 0) setPolicies(apiPolicies);
          if (apiNotices.length > 0) setNotices(apiNotices);
          if (apiReturns.length > 0) setAnnualReturns(apiReturns);
          if (apiTranscripts.length > 0) setTranscripts(apiTranscripts);
          if (apiDisclosures.length > 0) setDisclosures(apiDisclosures);
          if (apiSarfaesi.length > 0) setSarfaesiDocs(apiSarfaesi);
        }
      } catch (err) {
        console.warn("Failed to load live documents, using default fallbacks:", err);
      }
    };

    fetchAllDocuments();

    const handleUpdate = () => fetchAllDocuments();
    const handleStorage = (e) => {
      if (e.key === "nivara_document_update_timestamp") fetchAllDocuments();
    };

    window.addEventListener("documentsUpdated", handleUpdate);
    window.addEventListener("storage", handleStorage);
    window.addEventListener("focus", handleUpdate);

    return () => {
      window.removeEventListener("documentsUpdated", handleUpdate);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("focus", handleUpdate);
    };
  }, []);

  // Filtered Policies
  const filteredPolicies = useMemo(() => {
    if (!searchQuery.trim()) return policies;
    const query = searchQuery.toLowerCase();
    return policies.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        (p.tag && p.tag.toLowerCase().includes(query))
    );
  }, [policies, searchQuery]);

  // Filtered Investor Documents
  const filteredAnnualReturns = useMemo(() => {
    if (!searchQuery.trim()) return annualReturns;
    const query = searchQuery.toLowerCase();
    return annualReturns.filter(
      (item) =>
        item.year.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query)
    );
  }, [annualReturns, searchQuery]);

  const filteredNotices = useMemo(() => {
    if (!searchQuery.trim()) return notices;
    const query = searchQuery.toLowerCase();
    return notices.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        (item.date && item.date.toLowerCase().includes(query))
    );
  }, [notices, searchQuery]);

  const filteredTranscripts = useMemo(() => {
    if (!searchQuery.trim()) return transcripts;
    const query = searchQuery.toLowerCase();
    return transcripts.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        (item.date && item.date.toLowerCase().includes(query))
    );
  }, [transcripts, searchQuery]);

  // Filtered Public Disclosures
  const filteredPublicDisclosures = useMemo(() => {
    if (!searchQuery.trim()) return disclosures;
    const query = searchQuery.toLowerCase();
    return disclosures.filter((d) => d.name.toLowerCase().includes(query));
  }, [disclosures, searchQuery]);

  const filteredSarfaesiDisclosures = useMemo(() => {
    if (!searchQuery.trim()) return sarfaesiDocs;
    const query = searchQuery.toLowerCase();
    return sarfaesiDocs.filter((d) => d.name.toLowerCase().includes(query));
  }, [sarfaesiDocs, searchQuery]);

  return (
    <div className="corporate-governance-page">
      {/* --------------------------------------------------------------------------
          1. Hero Banner (Leadership Page Style)
          -------------------------------------------------------------------------- */}
      <ScrollReveal direction="down">
        <section
          className="page-banner gov-hero-banner"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="gov-banner-overlay"></div>
          <div className="gov-banner-content">
            <span className="gov-banner-badge">Governance & Integrity</span>
            <h1 className="gov-banner-title">
              Corporate <span className="text-red">Governance</span>
            </h1>
            <p className="gov-banner-subtitle">
              Upholding the highest standards of transparency, ethical accountability,
              and stakeholder value in affordable housing finance.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* --------------------------------------------------------------------------
          2. Floating / Pill-Shaped Tab Navigation Bar
          -------------------------------------------------------------------------- */}
      <div className="gov-tabs-wrapper">
        <div className="gov-pill-tabs">
          <button
            className={`gov-tab-btn ${activeTab === "policies" ? "active" : ""}`}
            onClick={() => handleTabChange("policies")}
          >
            <FaBalanceScale className="tab-icon" />
            <span>Policies</span>
          </button>
          <button
            className={`gov-tab-btn ${activeTab === "investors" ? "active" : ""}`}
            onClick={() => handleTabChange("investors")}
          >
            <FaChartLine className="tab-icon" />
            <span>Investor Relations</span>
          </button>
          <button
            className={`gov-tab-btn ${activeTab === "disclosures" ? "active" : ""}`}
            onClick={() => handleTabChange("disclosures")}
          >
            <FaShieldAlt className="tab-icon" />
            <span>Public Disclosure</span>
          </button>
        </div>
      </div>

      {/* --------------------------------------------------------------------------
          3. Tab Content
          -------------------------------------------------------------------------- */}
      <div className="gov-content-container">
        {/* =========================================================================
            TAB 1: Policies (Company Policies)
            ========================================================================= */}
        {activeTab === "policies" && (
          <div className="gov-tab-pane">
            <ScrollReveal direction="up">
              <div className="gov-section-header">
                <div className="gov-section-intro">
                  <h2 className="gov-section-title">
                    Company Policies{" "}
                    <span className="count-badge">{filteredPolicies.length} Policies</span>
                  </h2>
                  <p className="gov-section-desc">
                    Comprehensive operational and ethical policies governing Nivara Housing Finance Ltd.
                  </p>
                </div>

                <div className="gov-search-box">
                  <input
                    type="text"
                    placeholder="Search policy name or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="gov-search-icon" />
                </div>
              </div>
            </ScrollReveal>

            {filteredPolicies.length > 0 ? (
              <div className="gov-policies-grid">
                {filteredPolicies.map((policy, idx) => (
                  <ScrollReveal key={idx} direction="up" delay={idx * 0.03}>
                    <div className="gov-policy-card">
                      <div className="gov-card-top">
                        <div className="gov-doc-icon-badge">
                          <FaFilePdf />
                        </div>
                        <div className="gov-card-info">
                          <h3 className="gov-policy-title">{policy.name}</h3>
                          <span className="gov-policy-tag">{policy.tag || "Governance"}</span>
                        </div>
                      </div>

                      <div className="gov-card-bottom">
                        <span className="gov-file-format">PDF Document</span>
                        <a
                          href={policy.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gov-download-btn"
                        >
                          <FaDownload size={13} />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="gov-empty-state">
                <FaRegFilePdf className="gov-empty-icon" />
                <h3>No policies found</h3>
                <p>Try searching with a different keyword or view all policies.</p>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 2: Investor Relations (Multi-Column Layout)
            ========================================================================= */}
        {activeTab === "investors" && (
          <div className="gov-tab-pane">
            <ScrollReveal direction="up">
              <div className="gov-investor-grid">
                {/* Column 1: Annual Returns */}
                <div className="gov-investor-column">
                  <div className="gov-col-header">
                    <div className="gov-col-icon red">
                      <FaFileAlt />
                    </div>
                    <div className="gov-col-title-group">
                      <h3>Annual Returns</h3>
                      <span>{annualReturns.length} Financial Audits</span>
                    </div>
                  </div>

                  <div className="gov-col-items-list">
                    {annualReturns.map((item, idx) => (
                      <a
                        key={idx}
                        href="/investorsrelation/restricted"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gov-investor-item"
                      >
                        <div className="gov-item-left">
                          <span className="gov-item-badge">FY {item.year}</span>
                          <span className="gov-item-name">{item.name}</span>
                        </div>
                        <div className="gov-item-right">
                          <FaChevronRight size={12} />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 2: Meeting Notices */}
                <div className="gov-investor-column">
                  <div className="gov-col-header">
                    <div className="gov-col-icon green">
                      <FaBullhorn />
                    </div>
                    <div className="gov-col-title-group">
                      <h3>Meeting Notices</h3>
                      <span>{notices.length} AGM & EGM Notices</span>
                    </div>
                  </div>

                  <div className="gov-col-items-list">
                    {notices.map((item, idx) => (
                      <a
                        key={idx}
                        href="/investorsrelation/restricted"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gov-investor-item"
                      >
                        <div className="gov-item-left">
                          <span className="gov-item-badge">{item.date}</span>
                          <span className="gov-item-name">{item.name}</span>
                        </div>
                        <div className="gov-item-right">
                          <FaChevronRight size={12} />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 3: Meeting Transcripts */}
                <div className="gov-investor-column">
                  <div className="gov-col-header">
                    <div className="gov-col-icon blue">
                      <FaMicrophone />
                    </div>
                    <div className="gov-col-title-group">
                      <h3>Meeting Transcripts</h3>
                      <span>{transcripts.length} Official Records</span>
                    </div>
                  </div>

                  <div className="gov-col-items-list">
                    {transcripts.map((item, idx) => (
                      <a
                        key={idx}
                        href="/investorsrelation/restricted"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gov-investor-item"
                      >
                        <div className="gov-item-left">
                          <span className="gov-item-badge">{item.date}</span>
                          <span className="gov-item-name">{item.name}</span>
                        </div>
                        <div className="gov-item-right">
                          <FaChevronRight size={12} />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        )}

        {/* =========================================================================
            TAB 3: Public Disclosure (Matching /customercenter/publicdisclosure)
            ========================================================================= */}
        {activeTab === "disclosures" && (
          <div className="gov-tab-pane">
            <ScrollReveal direction="up">
              <div className="gov-section-header">
                <div className="gov-section-intro">
                  <h2 className="gov-section-title">
                    Public Disclosure
                  </h2>
                  <p className="gov-section-desc">
                    Transparency and regulatory compliance in housing finance.
                  </p>
                </div>

                <div className="gov-search-box">
                  <input
                    type="text"
                    placeholder="Search disclosures by date or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="gov-search-icon" />
                </div>
              </div>

              <p className="public-note">
                All documents are available for viewing and download. Click on any document card to open.
              </p>
            </ScrollReveal>

            {/* Exact 2-Column Card Grid from /customercenter/publicdisclosure */}
            <div className="public-grid">
              {/* Public Disclosure Card */}
              <ScrollReveal className="public-card" direction="up" distance={30} delay={0.1}>
                <div className="public-card-image">
                  <img src={pb1} alt="Public Disclosure" />
                </div>
                <div className="public-card-content">
                  <h2>Public Disclosure</h2>
                  <div className="public-links">
                    {filteredPublicDisclosures.map((doc, index) => (
                      <a
                        key={index}
                        href={doc.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {doc.name}
                      </a>
                    ))}
                    {filteredPublicDisclosures.length === 0 && (
                      <p style={{ color: "#94a3b8", padding: "10px 0" }}>No matching disclosures found.</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              {/* SARFAESI Attachments Card */}
              <ScrollReveal className="public-card" direction="up" distance={30} delay={0.2}>
                <div className="public-card-image">
                  <img src={pb2} alt="SARFAESI Attachments" />
                </div>
                <div className="public-card-content">
                  <h2>SARFAESI Attachments</h2>
                  <div className="public-links">
                    {filteredSarfaesiDisclosures.map((doc, index) => (
                      <a
                        key={index}
                        href={doc.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {doc.name}
                      </a>
                    ))}
                    {filteredSarfaesiDisclosures.length === 0 && (
                      <p style={{ color: "#94a3b8", padding: "10px 0" }}>No matching SARFAESI documents found.</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CorporateGovernance;
