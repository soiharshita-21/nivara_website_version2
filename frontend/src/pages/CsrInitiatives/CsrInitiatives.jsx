import React from "react";
import "./CsrInitiatives.css";
import { FaHeart, FaGraduationCap, FaHospitalUser, FaDownload } from "react-icons/fa";

const CsrInitiatives = () => {
  return (
    <div className="csr-page">
      <section className="csr-banner">
        <div className="csr-container">
          <h1>CSR Initiatives</h1>
          <p>Driving positive change across education, healthcare & communities.</p>
        </div>
      </section>

      <section className="csr-content-section">
        <div className="csr-content-container">
          <div className="csr-intro-card">
            <div className="csr-icon-circle">
              <FaHeart />
            </div>
            <h2>Our Commitment to Society</h2>
            <p>
              At Nivara, we believe in creating meaningful social impact through structured CSR initiatives focused on education, healthcare, and community empowerment. We strive to empower underserved communities and drive sustainable development.
            </p>
          </div>

          <div className="csr-focus-grid">
            <div className="csr-focus-card">
              <FaGraduationCap />
              <h3>Education</h3>
              <p>Supporting schools and educational programs to provide quality learning opportunities for children from economically weaker sections.</p>
            </div>

            <div className="csr-focus-card">
              <FaHospitalUser />
              <h3>Healthcare</h3>
              <p>Organizing health camps, preventive care awareness, and providing medical support for underserved communities.</p>
            </div>
          </div>

          <div className="csr-reports-section">
            <h3>CSR Reports & Disclosures</h3>
            <div className="reports-grid">
              <a href="/csr/CSR_Report_2026.pdf" target="_blank" rel="noopener noreferrer" className="report-link">
                <FaDownload /> CSR Report 2026
              </a>
              <a href="/csr/Impact_Summary_2026.pdf" target="_blank" rel="noopener noreferrer" className="report-link">
                <FaDownload /> Impact Summary 2026
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CsrInitiatives;
