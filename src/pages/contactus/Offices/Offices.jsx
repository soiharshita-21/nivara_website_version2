import React from "react";
import "./Offices.css";
import map from "../../../assets/images/map.jpg"; 

const Office = () => {
  return (
    <section className="office-page">

      {/* HERO SECTION */}
      <div className="office-hero">
        <div className="office-left">
          <h1>Nivara Home Finance Offices</h1>
        </div>
        <div className="office-right">
          <img src={map} alt="Nivara Office Locations" />
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="office-content">
        <h2>📍 Nivara Office Locations</h2>

        <div className="office-cards">

  <div className="office-card">
    <h3>JP Nagar, Bangalore</h3>
    <p className="office-tag">Registered & Corporate Office</p>

    <p>No. 22,23,24,25/101/3, 3rd Floor, BNR Complex, Sri Rama Layout, J P Nagar, 7th Phase, Opp. RBI Layout, Bangalore, Karnataka - 560078</p>

    <p>No. 22, 23, 24, 25/101/3, 2nd Floor, BNR Complex, Sri Rama Layout, 7th Phase, Opp. RBI Layout, Bangalore 560078</p>

    <p>First Floor No. 51, 3rd Main Nataraja Layout, JP Nagar, 7th Phase, Bangalore – 560078.</p>

    <p><b>Back Office:</b> No.22,23,24,25/101/3, 3rd Floor, BNR Complex, Sri Rama Layout, J.P. Nagar, 7th Phase, OPP. RBI Layout, Bengaluru, Karnataka-560078</p>
  </div>

  <div className="office-card">
    <h3>Puttenahalli, Bangalore</h3>

    <p>2nd Floor, Old No. 2/45/396 New No. 390, Puttenahalli Main Road, JP Nagar, 7th Phase, Bangalore -560078</p>

    <p>3rd Floor, Old No. 2/45/396 New No. 390, Puttenahalli Main Road, JP Nagar, 7th Phase, Bangalore -560078</p>
  </div>

</div>
</div>
    </section>
  );
};

export default Office;

