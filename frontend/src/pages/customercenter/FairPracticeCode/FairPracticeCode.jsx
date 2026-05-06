import React from "react";
import "./FairPracticeCode.css";
import { ShieldCheck } from 'lucide-react';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import faircodepractice2 from "../../../assets/images/fairpracticecode2.png";

const FairPracticeCode = () => {
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
