import React from "react";
import { FaFilePdf } from "react-icons/fa";
import "../InterestRate/InterestRate.css";

const EcsMandate = () => {
  return (
    <div className="interest-rate-page">
      <h1 className="interest-title animate-pop-up">ECS Mandate</h1>
      <a href="/files/ecs-mandate-form.jpg" target="_blank" rel="noopener noreferrer" className="download-btn">
        <FaFilePdf className="pdf-icon" />
        <span>ECS Mandate Form</span>
      </a>
    </div>
  );
};

export default EcsMandate;
