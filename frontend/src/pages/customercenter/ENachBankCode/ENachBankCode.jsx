import React from "react";
import { FaFilePdf } from "react-icons/fa";
import "../InterestRate/InterestRate.css";

const ENachBankCode = () => {
  return (
    <div className="interest-rate-page">
      <h1 className="interest-title animate-pop-up">E-NACH Net Banking &amp; Debit Card</h1>
      <a href="/files/enach-bankcode.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
        <FaFilePdf className="pdf-icon" />
        <span>E-NACH Bank Code</span>
      </a>
    </div>
  );
};

export default ENachBankCode;
