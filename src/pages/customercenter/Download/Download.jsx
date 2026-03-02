import React from "react";
import "./Download.css";
import home3 from "../../../assets/images/home3.jpeg"; 

const Download = () => {
  return (
    <div className="download-page">

      {/* Banner */}
      <div className="download-banner">
        <img src={home3} alt="Download" />
        <div className="download-overlay">
          <h1>Download</h1>
        </div>
      </div>

      {/* Content */}
      <div className="download-content">

        <div className="download-links">
          <a href="/files/application-form.pdf" target="_blank">Application Form</a>
          <a href="/files/ecs-mandate-form.pdf" target="_blank">ECS Mandate Form</a>
        <h3 className="downtit"> MITC (Most Important Terms & Conditions) </h3>

          <a href="/files/mitc-nonhl-en.pdf" target="_blank">MITC – Non HL (English)</a>
          <a href="/files/mitc-hl-en.pdf" target="_blank">MITC – HL (English)</a>

          <a href="/files/mitc-hl-ka.pdf" target="_blank">MITC – HL (Kannada)</a>
          <a href="/files/mitc-nonhl-ka.pdf" target="_blank">MITC – Non HL (Kannada)</a>

          <a href="/files/mitc-hl-te.pdf" target="_blank">MITC – HL (Telugu)</a>
          <a href="/files/mitc-nonhl-te.pdf" target="_blank">MITC – Non HL (Telugu)</a>

          <a href="/files/mitc-hl-ta.pdf" target="_blank">MITC – HL (Tamil)</a>
          <a href="/files/mitc-nonhl-ta.pdf" target="_blank">MITC – Non HL (Tamil)</a>

          <a href="/files/mitc-hl-mr.pdf" target="_blank">MITC – HL (Marathi)</a>
          <a href="/files/mitc-nonhl-mr.pdf" target="_blank">MITC – Non HL (Marathi)</a>

          <a href="/files/consumer-education.pdf" target="_blank">Consumer Education Literature</a>
          <a href="/files/enach-bankcode.pdf" target="_blank">E-NACH – Net Banking & Debit Card Bank Code</a>
          <a href="/files/release-of-property.pdf" target="_blank">Release of Property</a>
          <a href="/files/risk-based-pricing-grid.pdf" target="_blank">Risk Based Pricing Grid</a>
        </div>

      </div>
    </div>
  );
};

export default Download;
