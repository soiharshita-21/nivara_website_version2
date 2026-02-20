import React from "react";
import "./Lenders.css";
import home from "../../../assets/images/home.jpg"; 


import nhb from "../../../assets/images/nhb.png";
import sbi from "../../../assets/images/sbi.png";
import iob from "../../../assets/images/iob.png";
import icici from "../../../assets/images/icici.jpg";
import kotak from "../../../assets/images/kotak.png";
import federal from "../../../assets/images/federal.jpg";

import au from "../../../assets/images/au.png";
import karnataka from "../../../assets/images/karnataka.png";
import bandhan from "../../../assets/images/bandhan.jpg";
import csb from "../../../assets/images/csb.png";
import utkarsh from "../../../assets/images/utkarsh.png";
import yes from "../../../assets/images/yes.png";

import bajaj from "../../../assets/images/bajaj.png";
import chola from "../../../assets/images/chola.png";
import hinduja from "../../../assets/images/hinduja.png";
import herofin from "../../../assets/images/herofin.png";
import heroho from "../../../assets/images/heroho.png";
import mas from "../../../assets/images/mas.webp";

const lenders = [
  nhb, sbi, iob, icici, kotak, federal,
  au,karnataka,bandhan,csb,utkarsh,yes,
  bajaj,chola,hinduja,herofin,heroho,mas

];

const Lenders = () => {
  return (
    <div className="lenders-page">

      {/* Banner */}
      <div className="lenders-banner">
        <img src={home} alt="Lenders Banner" />
        <div className="lenders-overlay">
          <h1>Lenders</h1>
        </div>
      </div>

      {/* Grid */}
      <div className="lenders-container">
        <div className="lenders-grid">
          {lenders.map((logo, index) => (
            <div className="lender-card" key={index}>
              <img src={logo} alt={`lender-${index}`} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Lenders;

