import React, { useEffect } from "react";
import { FaLock, FaFileAlt, FaBullhorn, FaMicrophone, FaChevronRight } from "react-icons/fa";
import "./InvestorsRelation.css";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const annualReturns = [
  "2019–20", "2020–21", "2021–22", "2022–23", "2023–24", "2024–25"
];

const notices = [
  "Notice of AGM 26.06.2024",
  "Notice of EGM 11.09.2024",
  "Notice of EGM 09.01.2025",
  "Notice of EGM 07.02.2025",
  "Notice of EGM 13.03.2025",
  "Notice of AGM 19.05.2025",
  "Notice of EGM 23.07.2025",
  "Notice of EGM 12.12.2025",
];

const transcripts = [
  "Transcript of AGM 26.06.2024",
  "Transcript of EGM 11.09.2024",
  "Transcript of EGM 09.01.2025",
  "Transcript of EGM 07.02.2025",
  "Transcript of EGM 13.03.2025",
  "Transcript of EGM 19.05.2025",
  "Transcript of EGM 23.07.2025",
  "Transcript of EGM 12.12.2025",
];

const InvestorsRelation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="investor-page-container minimal">
      {/* Title Section - No Image */}
      <header className="investor-header-simple">
        <ScrollReveal direction="down">
          <div className="header-badge">Compliance & Transparency</div>
          <h1>Investor <span className="text-red">Relations</span></h1>
          <p>Access all regulatory filings, meeting notices, and event transcripts in one place.</p>
        </ScrollReveal>
      </header>

      <div className="investor-content-wrapper minimal">
        <div className="investor-sections-grid">
          {/* Annual Returns Section */}
          <div className="investor-section minimal">
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
                {annualReturns.map((year, i) => (
                  <a key={i} className="investor-list-item" href="#">
                    <div className="item-content">
                      <span className="year-label">FY {year}</span>
                      <span className="doc-name">Annual Return</span>
                    </div>
                    <FaChevronRight className="arrow-icon" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Notices Section */}
          <div className="investor-section minimal">
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
                {notices.map((item, i) => (
                  <a key={i} className="investor-list-item" href="#">
                    <div className="item-content">
                      <span className="doc-name">{item}</span>
                    </div>
                    <FaChevronRight className="arrow-icon" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Transcripts Section */}
          <div className="investor-section minimal">
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
                  <a key={i} className="investor-list-item" href="#">
                    <div className="item-content">
                      <span className="doc-name">{item}</span>
                    </div>
                    <FaChevronRight className="arrow-icon" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorsRelation;


