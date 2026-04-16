import React from "react";
import "./Download.css";
import home3 from "../../../assets/images/home3.jpeg";

import { FaRegFilePdf, FaDownload } from "react-icons/fa";

const Download = () => {
  return (
    <div className="download-page">

      {/* Banner */}
      <div className="download-banner animate-pop-up">
        <img src={home3} alt="Download" />
        <div className="download-overlay">
          <h1 className="animate-pop-up">Download Center</h1>
        </div>
      </div>

      {/* Content */}
      <div className="download-content animate-pop-up">

        {/* Section 1: General Forms */}
        <div className="download-category">
          <h2>General Forms</h2>
          <div className="download-grid">
            <a href="/files/application-form.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>Application Form</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/ecs-mandate-form.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>ECS Mandate Form</span>
              <FaDownload className="dl-icon" />
            </a>
          </div>
        </div>

        {/* Section 2: MITC */}
        <div className="download-category">
          <h2>Most Important Terms & Conditions (MITC)</h2>
          <div className="download-grid">
            <a href="/files/mitc-hl-en.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – HL (English)</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/mitc-nonhl-en.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – Non HL (English)</span>
              <FaDownload className="dl-icon" />
            </a>

            <a href="/files/mitc-hl-ka.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – HL (Kannada)</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/mitc-nonhl-ka.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – Non HL (Kannada)</span>
              <FaDownload className="dl-icon" />
            </a>

            <a href="/files/mitc-hl-te.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – HL (Telugu)</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/mitc-nonhl-te.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – Non HL (Telugu)</span>
              <FaDownload className="dl-icon" />
            </a>

            <a href="/files/mitc-hl-ta.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – HL (Tamil)</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/mitc-nonhl-ta.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – Non HL (Tamil)</span>
              <FaDownload className="dl-icon" />
            </a>

            <a href="/files/mitc-hl-mr.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – HL (Marathi)</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/mitc-nonhl-mr.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – Non HL (Marathi)</span>
              <FaDownload className="dl-icon" />
            </a>
          </div>
        </div>

        {/* Section 3: Additional Resources */}
        <div className="download-category">
          <h2>Additional Resources</h2>
          <div className="download-grid">
            <a href="/files/consumer-education.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>Consumer Education Literature</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/enach-bankcode.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>E-NACH – Net Banking & Debit Card Bank Code</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/release-of-property.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>Release of Property</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/risk-based-pricing-grid.pdf" target="_blank" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>Risk Based Pricing Grid</span>
              <FaDownload className="dl-icon" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Download;