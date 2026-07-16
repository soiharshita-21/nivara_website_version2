import React from "react";
import "./PublicDisclosure.css";
import { FileText } from 'lucide-react';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import home3 from "../../../assets/images/public disclosure.png";
import pb1 from "../../../assets/images/publicdisclosure1.png";
import pb2 from "../../../assets/images/saf.png";

const PublicDisclosure = () => {
  const disclosures = [
    { name: "Public Disclosure March 2021", path: "/files/pd-mar-2021.pdf" },
    { name: "Public Disclosure June 2021", path: "/files/pd-jun-2021.pdf" },
    { name: "Public Disclosure September 2021", path: "/files/pd-sep-2021.pdf" },
    { name: "Public Disclosure December 2021", path: "/files/pd-dec-2021.pdf" },
    { name: "Public Disclosure March 2022", path: "/files/pd-mar-2022.pdf" },
    { name: "Public Disclosure June 2022", path: "/files/pd-jun-2022.pdf" },
    { name: "Public Disclosure September 2022", path: "/files/pd-sep-2022.pdf" },
    { name: "Public Disclosure December 2022", path: "/files/pd-dec-2022.pdf" },
    { name: "Public Disclosure March 2023", path: "/files/pd-mar-2023.pdf" },
    { name: "Public Disclosure June 2023", path: "/files/pd-jun-2023.pdf" },
    { name: "Public Disclosure September 2023", path: "/files/pd-sep-2023.pdf" },
    { name: "Public Disclosure December 2023", path: "/files/pd-dec-2023.pdf" },
    { name: "Public Disclosure March 2024", path: "/files/pd-mar-2024.pdf" },
    { name: "Public Disclosure June 2024", path: "/files/pd-jun-2024.pdf" },
    { name: "Public Disclosure September 2024", path: "/files/pd-sep-2024.pdf" },
    { name: "Public Disclosure December 2024", path: "/files/pd-dec-2024.pdf" },
    { name: "Public Disclosure March 2025", path: "/files/pd-mar-2025.pdf" },
    { name: "Public Disclosure June 2025", path: "/files/pd-jun-2025.pdf" },
    { name: "Public Disclosure September 2025", path: "/files/pd-sep-2025.pdf" },
    { name: "Public Disclosure December 2025", path: "/files/pd-dec-2025.pdf" },
    { name: "Public Disclosure March 2026", path: "/files/pd-mar-2026.pdf" },
    { name: "Public Disclosure June 2026", path: "/files/pd-jun-2026.pdf" },
  ];

  const sarfaesiDocs = [
    { name: "Updated list of properties under SARFAESI Act as on 31st August 2025", path: "/files/sarfaesi-aug-2025.pdf" },
    { name: "Updated list of properties under SARFAESI Act as on 30th September 2025", path: "/files/sarfaesi-sep-2025.pdf" },
    { name: "Updated list of properties under SARFAESI Act as on 31st October 2025", path: "/files/sarfaesi-oct-2025.pdf" },
    { name: "Updated list of properties under SARFAESI Act as on 30th November 2025", path: "/files/sarfaesi-nov-2025.pdf" },
    { name: "Updated list of properties under SARFAESI Act as on 31st December 2025", path: "/files/sarfaesi-dec-2025.pdf" },
    { name: "Updated list of properties under SARFAESI Act as on 31st January 2026", path: "/files/sarfaesi-jan-2026.pdf" },
    { name: "Updated list of properties under SARFAESI Act as on 28th February 2026", path: "/files/sarfaesi-feb-2026.pdf" },
    { name: "Updated list of properties under SARFAESI Act as on 31st March 2026", path: "/files/sarfaesi-mar-2026.pdf" },
    { name: "Updated list of properties under SARFAESI Act as on 30th April 2026",path: "/files/sarfaesi-apr-2026.pdf" },
    { name: "Updated list of properties under SARFAESI Act as on 31st May 2026",path: "/files/sarfaesi-may-2026.pdf"},
  ];

  return (
    <div className="public-page">

      {/* Hero Section */}
      <section className="page-banner public-page-banner" style={{ backgroundImage: `url(${home3})` }}>
        <div className="page-banner-overlay"></div>
        <ScrollReveal direction="down" distance={30} className="page-banner-content">
          <h1 className="page-banner-title">
            Public <span className="text-red">Disclosure</span>
          </h1>
          <p className="page-banner-subtitle">
            Transparency and regulatory compliance in housing finance
          </p>
        </ScrollReveal>
      </section>

      {/* Content */}
      <div className="public-content">

        <ScrollReveal direction="up" distance={30}>
          <p className="public-note">
            All documents are available for viewing and download. Click on any document card to open.
          </p>
        </ScrollReveal>

        {/* Grid Container */}
        <div className="public-grid">

          {/* Public Disclosure Section */}
          <ScrollReveal className="public-card" direction="up" distance={30} delay={0.1}>
            <div className="public-card-image">
              <img src={pb1} alt="Public Disclosure" />
            </div>
            <div className="public-card-content">
              <h2>Public Disclosure</h2>
              <div className="public-links">
                {disclosures.map((doc, index) => (
                  <a 
                    key={index} 
                    href={doc.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {doc.name}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Sarfaesi Section */}
          <ScrollReveal className="public-card" direction="up" distance={30} delay={0.2}>
            <div className="public-card-image">
              <img src={pb2} alt="Sarfaesi Attachments" />
            </div>
            <div className="public-card-content">
              <h2>SARFAESI Attachments</h2>
              <div className="public-links">
                {sarfaesiDocs.map((doc, index) => (
                  <a 
                    key={index} 
                    href={doc.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {doc.name}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </div>
  );
};

export default PublicDisclosure;