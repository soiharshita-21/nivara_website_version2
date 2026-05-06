import React from "react";
import lenders2 from "../../../assets/images/lenders2.png";
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
        <section className="page-banner" style={{ backgroundImage: `url(${lenders2})` }}>
          <div className="page-banner-overlay"></div>
          <div className="page-banner-content">
            <h1 className="page-banner-title">
              Insurance <span className="text-red">Partners</span>
            </h1>
            <p className="page-banner-subtitle">
              Comprehensive protection for your home and family.
            </p>
          </div>
        </section>
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

