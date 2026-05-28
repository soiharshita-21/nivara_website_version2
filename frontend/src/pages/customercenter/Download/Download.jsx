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
        <div className="download-category">
          <h2>Download Center</h2>
          <p>
            Forms are now available from the relevant Customer Services modules. Use the menu to open the page matching the document you need.
          </p>
          <ul className="download-guidance-list">
            <li>E-NACH Mandate: E-NACH and ECS forms</li>
            <li>Interest Rates: Interest rate disclosures and risk based pricing</li>
            <li>EMI Calculator: EMI planning and payment information</li>
            <li>MITC: Most Important Terms and Conditions</li>
            <li>Fair Practice Code: Fair practice documents and consumer education literature</li>
            <li>Property & Recovery: Release of Property</li>
          </ul>
        </div>

        <div className="download-category">
          <h2>General Form</h2>
          <div className="download-grid">
            <a href="/files/application-form.pdf" target="_blank" rel="noopener noreferrer" className="download-card">
              <FaRegFilePdf className="pdf-icon" />
              <span>Application Form</span>
              <FaDownload className="dl-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;