import React from "react";
import home from "../../../assets/images/home.jpg";
import "./OurInsurancePartners.css";

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
      <div className="insurance-banner">
        <img src={home} alt="Our Insurance Partners" />
        <h1 className="banner-title">Our Insurance Partners</h1>
      </div>

      {/* Cards */}
      <div className="partners-section">
        {partners.map((img, index) => (
          <div className="partner-card" key={index}>
            <img src={img} alt={`partner-${index}`} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default OurInsurancePartners;

