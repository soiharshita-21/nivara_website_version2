import React from "react";
import { FaFilePdf } from "react-icons/fa";

const corporategovernance = () => {
  return (
    <div className="interest-rate-page">
      <h1 className="interest-title animate-pop-up">Corporate Governance</h1>

      <a
        href="/files/disclosure-interest-rate.pdf"   // your pdf path
        download
        className="download-btn"
      >
        <FaFilePdf className="pdf-icon" />
        <span>Download : Disclosure on Corporate Governance</span>
      </a>
    </div>
  );
};

export default corporategovernance;
