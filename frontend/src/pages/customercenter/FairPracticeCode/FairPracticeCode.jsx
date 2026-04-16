import React from "react";
import "./FairPracticeCode.css";
import home3 from "../../../assets/images/home3.jpeg"; 

const FairPracticeCode = () => {
  return (
    <div className="fair-page">

      {/* Banner Section */}
      <div className="fair-banner animate-pop-up">
        <img src={home3} alt="Fair Practice Code" />
        <div className="fair-overlay">
          <h1 className="animate-pop-up">Fair Practice Code</h1>
        </div>
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
