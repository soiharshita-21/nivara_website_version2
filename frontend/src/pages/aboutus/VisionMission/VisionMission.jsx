import React, { useEffect, useRef } from "react";
import "./VisionMission.css";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const VisionMission = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vm-pop-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="vm-page">

      {/* Hero Section */}
      <section
        className="vm-hero vm-pop-up animate-pop-up"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <div className="vm-overlay"></div>

        <div className="vm-hero-center animate-pop-up">
          <div className="vm-shape">
            <h1 className="animate-pop-up">VISION & MISSION</h1>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        className="vm-section vm-pop-up animate-pop-up"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div className="vm-content-wrapper animate-pop-up">
          <div className="vm-lottie-container animate-pop-up">
            <DotLottieReact
              src="/src/assets/images/Vision (3).lottie"
              loop
              autoplay
            />
          </div>
          <div className="vm-card animate-pop-up">
            <h2 className="animate-pop-up">Our Vision</h2>
            <p>
              The vision of the organization is to revolutionize the way affordable
              housing finance is done and to be counted amongst the most respected
              housing finance companies in India.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="vm-section light vm-pop-up animate-pop-up"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <div className="vm-content-wrapper animate-pop-up">
          <div className="vm-card animate-pop-up">
            <h2 className="animate-pop-up">Our Mission</h2>
            <p className="vm-quote"><b>“Housing for All”</b></p>
            <p>
              The aim is to provide easy access to home loans to the un-served and
              under-served segments in the lower and middle income categories,
              including those employed or self-employed in micro and small
              enterprises.
            </p>
          </div>
          <div className="vm-lottie-container animate-pop-up">
            <DotLottieReact
              src="/src/assets/images/Mission (3).lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default VisionMission;
