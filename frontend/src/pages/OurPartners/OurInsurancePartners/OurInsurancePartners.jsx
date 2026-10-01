import React from "react";
import len from "../../../assets/images/lender and partners.png";
import "./OurInsurancePartners.css";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

import pramerica from "../../../assets/images/partners/pramerica.png";
import Adityabirla from "../../../assets/images/partners/adityabirla.png";
import icicilam from "../../../assets/images/partners/icicilam.png";
import digit from "../../../assets/images/partners/godigit.jpg";
import creditaccesslife from "../../../assets/images/partners/creditaccesslife.png";
import kotaklifeinsurnace from "../../../assets/images/partners/kotaklifeinsurnace.jpg";
import digitlifeinsurnace from "../../../assets/images/partners/digitlifeinsurnace.jpg";

const partners = [
  {
    name: "Pramerica Life Insurance",
    image: pramerica,
    link: "https://www.pramericalife.in/",
  },
  {
    name: "Kotak Life",
    image: kotaklifeinsurnace,
    link: "https://www.kotaklife.com/",
  },
  {
    name: "Aditya Birla Capital Health Insurance",
    image: Adityabirla,
    link: "https://www.careinsurance.com/",
  },
  {
    name: "ICICI Lombard",
    image: icicilam,
    link: "https://www.iciciprulife.com/",
  },
  {
    name: "Digit Life Insurance",
    image: digitlifeinsurnace,
    link: "https://www.godigit.com/life-insurance/",
  },
  {
    name: "Go Digit General Insurance",
    image: digit,
    link: "https://www.godigit.com/",
  },
  {
    name: "CreditAccess Life",
    image: creditaccesslife,
    link: "https://creditaccesslife.com/",
  },
];

const OurInsurancePartners = () => {
  return (
    <div className="insurance-page">

      {/* Banner */}
      <ScrollReveal direction="down">
        <section className="page-banner" style={{ backgroundImage: `url(${len})` }}>
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
          {partners.map((partner, index) => (
            <ScrollReveal direction="up" delay={(index % 4) * 0.1} key={index}>
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`insurance-card ${partner.className || ""}`}
                title={`Visit ${partner.name}`}
              >
                {partner.image ? (
                  <img src={partner.image} alt={partner.name} />
                ) : (
                  <span className="insurance-card-name">{partner.name}</span>
                )}
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>

    </div>
  );
};

export default OurInsurancePartners;

