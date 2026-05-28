import React from "react";
import { FaFilePdf } from "react-icons/fa";
import "../InterestRate/InterestRate.css";

const ReleaseOfProperty = () => {
  return (
    <div className="interest-rate-page">
      <h1 className="interest-title animate-pop-up">Release of Property</h1>
      <a href="/files/release-of-property.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
        <FaFilePdf className="pdf-icon" />
        <span>Release of Property</span>
      </a>
    </div>
  );
};

export default ReleaseOfProperty;
