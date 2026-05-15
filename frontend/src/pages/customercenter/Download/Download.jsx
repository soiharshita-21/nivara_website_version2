import React from "react";
import "./Download.css";
import download from "../../../assets/images/download.png"

import { FaRegFilePdf, FaDownload } from "react-icons/fa";
import { ShieldCheck } from 'lucide-react';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';

const Download = () => {
  return (
    <div className="download-page">

      {/* Hero Section */}
      <div className="download-hero" style={{ backgroundImage: `url(${download})` }}>
        <div className="page-banner-overlay"></div>
        <ScrollReveal direction="down" distance={30} className="hero-content-wrapper">
          <h1 className="page-banner-title">Download <span className="text-red">Center</span></h1>
          <p className="page-banner-subtitle">Access all our forms and important documents in one place</p>
        </ScrollReveal>
      </div>

      {/* Content */}
      <div className="download-content animate-pop-up">

        {/* Section 1: General Forms */}
        <div className="download-category">
          <h2>General Forms</h2>
          <div className="download-grid">
            <a href="/files/application-form.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>Application Form</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/ecs-mandate-form.jpg" target="_blank" rel="noopener noreferrer" className="download-card">
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
            <a href="/files/mitc-english.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – HL (English)</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/mitc-english.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – Non HL (English)</span>
              <FaDownload className="dl-icon" />
            </a>

            <a href="/files/mitc-kannada.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – HL (Kannada)</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/mitc-kannada.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – Non HL (Kannada)</span>
              <FaDownload className="dl-icon" />
            </a>

            <a href="/files/mitc-telugu.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – HL (Telugu)</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/mitc-telugu.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – Non HL (Telugu)</span>
              <FaDownload className="dl-icon" />
            </a>

            <a href="/files/mitc-tamil.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – HL (Tamil)</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/mitc-tamil.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – Non HL (Tamil)</span>
              <FaDownload className="dl-icon" />
            </a>

            <a href="/files/mitc-marathi.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>MITC – HL (Marathi)</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/mitc-marathi.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
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
            <a href="/files/consumer-education.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>Consumer Education Literature</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/enach-bankcode.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>E-NACH – Net Banking & Debit Card Bank Code</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/release-of-property.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>Release of Property</span>
              <FaDownload className="dl-icon" />
            </a>
            <a href="/files/risk-based-pricing-grid.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
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