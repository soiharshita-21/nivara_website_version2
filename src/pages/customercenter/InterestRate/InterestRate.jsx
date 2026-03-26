import React from "react";
import { FaFilePdf } from "react-icons/fa";
import "./InterestRate.css";

const InterestRate = () => {
  return (
    <div className="interest-rate-page">
      <h1 className="interest-title animate-pop-up">Interest Rate</h1>

      <a
        href="/files/disclosure-interest-rate.pdf"   // your pdf path
        download
        className="download-btn"
      >
        <FaFilePdf className="pdf-icon" />
        <span>Download : Disclosure on Interest Rate</span>
      </a>
    </div>
  );
};

export default InterestRate;
