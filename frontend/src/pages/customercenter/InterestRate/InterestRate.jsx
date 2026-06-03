import React from "react";
import { FaFilePdf } from "react-icons/fa";
import "./InterestRate.css";

const InterestRate = () => {
  return (
    <div className="interest-rate-page animate-fade-in">
      <h1 className="interest-title animate-pop-up">Interest Rate</h1>

      <div className="roi-cards-container">
        {/* Card 1 - Individual Housing Loan */}
        <div className="roi-card">
          <div className="roi-card-header">
            Individual Housing Loan Disbursed
            <span className="roi-date">(Jan 2026 – Mar 2026)</span>
          </div>
          <div className="roi-card-body">
            <div className="roi-row">
              <div className="roi-label">Minimum ROI</div>
              <div className="roi-value">10.70%</div>
            </div>
            <div className="roi-row">
              <div className="roi-label">Maximum ROI</div>
              <div className="roi-value">22.00%</div>
            </div>
            <div className="roi-row">
              <div className="roi-label">Mean ROI</div>
              <div className="roi-value">17.90%</div>
            </div>
            <div className="roi-note">
              *Note: The Min and Max range may vary based on Company's internal policy.
            </div>
          </div>
        </div>

        {/* Card 2 - Individual Non-Housing Loan */}
        <div className="roi-card">
          <div className="roi-card-header">
            Individual Non-Housing Loan Disbursed
            <span className="roi-date">(Jan 2026 – Mar 2026)</span>
          </div>
          <div className="roi-card-body">
            <div className="roi-row">
              <div className="roi-label">Minimum ROI</div>
              <div className="roi-value">12.00%</div>
            </div>
            <div className="roi-row">
              <div className="roi-label">Maximum ROI</div>
              <div className="roi-value">24.50%</div>
            </div>
            <div className="roi-row">
              <div className="roi-label">Mean ROI</div>
              <div className="roi-value">20.73%</div>
            </div>
            <div className="roi-note">
              *Note: The Min and Max range may vary based on Company's internal policy.
            </div>
          </div>
        </div>
      </div>

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

