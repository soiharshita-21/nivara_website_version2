import React from "react";
import "./PublicDisclosure.css";
import { ShieldCheck, FileText } from 'lucide-react';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import home3 from "../../../assets/images/public disclosure.png";
import pb1 from "../../../assets/images/publicdisclosure1.png";
import pb2 from "../../../assets/images/saf.png";
const PublicDisclosure = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <div className="public-hero" style={{ backgroundImage: `url(${home3})` }}>
        <div className="page-banner-overlay"></div>
        <ScrollReveal direction="down" distance={30} className="hero-content-wrapper">

          {/* Badge on top */}
          {/* <div className="hero-badge">
            <ShieldCheck size={16} />
            <span>Regulatory Disclosure</span>
          </div> */}

          <h1 className="page-banner-title">
            Public <span className="text-red">Disclosure</span>
          </h1>

          <p className="page-banner-subtitle">
            Transparency and regulatory compliance in housing finance
          </p>

        </ScrollReveal>
      </div>

      {/* Content */}
      <div className="public-content animate-pop-up">

        <p className="public-note">
          All documents are available for download. Click a document name to open or download.
        </p>

        {/* Grid Container */}
        <div className="public-grid">

          {/* Public Disclosure Section */}
          <div className="public-card animate-pop-up">
            <div className="public-card-image">
              <img src={pb1} alt="Public Disclosure" />
            </div>
            <div className="public-card-content">
              <h2>Public Disclosure</h2>
              <div className="public-links">
                <a href="/files/pd-mar-2021.pdf" target="_blank">Public Disclosure March 2021</a>
                <a href="/files/pd-jun-2021.pdf" target="_blank">Public Disclosure June 2021</a>
                <a href="/files/pd-sep-2021.pdf" target="_blank">Public Disclosure September 2021</a>
                <a href="/files/pd-dec-2021.pdf" target="_blank">Public Disclosure December 2021</a>
                <a href="/files/pd-mar-2022.pdf" target="_blank">Public Disclosure March 2022</a>
                <a href="/files/pd-jun-2022.pdf" target="_blank">Public Disclosure June 2022</a>
                <a href="/files/pd-sep-2022.pdf" target="_blank">Public Disclosure September 2022</a>
                <a href="/files/pd-dec-2022.pdf" target="_blank">Public Disclosure December 2022</a>
                <a href="/files/pd-mar-2023.pdf" target="_blank">Public Disclosure March 2023</a>
                <a href="/files/pd-jun-2023.pdf" target="_blank">Public Disclosure June 2023</a>
                <a href="/files/pd-sep-2023.pdf" target="_blank">Public Disclosure September 2023</a>
                <a href="/files/pd-dec-2023.pdf" target="_blank">Public Disclosure December 2023</a>
                <a href="/files/pd-mar-2024.pdf" target="_blank">Public Disclosure March 2024</a>
                <a href="/files/pd-jun-2024.pdf" target="_blank">Public Disclosure June 2024</a>
                <a href="/files/pd-sep-2024.pdf" target="_blank">Public Disclosure September 2024</a>
                <a href="/files/pd-dec-2024.pdf" target="_blank">Public Disclosure December 2024</a>
                <a href="/files/pd-mar-2025.pdf" target="_blank">Public Disclosure March 2025</a>
                <a href="/files/pd-jun-2025.pdf" target="_blank">Public Disclosure June 2025</a>
                <a href="/files/pd-sep-2025.pdf" target="_blank">Public Disclosure September 2025</a>
                <a href="/files/pd-dec-2025.pdf" target="_blank">Public Disclosure December 2025</a>
              </div>
            </div>
          </div>

          {/* Sarfaesi Section */}
          <div className="public-card animate-pop-up">
            <div className="public-card-image">
              <img src={pb2} alt="Sarfaesi Attachments" />
            </div>
            <div className="public-card-content">
              <h2>SARFAESI Attachments</h2>
              <div className="public-links">
                <a href="/files/sarfaesi-31-aug-2025.pdf" target="_blank">
                  Updated list of properties under SARFAESI Act as on 31st August 2025
                </a>
                <a href="/files/sarfaesi-30-sep-2025.pdf" target="_blank">
                  Updated list of properties under SARFAESI Act as on 30th September 2025
                </a>
                <a href="/files/sarfaesi-31-oct-2025.pdf" target="_blank">
                  Updated list of properties under SARFAESI Act as on 31st October 2025 (1)
                </a>
                <a href="/files/sarfaesi-30-nov-2025.pdf" target="_blank">
                  Updated list of properties under SARFAESI Act as on 30th November 2025
                </a>
                <a href="/files/sarfaesi-31-dec-2025.pdf" target="_blank">
                  Updated list of properties under SARFAESI Act as on 31st December 2025
                </a>
                <a href="/files/sarfaesi-31-jan-2026.pdf" target="_blank">
                  Updated list of properties under SARFAESI Act as on 31st January 2026
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PublicDisclosure;