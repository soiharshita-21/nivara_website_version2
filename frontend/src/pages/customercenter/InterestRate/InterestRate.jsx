import React from "react";
import { FaFilePdf } from "react-icons/fa";
import "./InterestRate.css";

const InterestRate = () => {
  return (
    <div className="interest-rate-page">
      <h1 className="interest-title animate-pop-up">Interest Rate</h1>

      <a
        href="/files/interest-rate-disclosure.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="download-btn"
      >
        <FaFilePdf className="pdf-icon" />
        <span>Disclosure on Interest Rate</span>
      </a>
    </div>
  );
};

export default InterestRate;
