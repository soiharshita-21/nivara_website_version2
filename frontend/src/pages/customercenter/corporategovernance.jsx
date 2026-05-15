import React from "react";
import { FaFilePdf } from "react-icons/fa";

const corporategovernance = () => {
  return (
    <div className="interest-rate-page">
      <h1 className="interest-title animate-pop-up">Corporate Governance</h1>

      <a
        href="/files/corporate-governance.pdf"   // your pdf path
        target="_blank"
        rel="noopener noreferrer"
        className="download-btn"
      >
        <FaFilePdf className="pdf-icon" />
        <span>Disclosure on Corporate Governance</span>
      </a>
    </div>
  );
};

export default corporategovernance;
