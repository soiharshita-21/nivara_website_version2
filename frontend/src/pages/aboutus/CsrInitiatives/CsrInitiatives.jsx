import React, { useState } from "react";
import "./CsrInitiatives.css";
import { FaDownload } from "react-icons/fa";

// CSR Illustration
import csr from "../../../assets/images/CSR/csr.png";

// Healthcare images – mobile health camps & eye camps
import hc_wide1  from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-11.16.06-AM (1).webp";   // wide camp scene
import hc_wide2  from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-1.05.01-PM (1).jpeg";    // camp staff standing
import hc_sm1   from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-11.16.07-AM (1).webp";   // equipment table
import hc_sm2   from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-11.16.07-AM-1 (1).webp"; // doctor + patient
import hc_sm3   from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-11.16.07-AM-2 (1).webp"; // glasses distribution
import hc_sm4   from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-11.16.08-AM-2 (1).webp"; // eye machine AR-9
import hc_sm5   from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-11.16.09-AM (1).webp";   // medicines table
import hc_sm6   from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-11.16.09-AM-1 (1).webp"; // school eye camp 1
import hc_sm7   from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-11.16.09-AM-2 (1).webp"; // school eye camp 2
import hc_sm8   from "../../../assets/images/CSR/CSR-Medical-Camp.webp";                                // doctor checking child eyes
import hc_sm9   from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-1.05.00-PM (1).jpeg";   // inauguration bouquet
import hc_sm10  from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-11.16.06-AM-2 (1).webp";// blood screening outdoor
import hc_sm11  from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-11.16.06-AM-3 (1).webp";// people queueing

// Education images
import edu1 from "../../../assets/images/CSR/WhatsApp-Image-2026-02-06-at-4.21.35-PM.webp";
import edu2 from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-1.05.01-PM-1 (1).jpeg";
import edu3 from "../../../assets/images/CSR/WhatsApp-Image-2026-01-24-at-1.05.01-PM-2 (1).jpeg";

// Community images
import comm1 from "../../../assets/images/CSR/gall.png";
import comm2 from "../../../assets/images/CSR/WhatsApp-Image-2026-02-23-at-2.51.01-PM.webp";
import comm3 from "../../../assets/images/CSR/WhatsApp-Image-2026-02-23-at-2.51.01-PM-1.webp";
import comm4 from "../../../assets/images/CSR/WhatsApp-Image-2026-02-23-at-5.57.12-PM-1.webp";

const TABS = ["Overview", "Healthcare", "Education", "Community", "CSR Approved Projects"];

const CsrInitiatives = () => {
  const [activeTab, setActiveTab] = useState("Overview");

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

          {/* CSR Illustration */}
          <div className="csr-illustration-wrap">
            <img src={csr} alt="Corporate Social Responsibility" className="csr-illustration" />
          </div>

          {/* Commitment section */}
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
        <div className="csr-tab-content">
          <div className="csr-commitment">
            <h2>Healthcare &amp; Wellness</h2>
            <p>
              Conducted mobile health camps across multiple locations, benefiting over 750+ individuals
              through health screenings. Identified critical needs such as vision care and blood
              pressure management. Organised in-house eye camps at government schools for early
              detection and improved eye health among children.
            </p>
          </div>
          <div className="csr-collage">
            {/* Row 1 */}
            <div className="collage-row row-3">
              <img src={hc_sm11} alt="Health camp queue" />
              <img src={hc_wide2} alt="Camp staff inauguration" />
              <img src={hc_sm8}  alt="Doctor checking child eyes" />
            </div>
            {/* Row 2 */}
            <div className="collage-row row-3">
              <img src={hc_sm10} alt="Outdoor blood screening" />
              <img src={hc_wide1} alt="Health camp wide view" />
              <img src={hc_sm6}  alt="School eye camp" />
            </div>
            {/* Row 3 */}
            <div className="collage-row row-3-mid">
              <img src={hc_sm9}  alt="Camp inauguration bouquet" />
              <img src={hc_sm4}  alt="Eye machine AR-9 check" />
              <img src={hc_sm7}  alt="School eye camp 2" />
            </div>
 
          </div>
        </div>
      )}

      {/* ══════════════════ EDUCATION TAB ══════════════════ */}
      {activeTab === "Education" && (
        <div className="csr-tab-content">
          <div className="csr-commitment">
            <h2>Educational Support</h2>
            <p>
              Supported Akshaya Trust School with classroom furniture for underprivileged children.
              Partnered with CLIP People Foundation to provide benches for students from economically
              weaker sections. Worked with Sai Krushna Charitable Trust to install digital notice
              boards for schools and skill development centers.
            </p>
          </div>
          <div className="csr-photo-grid">
            {[edu1, edu2, edu3].map((src, i) => (
              <div key={i} className="csr-photo-card">
                <img src={src} alt={`Education activity ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════ COMMUNITY TAB ══════════════════ */}
      {activeTab === "Community" && (
        <div className="csr-tab-content">
          <div className="csr-commitment">
            <h2>Community Welfare</h2>
            <p>
              Partnered with AiR Humanitarian Homes, Bengaluru, contributing essential supplies
              supporting destitute individuals. Supported Akshaya Trust Old Age Homes with
              infrastructure improvements. Contributed to Sivananda Saraswathi Sevashram for
              facility upgrades benefiting orphans, women, and elderly residents.
            </p>
          </div>
          <div className="csr-photo-grid">
            {[comm1, comm2, comm3, comm4].map((src, i) => (
              <div key={i} className="csr-photo-card">
                <img src={src} alt={`Community activity ${i + 1}`} loading="lazy" />
              </div>
            ))}
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

    </div>
  );
};

export default CsrInitiatives;
