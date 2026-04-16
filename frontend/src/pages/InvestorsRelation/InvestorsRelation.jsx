import React from "react";
import { FaLock } from "react-icons/fa";
import "./InvestorsRelation.css";

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
  return (
    <div className="investor-wrapper">

      <div className="investor-grid">

        {/* COLUMN 1 */}
        <div className="investor-col">
          {annualReturns.map((year, i) => (
            <a key={i} className="investor-box" href="#">
              <FaLock className="lock-icon" />
              <span>Annual Return {year}</span>
            </a>
          ))}
        </div>

        {/* COLUMN 2 */}
        <div className="investor-col">
          {notices.map((item, i) => (
            <a key={i} className="investor-box" href="#">
              <FaLock className="lock-icon" />
              <span>{item}</span>
            </a>
          ))}
        </div>

        {/* COLUMN 3 */}
        <div className="investor-col">
          {transcripts.map((item, i) => (
            <a key={i} className="investor-box" href="#">
              <FaLock className="lock-icon" />
              <span>{item}</span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default InvestorsRelation;

