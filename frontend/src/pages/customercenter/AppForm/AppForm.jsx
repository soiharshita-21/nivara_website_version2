import React from "react";
import { FaFilePdf } from "react-icons/fa";
import "../InterestRate/InterestRate.css";

const AppForm = () => {
  return (
    <div className="interest-rate-page">
      <h1 className="interest-title animate-pop-up">Application Form</h1>
      <a href="/files/application-form.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
        <FaFilePdf className="pdf-icon" />
        <span>Application Form</span>
      </a>
    </div>
  );
};

export default AppForm;
