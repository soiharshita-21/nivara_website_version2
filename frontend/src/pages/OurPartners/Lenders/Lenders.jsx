import React from "react";
import "./Lenders.css";
import home3 from "../../../assets/images/home3.jpeg"; 
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

import img8 from "../../../assets/images/Lenders/8.jpg";
import auB from "../../../assets/images/Lenders/AU-B.jpg";
import bj from "../../../assets/images/Lenders/BJ.jpg";
import bandhanB from "../../../assets/images/Lenders/Badhan-B.jpg";
import csbBankNew from "../../../assets/images/Lenders/CSB-Bank-New.jpg";
import federalB from "../../../assets/images/Lenders/Federal-b.jpg";
import iciciBank1 from "../../../assets/images/Lenders/ICICI-bank-1.png";
import iob2j from "../../../assets/images/Lenders/IOB2j.jpg";
import kb1 from "../../../assets/images/Lenders/KB1.jpg";
import kot1 from "../../../assets/images/Lenders/Kot1 (1).jpg";
import mas from "../../../assets/images/Lenders/MAS.jpg";
import mhfl1 from "../../../assets/images/Lenders/MHFL-1.jpg";
import nhb from "../../../assets/images/Lenders/NHB.jpg";
import piramal from "../../../assets/images/Lenders/Piramal.jpg";
import sbi from "../../../assets/images/Lenders/SBI.jpg";
import sf from "../../../assets/images/Lenders/SF.jpg";
import utkarshSmallFinanceBank from "../../../assets/images/Lenders/Utakarsh-Small-Finance-Bank.jpg";
import chola from "../../../assets/images/Lenders/chola.jpg";
import hfc1 from "../../../assets/images/Lenders/h-fc1.jpg";
import heroHf1 from "../../../assets/images/Lenders/hero-hf (1).jpg";
import hhf1 from "../../../assets/images/Lenders/hhf-1.jpg";
import idfc from "../../../assets/images/Lenders/idfc.jpg";
import yes from "../../../assets/images/Lenders/yes.jpg";

const lenders = [
  img8, auB, bj, bandhanB, csbBankNew, federalB, iciciBank1, iob2j, kb1, kot1,
  mas, mhfl1, nhb, piramal, sbi, sf, utkarshSmallFinanceBank, chola, hfc1,
  heroHf1, hhf1, idfc, yes
];

const Lenders = () => {
  return (
    <div className="lenders-page">
      {/* Banner */}
      <ScrollReveal direction="down">
        <div className="lenders-banner">
          <img src={home3} alt="Lenders Banner" />
          <div className="lenders-overlay">
            <h1>Lenders</h1>
          </div>
        </div>
      </ScrollReveal>

      {/* Continuous Marquee */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="lenders-marquee-container">
          <div className="lenders-marquee-wrapper">
            <div className="lenders-marquee-track">
              {/* Double the lenders for seamless loop */}
              {[...lenders, ...lenders].map((logo, index) => (
                <div className="lender-marquee-item" key={index}>
                  <img src={logo} alt={`lender-${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Lenders;


