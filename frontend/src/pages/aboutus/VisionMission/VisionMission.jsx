import React from "react";
import "./VisionMission.css";
import { Eye, Target, Building2, TrendingUp } from "lucide-react";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import vm2 from "../../../assets/images/vm2.png";

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
              Empowering dreams through inclusive and transparent housing finance.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <section className="vm-container">
        <div className="vm-grid">
          {/* Vision Card */}
          <ScrollReveal direction="left" distance={50} delay={0.1}>
            <div className="vm-modern-card vision">
              <div className="vm-icon-wrapper">
                <Eye className="vm-icon" size={48} />
              </div>
              <div className="vm-card-content">
                <span className="vm-label">Future Focused</span>
                <h2>Our Vision</h2>
                <div className="vm-divider"></div>
                <p>
                  To revolutionize the affordable housing finance landscape in India, 
                  earning our place as the most respected and trusted institution 
                  committed to social and financial inclusion.
                </p>
                <div className="vm-bg-text">VISION</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Mission Card */}
          <ScrollReveal direction="right" distance={50} delay={0.2}>
            <div className="vm-modern-card mission">
              <div className="vm-icon-wrapper">
                <Target className="vm-icon" size={48} />
              </div>
              <div className="vm-card-content">
                <span className="vm-label">Our Purpose</span>
                <h2>Our Mission</h2>
                <div className="vm-divider"></div>
                <div className="vm-mission-highlight">
                  <p className="vm-main-mission">"Housing for All"</p>
                </div>
                <p className="vm-mission-text">
                  Providing seamless access to home loans for the unserved and 
                  underserved segments, empowering micro-entrepreneurs and families 
                  in the lower and middle-income categories.
                </p>
                <div className="vm-bg-text">MISSION</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Impact Row */}
        <div className="vm-impact-row">
          <ScrollReveal direction="up" delay={0.3}>
            <div className="impact-item" style={{ "--item-color": "#E32125" }}>
              <Building2 size={50} />
              <span>Building Stability</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <div className="impact-item" style={{ "--item-color": "#E32125" }}>
              <TrendingUp size={50} />
              <span>Driving Growth</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;



