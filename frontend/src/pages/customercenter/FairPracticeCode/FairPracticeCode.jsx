import React from "react";
import "./FairPracticeCode.css";
import { ShieldCheck } from 'lucide-react';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import home3 from "../../../assets/images/fair practice code.png";

const FairPracticeCode = () => {
  return (
    <div className="fair-page">

      {/* Hero Section */}
      <div className="fair-hero" style={{ backgroundImage: `url(${home3})` }}>
        <div className="hero-overlay"></div>
        <ScrollReveal direction="down" distance={30} className="hero-content-wrapper">
          <div className="hero-badge">
            <ShieldCheck size={16} />
            <span>NHB Compliance</span>
          </div>
          <h1 className="fair-title">Fair Practice Code</h1>
          <p className="hero-subtitle">Promoting good and fair practices in housing finance</p>
        </ScrollReveal>
      </div>

      {/* Content Section */}
      <div className="fair-content animate-pop-up">

        <p>
          The National Housing Bank has framed guidelines on a Fair Practices Code for
          Housing Finance Companies (HFCs). The Code seeks to promote good and fair
          practices by setting minimum standards in dealing with customers, increase
          transparency so that the customer can have a better understanding of what
          he / she can reasonably expect of the services.
        </p>

        <p>
          Based on these guidelines, Nivara has formulated a suitable Fair Practice Code,
          whose details are outlined in this section.
        </p>

        <h3 className="animate-pop-up">Fair Practice Code Documents</h3>

        <div className="fair-links">
          <a href="/files/fpc-english.pdf" target="_blank" rel="noreferrer">Fair Practice Code English</a>
          <a href="/files/fpc-kannada.pdf" target="_blank" rel="noreferrer">Fair Practice Code Kannada</a>
          <a href="/files/fpc-telugu.pdf" target="_blank" rel="noreferrer">Fair Practice Code Telugu</a>
          <a href="/files/fpc-marathi.pdf" target="_blank" rel="noreferrer">Fair Practice Code Marathi</a>
          <a href="/files/fpc-tamil.pdf" target="_blank" rel="noreferrer">Fair Practice Code Tamil</a>
        </div>

      </div>
    </div>
  );
};

export default FairPracticeCode;
