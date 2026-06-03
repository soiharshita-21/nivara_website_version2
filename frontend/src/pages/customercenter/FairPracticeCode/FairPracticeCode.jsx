import React from "react";
import "./FairPracticeCode.css";
import { ShieldCheck, FileText, Download } from 'lucide-react';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import faircodepractice2 from "../../../assets/images/fairpracticecode2.png";

const FairPracticeCode = () => {
  const documents = [
    { name: "Fair Practice Code English", path: "/files/fpc-english.pdf" },
    { name: "Fair Practice Code Kannada", path: "/files/fpc-kannada.pdf" },
    { name: "Fair Practice Code Telugu", path: "/files/fpc-telugu.pdf" },
    { name: "Fair Practice Code Marathi", path: "/files/fpc-marathi.pdf" },
    { name: "Fair Practice Code Tamil", path: "/files/fpc-tamil.pdf" },
  ];

  return (
    <div className="fair-page">

      {/* Hero Section */}
      <ScrollReveal direction="down">
        <section className="page-banner" style={{ backgroundImage: `url(${faircodepractice2})` }}>
          <div className="page-banner-overlay"></div>
          <div className="page-banner-content">
            <h1 className="page-banner-title">
              Fair Practice <span className="text-red">Code</span>
            </h1>
            <p className="page-banner-subtitle">
              Ensuring ethical and transparent dealings with all our customers.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Content Section */}
      <div className="fair-content">
        <ScrollReveal direction="up" distance={30} delay={0.1}>
          <p>
            The National Housing Bank has framed guidelines on a Fair Practices Code for
            Housing Finance Companies (HFCs). The Code seeks to promote good and fair
            practices by setting minimum standards in dealing with customers, increase
            transparency so that the customer can have a better understanding of what
            he / she can reasonably expect of the services.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={30} delay={0.2}>
          <p>
            Based on these guidelines, Nivara has formulated a suitable Fair Practice Code,
            whose details are outlined in this section.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={30} delay={0.3}>
          <h3>Fair Practice Code Documents</h3>
        </ScrollReveal>

        <div className="fair-links">
          {documents.map((doc, index) => (
            <ScrollReveal key={index} direction="up" distance={20} delay={index * 0.05}>
              <a 
                href={doc.path} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="fair-doc-row"
              >
                <div className="doc-info">
                  <FileText className="doc-icon" size={20} />
                  <span className="doc-link">{doc.name}</span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FairPracticeCode;
