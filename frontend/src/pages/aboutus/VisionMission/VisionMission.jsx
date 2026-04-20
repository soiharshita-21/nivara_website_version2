import React from "react";
import "./VisionMission.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const VisionMission = () => {
  return (
    <div className="vm-page">

      {/* Hero Section */}
      <ScrollReveal direction="down">
        <section className="vm-hero">
          <div className="vm-overlay"></div>
          <div className="vm-hero-center">
            <div className="vm-shape">
              <h1>VISION & MISSION</h1>
            </div>
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