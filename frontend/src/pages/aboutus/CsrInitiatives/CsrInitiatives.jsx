import React, { useState } from "react";
import "./CsrInitiatives.css";
import { FaDownload } from "react-icons/fa";

// Images from CSR2 folder
import csrOverview from "../../../assets/images/CSR2/Corporate-Social-Responsibility.webp";

// Healthcare images
import hcMain from "../../../assets/images/CSR2/Picture1.png";
import hc1 from "../../../assets/images/CSR2/WhatsApp-Image-2026-01-24-at-11.16.08-AM-2 (1).webp";
import hc2 from "../../../assets/images/CSR2/WhatsApp-Image-2026-02-23-at-5.57.12-PM-1.webp";
import hc3 from "../../../assets/images/CSR2/WhatsApp-Image-2026-02-23-at-2.51.03-PM-1.webp";
import hc4 from "../../../assets/images/CSR2/WhatsApp-Image-2026-02-23-at-2.51.01-PM-1.webp";
import hc5 from "../../../assets/images/CSR2/WhatsApp-Image-2026-02-23-at-2.51.01-PM.webp";
import hc6 from "../../../assets/images/CSR2/WhatsApp-Image-2026-02-06-at-4.21.35-PM.webp";
import hc7 from "../../../assets/images/CSR2/CSR-Medical-Camp.webp";

// Education images
import eduMain from "../../../assets/images/CSR2/Picture5.png";
import edu1 from "../../../assets/images/CSR2/Picture6.png";
import edu2 from "../../../assets/images/CSR2/Picture7.png";

// Community images
import commMain from "../../../assets/images/CSR2/Picture4.png";
import comm1 from "../../../assets/images/CSR2/Picture3.png";
import comm2 from "../../../assets/images/CSR2/Picture2.png";

const TABS = ["Overview", "Healthcare", "Education", "Community", "CSR Approved Projects"];

const CsrInitiatives = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [popupData, setPopupData] = useState({ isOpen: false, images: [], index: 0 });

  const openPopup = (images) => {
    setPopupData({ isOpen: true, images, index: 0 });
  };

  const closePopup = () => {
    setPopupData({ isOpen: false, images: [], index: 0 });
  };

  const nextImage = () => {
    setPopupData(prev => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  };

  const prevImage = () => {
    setPopupData(prev => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  };

  const selectImage = (idx) => {
    setPopupData(prev => ({
      ...prev,
      index: idx
    }));
  };

  return (
    <div className="csr-page">
      {/* ── HEADER ── */}
      <div className="csr-header">
        <h1>Corporate Social Responsibility (CSR) – FY 2025–26</h1>
        <p className="csr-header-sub">
          Nivara Housing remains committed to creating sustainable social impact through focused CSR
          initiatives in healthcare, education, and community welfare. During FY 2025–26, the company
          has contributed to multiple programs aimed at improving the quality of life for underserved
          communities.
        </p>

        {/* ── TABS ── */}
        <div className="csr-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`csr-tab-btn${activeTab === tab ? " active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════ OVERVIEW TAB ══════════════════ */}
      {activeTab === "Overview" && (
        <div className="csr-tab-content">
          <div className="csr-main-img-wrap">
            <img src={csrOverview} alt="CSR Overview" className="csr-main-img" />
          </div>
          <div className="csr-commitment">
            <h2>Commitment to Inclusive Growth</h2>
            <p>
              All CSR initiatives are aligned with Schedule VII of the Companies Act, 2013, focusing
              on promoting education, healthcare, skill development, and support for socially and
              economically disadvantaged groups.
            </p>
          </div>
        </div>
      )}

      {/* ══════════════════ HEALTHCARE TAB ══════════════════ */}
      {activeTab === "Healthcare" && (
        <div className="csr-tab-content text-center">
          <div className="csr-main-img-wrap">
            <img src={hcMain} alt="Healthcare" className="csr-main-img" />
          </div>
          <div className="csr-commitment">
            <ul className="csr-bullet-list">
              <li>Conducted mobile health camps across multiple locations, benefiting over 750+ individuals through health screenings.</li>
              <li>Identified critical needs such as vision care and blood pressure management, supporting beneficiaries with further care.</li>
              <li>Organized in-house eye camps at government schools to promote early detection and improved eye health among children.</li>
            </ul>
            <button className="csr-btn" onClick={() => openPopup([hc1, hc2, hc3, hc4, hc5, hc6, hc7])}>
              View Images
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════ EDUCATION TAB ══════════════════ */}
      {activeTab === "Education" && (
        <div className="csr-tab-content text-center">
          <div className="csr-main-img-wrap">
            <img src={eduMain} alt="Education" className="csr-main-img" />
          </div>
          <div className="csr-commitment">
            <ul className="csr-bullet-list">
              <li>Supported Akshaya Trust School with classroom furniture for underprivileged children</li>
              <li>Partnered with CLIP People Foundation to provide benches for students from economically weaker sections</li>
              <li>Worked with Sai Krushna Charitable Trust to install digital notice boards for schools and skill development centers</li>
            </ul>
            <button className="csr-btn" onClick={() => openPopup([edu1, edu2])}>
              View Images
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════ COMMUNITY TAB ══════════════════ */}
      {activeTab === "Community" && (
        <div className="csr-tab-content text-center">
          <div className="csr-main-img-wrap">
            <img src={commMain} alt="Community" className="csr-main-img" />
          </div>
          <div className="csr-commitment">
            <ul className="csr-bullet-list">
              <li>Partnered with AiR Humanitarian Homes, Bengaluru, contributing for essential supplies supporting destitute individuals.</li>
              <li>Supported Akshaya Trust Old Age Homes with infrastructure improvements to enhance the living conditions of senior citizens</li>
              <li>Contributed to Sivananda Saraswathi Sevashram for facility upgrades benefiting orphans, women, and elderly residents.</li>
            </ul>
            <button className="csr-btn" onClick={() => openPopup([comm1, comm2])}>
              View Images
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════ CSR APPROVED PROJECTS TAB ══════════════════ */}
      {activeTab === "CSR Approved Projects" && (
        <div className="csr-tab-content">
          <div className="csr-commitment">
            <h2>CSR Approved Projects &amp; Disclosures</h2>
            <p>
              Access our transparent governance documents and approved social project checklists for
              FY 2025–26.
            </p>
            <a
              href="/files/CSR-Approved-Projects-2025-26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="csr-download-btn"
            >
              <FaDownload />
              <span>CSR Approved Projects 2025-26</span>
            </a>
          </div>
        </div>
      )}

      {/* ══════════════════ POPUP MODAL (LIGHTBOX) ══════════════════ */}
      {popupData.isOpen && (
        <div className="csr-popup active" onClick={closePopup}>
          <div className="csr-popup-box" onClick={(e) => e.stopPropagation()}>
            <span className="csr-close" onClick={closePopup}>✕</span>
            <img src={popupData.images[popupData.index]} alt="CSR Popup View" id="csrMainImg" />
            <div className="csr-nav">
              <button onClick={prevImage}>⬅ Prev</button>
              <button onClick={nextImage}>Next ➡</button>
            </div>
            <div className="csr-thumbs" id="csrThumbs">
              {popupData.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className={i === popupData.index ? "active" : ""}
                  onClick={() => selectImage(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CsrInitiatives;
