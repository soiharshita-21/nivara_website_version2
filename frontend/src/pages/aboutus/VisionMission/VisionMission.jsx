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
                The vision of the organization is to revolutionize the way affordable housing finance is done and to be counted amongst the most respected housing finance companies in India.
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
                 The mission of the organization is “Housing for All”. The aim is to provide easy access to home loans to the un-served and under-served segments in the lower and middle income categories, including those employed or self-employed in micro and small enterprises.
                </p>
                <div className="vm-bg-text">MISSION</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Impact Row */}
        <div className="vm-impact-row">
          <ScrollReveal direction="up" delay={0.3}>
            <div className="impact-item" style={{ "--item-color": "#B3191F" }}>
              <Building2 size={50} />
              <span>Building Stability</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <div className="impact-item" style={{ "--item-color": "#B3191F" }}>
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



