import React from "react";
import "./VisionMission.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import vm2 from "../../../assets/images/vm2.png"

const VisionMission = () => {
  return (
    <div className="vm-page">

      {/* Hero Section */}
      <ScrollReveal direction="down">
        <section className="page-banner" style={{ backgroundImage: `url(${vm2})` }}>
          <div className="page-banner-overlay"></div>
          <div className="page-banner-content">
            <h1 className="page-banner-title">
              Vision & <span className="text-red">Mission</span>
            </h1>
            <p className="page-banner-subtitle">
              Revolutionizing affordable housing with transparency and trust.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Vision Section */}
      <section className="vm-section">
        <div className="vm-content-wrapper">
          <ScrollReveal direction="left" distance={100} delay={0.1}>
            <div className="vm-lottie-container">
              <DotLottieReact
                src="/src/assets/images/Vision (3).lottie"
                loop
                autoplay
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={100} delay={0.2}>
            <div className="vm-card">
              <h2>Our Vision</h2>
              <p>
                The vision of the organization is to revolutionize the way affordable
                housing finance is done and to be counted amongst the most respected
                housing finance companies in India.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="vm-section light">
        <div className="vm-content-wrapper">
          <ScrollReveal direction="left" distance={100} delay={0.2}>
            <div className="vm-card">
              <h2>Our Mission</h2>
              <p className="vm-quote"><b>“Housing for All”</b></p>
              <p>
                The aim is to provide easy access to home loans to the un-served and
                under-served segments in the lower and middle income categories,
                including those employed or self-employed in micro and small
                enterprises.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={100} delay={0.1}>
            <div className="vm-lottie-container">
              <DotLottieReact
                src="/src/assets/images/Mission (3).lottie"
                loop
                autoplay
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;