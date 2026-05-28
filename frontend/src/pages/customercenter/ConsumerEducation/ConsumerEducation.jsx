import React from "react";
import { FaFilePdf } from "react-icons/fa";
import "../InterestRate/InterestRate.css";

const ConsumerEducation = () => {
  return (
    <div className="interest-rate-page">
      <h1 className="interest-title animate-pop-up">Consumer Education Literature</h1>
      <a href="/files/consumer-education.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
        <FaFilePdf className="pdf-icon" />
        <span>Consumer Education Literature</span>
      </a>
    </div>
  );
};

export default ConsumerEducation;
