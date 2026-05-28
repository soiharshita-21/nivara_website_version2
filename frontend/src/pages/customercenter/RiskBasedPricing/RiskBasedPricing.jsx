import React from "react";
import { FaFilePdf } from "react-icons/fa";
import "../InterestRate/InterestRate.css";

const RiskBasedPricing = () => {
  return (
    <div className="interest-rate-page">
      <h1 className="interest-title animate-pop-up">Risk Based Pricing</h1>
      <a href="/files/risk-based-pricing-grid.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
        <FaFilePdf className="pdf-icon" />
        <span>Risk Based Pricing Grid</span>
      </a>
    </div>
  );
};

export default RiskBasedPricing;
