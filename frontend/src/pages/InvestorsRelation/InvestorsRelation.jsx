import React, { useEffect } from "react";
import { FaLock, FaFileAlt, FaBullhorn, FaMicrophone, FaChevronRight } from "react-icons/fa";
import "./InvestorsRelation.css";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

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
];

const disclaimerText = "Disclaimer: The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.";

const transcripts = [
  { name: "Transcript of AGM 26.06.2024", path: "/files/Transcript_10th-AGM_26.06.2024.pdf", title: "Transcript of EGM 26th June 2024", disclaimer: disclaimerText },
  { name: "Transcript of EGM 11.09.2024", path: "/files/Transcript_25th-EGM_11.09.2024-1.pdf", title: "Transcript of EGM 11th September 2024", disclaimer: disclaimerText },
  { name: "Transcript of EGM 09.01.2025", path: "/files/Transcript_26th-EGM_09.01.2025.pdf", title: "Transcript of EGM 9th January 2025" },
  { name: "Transcript of EGM 07.02.2025", path: "/files/Transcript_27th-EGM_07.02.2025.pdf", title: "Transcript of EGM 7th Feb 2025", disclaimer: disclaimerText },
  { name: "Transcript of EGM 13.03.2025", path: "/files/Transcript-of-EGM-13.03.2025.pdf", title: "Transcript of EGM 13th March 2025", disclaimer: disclaimerText },
  { name: "Transcript of AGM 19.05.2025", path: "/files/Transcript-AGM-19.05.2025-.pdf", title: "Transcript of EGM 19th May 2025", disclaimer: disclaimerText },
  { name: "Transcript of EGM 23.07.2025", path: "/files/Transcript-EGM-23.07.2025-.pdf", title: "Transcript of EGM 23th July 2025", disclaimer: disclaimerText },
  { name: "Transcript of EGM 12.12.2025", path: "/files/Transcript_EGM_12.12.2025.pdf", title: "Transcript of EGM 12th December 2025" },
  { name: "Transcript of EGM 23.03.2026", path: "/files/Transcript-EGM-23.03.2026.pdf", title: "Transcript of EGM 23rd March 2026" },
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
                {annualReturns.map((item, i) => (
                  <a 
                    key={i} 
                    className="investor-list-item" 
                    href={item.path}
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
                  <a 
                    key={i} 
                    className="investor-list-item" 
                    href={item.path} 
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
                  <a 
                    key={i} 
                    className="investor-list-item" 
                    href={`/investorsrelation/transcript?title=${encodeURIComponent(item.title || item.name)}&file=${encodeURIComponent(item.path)}&disclaimer=${!!item.disclaimer}`}
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
        </div>
      </div>
    </div>
  );
};

export default InvestorsRelation;


