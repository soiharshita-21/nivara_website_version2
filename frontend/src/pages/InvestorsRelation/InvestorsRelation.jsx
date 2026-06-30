import React, { useEffect, useState } from "react";
import { FaFileAlt, FaBullhorn, FaMicrophone, FaChevronRight } from "react-icons/fa";
import "./InvestorsRelation.css";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import InvestorPasswordModal from "./InvestorPasswordModal";

const annualReturns = [
  { year: "2019–20", path: "/files/Annual-Return-2019-20.pdf" },
  { year: "2020–21", path: "/files/Annual-Return-2020-21.pdf" },
  { year: "2021–22", path: "/files/Annual-Return-2021-22.pdf" },
  { year: "2022–23", path: "/files/Annual-Return-2022-23.pdf" },
  { year: "2023–24", path: "/files/Annual-Return-2023-24.pdf" },
  { year: "2024–25", path: "/files/Annual_Return_2024-25.pdf" },
];

const notices = [
  { name: "Notice of AGM 26.06.2024", path: "/files/Notice-of-AGM_26.06.2024.pdf" },
  { name: "Notice of EGM 11.09.2024", path: "/files/Notice-of-EGM_11.09.2024.pdf" },
  { name: "Notice of EGM 09.01.2025", path: "/files/Notice-of-EGM_09.01.2025.pdf" },
  { name: "Notice of 28th EGM 13.03.2025", path: "/files/Notice-of-28th-EGM_13.03.2025.pdf" },
  { name: "Notice of 29th EGM 23.07.2025", path: "/files/Signed_Notice_of_29th_EGM-1.pdf" },
  { name: "Notice of 30th EGM 12.12.2025", path: "/files/Notice_of_30th_EGM_to_circulate.pdf" },
  { name: "Notice of 31st EGM 23.03.2026", path: "/files/Notice_of_31st_EGM_Signed.pdf" },
  { name: "Notice of AGM 25.05.2026", path: "/files/Notice of AGM 25.05.2026.pdf" },
];

const transcripts = [
  { name: "Transcript of AGM 26.06.2024", path: "/files/Transcript_10th-AGM_26.06.2024.pdf" },
  { name: "Transcript of EGM 11.09.2024", path: "/files/Transcript_25th-EGM_11.09.2024-1.pdf" },
  { name: "Transcript of EGM 09.01.2025", path: "/files/Transcript_26th-EGM_09.01.2025.pdf" },
  { name: "Transcript of EGM 07.02.2025", path: "/files/Transcript_27th-EGM_07.02.2025.pdf" },
  { name: "Transcript of EGM 13.03.2025", path: "/files/Transcript-of-EGM-13.03.2025.pdf" },
  { name: "Transcript of AGM 19.05.2025", path: "/files/Transcript-AGM-19.05.2025-.pdf" },
  { name: "Transcript of EGM 23.07.2025", path: "/files/Transcript-EGM-23.07.2025-.pdf" },
  { name: "Transcript of EGM 12.12.2025", path: "/files/Transcript_EGM_12.12.2025.pdf" },
  { name: "Transcript of EGM 23.03.2026", path: "/files/Transcript-EGM-23.03.2026.pdf" },
];

const InvestorsRelation = ({ section }) => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);

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
                        <span className="doc-name">Annual Return</span>
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
                    const isProtected = item.name === "Notice of AGM 25.05.2026";
                    return (
                      <a 
                        key={i} 
                        className="investor-list-item" 
                        href={isProtected ? "#" : "/investorsrelation/restricted"}
                        onClick={(e) => {
                          if (isProtected) {
                            e.preventDefault();
                            setShowPasswordModal(true);
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
                  {transcripts.map((item, i) => (
                    <a 
                      key={i} 
                      className="investor-list-item" 
                      href="/investorsrelation/restricted"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-content">
                        <span className="doc-name">{item.name}</span>
                      </div>
                      <FaChevronRight className="arrow-icon" />
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </div>
      <InvestorPasswordModal
        open={showPasswordModal}
        documentName="Notice of AGM 25.05.2026"
        onConfirm={() => {
          setShowPasswordModal(false);
          window.open("/files/Notice of AGM 25.05.2026.pdf", "_blank");
        }}
        onCancel={() => setShowPasswordModal(false)}
      />
    </div>
  );
};

export default InvestorsRelation;


