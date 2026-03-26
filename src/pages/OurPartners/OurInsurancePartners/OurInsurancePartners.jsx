import React, { useEffect } from "react";
import home3 from "../../../assets/images/home3.jpeg";
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".animate-pop-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="insurance-page">

      {/* Banner */}
      <div className="insurance-banner animate-pop-up">
        <img src={home3} alt="Our Insurance Partners" />
        <h1 className="banner-title animate-pop-up">Our Insurance Partners</h1>
      </div>

      {/* Cards */}
      <div className="partners-section animate-pop-up">
        {partners.map((img, index) => (
          <div className="partner-card animate-pop-up" key={index}>
            <img src={img} alt={`partner-${index}`} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default OurInsurancePartners;

