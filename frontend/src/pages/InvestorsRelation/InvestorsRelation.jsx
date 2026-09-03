import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFileAlt, FaBullhorn, FaMicrophone, FaChevronRight } from "react-icons/fa";
import "./InvestorsRelation.css";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import InvestorPasswordModal from "./InvestorPasswordModal";

const defaultAnnualReturns = [
  { year: "2019–20", path: "/files/Annual-Return-2019-20.pdf" },
  { year: "2020–21", path: "/files/Annual-Return-2020-21.pdf" },
  { year: "2021–22", path: "/files/Annual-Return-2021-22.pdf" },
  { year: "2022–23", path: "/files/Annual-Return-2022-23.pdf" },
  { year: "2023–24", path: "/files/Annual-Return-2023-24.pdf" },
  { year: "2024–25", path: "/files/Annual_Return_2024-25.pdf" },
];

const defaultNotices = [
  { name: "Notice of AGM 26.06.2024", path: "/files/Notice-of-AGM_26.06.2024.pdf" },
  { name: "Notice of EGM 11.09.2024", path: "/files/Notice-of-EGM_11.09.2024.pdf" },
  { name: "Notice of EGM 09.01.2025", path: "/files/Notice-of-EGM_09.01.2025.pdf" },
  { name: "Notice of 28th EGM 13.03.2025", path: "/files/Notice-of-28th-EGM_13.03.2025.pdf" },
  { name: "Notice of 29th EGM 23.07.2025", path: "/files/Signed_Notice_of_29th_EGM-1.pdf" },
  { name: "Notice of 30th EGM 12.12.2025", path: "/files/Notice_of_30th_EGM_to_circulate.pdf" },
  { name: "Notice of 31st EGM 23.03.2026", path: "/files/Notice_of_31st_EGM_Signed.pdf" },
  { name: "Notice of AGM 25.05.2026", path: "/files/Notice of AGM 25.05.2026.pdf", password: "Welcome_1234$" },
];

const defaultTranscripts = [
  { name: "Transcript of AGM 26.06.2024", path: "/files/Transcript_10th-AGM_26.06.2024.pdf" },
  { name: "Transcript of EGM 11.09.2024", path: "/files/Transcript_25th-EGM_11.09.2024-1.pdf" },
  { name: "Transcript of EGM 09.01.2025", path: "/files/Transcript_26th-EGM_09.01.2025.pdf" },
  { name: "Transcript of EGM 07.02.2025", path: "/files/Transcript_27th-EGM_07.02.2025.pdf" },
  { name: "Transcript of EGM 13.03.2025", path: "/files/Transcript-of-EGM-13.03.2025.pdf" },
  { name: "Transcript of AGM 19.05.2025", path: "/files/Transcript-AGM-19.05.2025-.pdf" },
  { name: "Transcript of EGM 23.07.2025", path: "/files/Transcript-EGM-23.07.2025-.pdf" },
  { name: "Transcript of EGM 12.12.2025", path: "/files/Transcript_EGM_12.12.2025.pdf" },
  { name: "Transcript of EGM 23.03.2026", path: "/files/Transcript-EGM-23.03.2026.pdf" },
  { name: "Transcript of AGM 25.05.2026", path: "/files/Transcript of AGM 25.05.2026.pdf", password: "Welcome_1234$" },
];

const InvestorsRelation = ({ section }) => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [annualReturns, setAnnualReturns] = useState(defaultAnnualReturns);
  const [notices, setNotices] = useState(defaultNotices);
  const [transcripts, setTranscripts] = useState(defaultTranscripts);

  useEffect(() => {
    const fetchLiveDocs = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || (typeof window !== 'undefined' && window.location.port === '3000' ? 'http://localhost:5001' : '');
        const res = await axios.get(`${baseUrl}/api/documents?t=${Date.now()}`);
        if (Array.isArray(res.data)) {
          const apiNotices = [];
          const apiReturns = [];
          const apiTranscripts = [];

          res.data.forEach(doc => {
            const path = doc.full_url || doc.file_url;
            const extra = doc.extra_info ? (typeof doc.extra_info === 'string' ? doc.extra_info : JSON.stringify(doc.extra_info)) : null;

            if (doc.category === 'investor_notices') {
              apiNotices.push({
                name: doc.title,
                path: path,
                password: extra
              });
            } else if (doc.category === 'investor_reports') {
              apiReturns.push({
                year: doc.title.replace(/[^0-9–-]/g, '') || doc.title,
                name: doc.title,
                path: path
              });
            } else if (doc.category === 'investor_transcripts') {
              apiTranscripts.push({
                name: doc.title,
                path: path,
                password: extra
              });
            }
          });

          if (apiNotices.length > 0) {
            setNotices(apiNotices);
          } else {
            setNotices([]);
          }

          if (apiReturns.length > 0) {
            setAnnualReturns(apiReturns);
          } else {
            setAnnualReturns([]);
          }

          if (apiTranscripts.length > 0) {
            setTranscripts(apiTranscripts);
          } else {
            setTranscripts([]);
          }
        }
      } catch (err) {
        console.error("Failed to load live investor documents, using fallbacks:", err);
        setNotices(defaultNotices);
        setAnnualReturns(defaultAnnualReturns);
        setTranscripts(defaultTranscripts);
      }
    };

    fetchLiveDocs();

    const handleUpdate = () => fetchLiveDocs();
    const handleStorage = (e) => {
      if (e.key === "nivara_document_update_timestamp") fetchLiveDocs();
    };

    window.addEventListener("documentsUpdated", handleUpdate);
    window.addEventListener("storage", handleStorage);
    window.addEventListener("focus", handleUpdate);
    const interval = setInterval(fetchLiveDocs, 10000);

    return () => {
      window.removeEventListener("documentsUpdated", handleUpdate);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("focus", handleUpdate);
      clearInterval(interval);
    };
  }, [section]);

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [window.location.hash]);

  const getHeaderContent = () => {
    switch (section) {
      case "annual-returns":
        return {
          title: "Annual Returns",
          badge: "Financial Transparency",
          desc: "Access our annual audits and financial returns."
        };
      case "notices":
        return {
          title: "Notices",
          badge: "Meeting Compliance",
          desc: "Access notices for all Annual General Meetings (AGM) and Extraordinary General Meetings (EGM)."
        };
      case "transcripts":
        return {
          title: "Transcripts",
          badge: "Corporate Records",
          desc: "Access transcripts for our annual and extraordinary general assemblies."
        };
      default:
        return {
          title: "Investor Relations",
          badge: "Compliance & Transparency",
          desc: "Access all regulatory filings, meeting notices, and event transcripts in one place."
        };
    }
  };

  const header = getHeaderContent();

  return (
    <div className="investor-page-container minimal">
      {/* Title Section - No Image */}
      <header className="investor-header-simple">
        <ScrollReveal direction="down">
          <div className="header-badge">{header.badge}</div>
          <h1>{header.title}</h1>
          <p>{header.desc}</p>
        </ScrollReveal>
      </header>

      <div className="investor-content-wrapper minimal">
        <div className={`investor-sections-grid ${section ? "single-column" : ""}`}>
          {/* Annual Returns Section */}
          {(!section || section === "annual-returns") && (
            <div id="annual-returns" className="investor-section minimal">
              <ScrollReveal direction="up">
                <div className="section-header">
                  <div className="icon-wrapper red">
                    <FaFileAlt />
                  </div>
                  <div className="header-text">
                    <h2>Annual Returns</h2>
                    <span className="count">{annualReturns.length} Documents</span>
                  </div>
                </div>
                <div className="investor-links-list">
                  {annualReturns.map((item, i) => (
                    <a 
                      key={i} 
                      className="investor-list-item" 
                      href="/investorsrelation/restricted"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-content">
                        <span className="year-label">FY {item.year}</span>
                        <span className="doc-name">{item.name || "Annual Return"}</span>
                      </div>
                      <FaChevronRight className="arrow-icon" />
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* Notices Section */}
          {(!section || section === "notices") && (
            <div id="notices" className="investor-section minimal">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="section-header">
                  <div className="icon-wrapper green">
                    <FaBullhorn />
                  </div>
                  <div className="header-text">
                    <h2>Notices</h2>
                    <span className="count">{notices.length} Documents</span>
                  </div>
                </div>
                <div className="investor-links-list">
                  {notices.map((item, i) => {
                    const isProtected = !!item.password;
                    return (
                      <a 
                        key={i} 
                        className="investor-list-item" 
                        href={isProtected ? "#" : "/investorsrelation/restricted"}
                        onClick={(e) => {
                          if (isProtected) {
                            e.preventDefault();
                            setSelectedDoc(item);
                          }
                        }}
                        target={isProtected ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                      >
                        <div className="item-content">
                          <span className="doc-name">{item.name}</span>
                        </div>
                        <FaChevronRight className="arrow-icon" />
                      </a>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* Transcripts Section */}
          {(!section || section === "transcripts") && (
            <div id="transcripts" className="investor-section minimal">
              <ScrollReveal direction="up" delay={0.2}>
                <div className="section-header">
                  <div className="icon-wrapper dark">
                    <FaMicrophone />
                  </div>
                  <div className="header-text">
                    <h2>Transcripts</h2>
                    <span className="count">{transcripts.length} Documents</span>
                  </div>
                </div>
                <div className="investor-links-list">
                  {transcripts.map((item, i) => {
                    const isProtected = !!item.password;
                    return (
                      <a 
                        key={i} 
                        className="investor-list-item" 
                        href={isProtected ? "#" : "/investorsrelation/restricted"}
                        onClick={(e) => {
                          if (isProtected) {
                            e.preventDefault();
                            setSelectedDoc(item);
                          }
                        }}
                        target={isProtected ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                      >
                        <div className="item-content">
                          <span className="doc-name">{item.name}</span>
                        </div>
                        <FaChevronRight className="arrow-icon" />
                      </a>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </div>
      <InvestorPasswordModal
        open={!!selectedDoc}
        documentName={selectedDoc?.name}
        expectedPassword={selectedDoc?.password}
        onConfirm={() => {
          const path = selectedDoc.path;
          setSelectedDoc(null);
          window.open(path, "_blank");
        }}
        onCancel={() => setSelectedDoc(null)}
      />
    </div>
  );
};

export default InvestorsRelation;


