import React from "react";
import home3 from "../../../assets/images/home3.jpeg";
import "./OurInsurancePartners.css";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

import kotak from "../../../assets/images/kotak.png";
import pramerica from "../../../assets/images/pramerica.png";
import Adityabirla from "../../../assets/images/adityabirla.png";
import icicilam from "../../../assets/images/icicilam.png";
import digit from "../../../assets/images/digit.png";

const partners = [
  kotak,
  pramerica,
  Adityabirla,
  icicilam,
  digit
];

const OurInsurancePartners = () => {
  return (
    <div className="insurance-page">

      {/* Banner */}
      <ScrollReveal direction="down">
        <div className="insurance-banner">
          <img src={home3} alt="Our Insurance Partners" />
          <div className="insurance-overlay">
            <h1 className="banner-title">Our Insurance Partners</h1>
          </div>
        </div>
      </ScrollReveal>

      {/* Partners Grid */}
      <div className="insurance-grid-container">
        <div className="insurance-grid">
          {partners.map((img, index) => (
            <ScrollReveal direction="up" delay={(index % 4) * 0.1} key={index}>
              <div className="insurance-card">
                <img src={img} alt={`partner-${index}`} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

    </div>
  );
};

export default OurInsurancePartners;

