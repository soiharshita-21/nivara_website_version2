import React from "react";
import "./Lenders.css";
import len from "../../../assets/images/lender and partners.png";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

import img8 from "../../../assets/images/lenders/8.jpg";
import auB from "../../../assets/images/lenders/au-b.jpg";
import bj from "../../../assets/images/lenders/bj.jpg";
import bandhanB from "../../../assets/images/lenders/badhan-b.jpg";
import csbBankNew from "../../../assets/images/lenders/csb-bank-new.jpg";
import federalB from "../../../assets/images/lenders/federal-b.jpg";
import iciciBank1 from "../../../assets/images/lenders/icici-bank-1.png";
import iob2j from "../../../assets/images/lenders/iob2j.jpg";
import kot1 from "../../../assets/images/lenders/kot1 (1).jpg";
import mas from "../../../assets/images/lenders/mas.jpg";
import mhfl1 from "../../../assets/images/lenders/mhfl-1.jpg";
import nhb from "../../../assets/images/lenders/nhb.jpg";
import piramal from "../../../assets/images/lenders/piramal.jpg";
import sbi from "../../../assets/images/lenders/sbi.jpg";
import sf from "../../../assets/images/lenders/sf.jpg";
import utkarshSmallFinanceBank from "../../../assets/images/lenders/utakarsh-small-finance-bank.jpg";
import heroHf1 from "../../../assets/images/lenders/hero-hf (1).jpg";
import hhf1 from "../../../assets/images/lenders/hhf-1.jpg";
import idfc from "../../../assets/images/lenders/idfc.jpg";
import yes from "../../../assets/images/lenders/yes.jpg";

const lenders = [
  nhb, sbi, iob2j, iciciBank1, kot1, federalB, auB, bandhanB, csbBankNew,
  utkarshSmallFinanceBank, yes, bj, hhf1, heroHf1, mas, mhfl1, piramal, img8, sf, idfc
];

const Lenders = () => {
  return (
    <div className="lenders-page">
      {/* Banner */}
      <ScrollReveal direction="down">
        <section
          className="page-banner"
          style={{
            backgroundImage: `url(${len})`,
          }}
        >
          <div className="page-banner-overlay"></div>
          <div className="page-banner-content">
            <h1 className="page-banner-title">
              Our <span className="text-red">Lenders</span>
            </h1>
            <p className="page-banner-subtitle">
              Strong financial partnerships enabling affordable housing.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Lenders Grid */}
      <div className="lenders-grid-container">
        <div className="lenders-grid">
          {lenders.map((logo, index) => (
            <ScrollReveal direction="up" delay={(index % 4) * 0.1} key={index}>
              <div className="lender-card">
                <img src={logo} alt={`lender-${index}`} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lenders;


