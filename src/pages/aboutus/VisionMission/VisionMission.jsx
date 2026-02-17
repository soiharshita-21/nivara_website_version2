// src/pages/VisionMission.jsx
import React from "react";
import "./VisionMission.css";
import hero from "../../../assets/images/hero.jpeg";

const VisionMission = () => {
  return (
    <div className="vm-page">

      {/* Hero Section */}
      <section className="vm-hero">
        <img src={hero} className="hero-img" alt="hero" />

        <div className="vm-overlay">
          <h1>Vision & Mission</h1>
          <p>Driving purpose through affordable housing finance</p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vm-section">
        <div className="vm-card">
          <h2>Our Vision</h2>
          <p>
            The vision of the organization is to revolutionize the way affordable
            housing finance is done and to be counted amongst the most respected
            housing finance companies in India.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="vm-section light">
        <div className="vm-card">
          <h2>Our Mission</h2>
          <p className="vm-quote">“Housing for All”</p>
          <p>
            The aim is to provide easy access to home loans to the un-served and
            under-served segments in the lower and middle income categories,
            including those employed or self-employed in micro and small
            enterprises.
          </p>
        </div>
      </section>

    </div>
  );
};

export default VisionMission;
