import React, { useState } from "react";
import "./ObjectivesCoreValues.css";
import objectandcore2 from "../../../assets/images/objectandcore2.png";
import { 
  FaShieldAlt, 
  FaHandshake, 
  FaAward, 
  FaFire, 
  FaLightbulb, 
  FaUsers, 
  FaLeaf,
  FaBullseye
} from "react-icons/fa";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const objectivesList = [
  "Catering to the housing finance needs of the un-served and under-served segments of urban and semi-urban Indian markets.",
  "Providing organized home loan solutions to the unorganized sector, especially to the lower and middle income households.",
  "Providing innovative credit delivery mechanism for purchase of homes, construction of homes and undertaking home improvements.",
  "Providing mortgage solutions to the micro, small and medium enterprises including micro-entrepreneurs and small developers.",
  "Providing loans against property for either business or personal consumption."
];

const coreValues = [
  {
    icon: <FaShieldAlt />,
    title: "Integrity",
    desc: "Be open and transparent. Fairness in all our dealings, honesty and harmony in what we say, do and think.",
    color: "#6B1F2B"
  },
  {
    icon: <FaHandshake />,
    title: "Trust",
    desc: "Honour our commitments – be trusting, yet prudent.",
    color: "#7EB542"
  },
  {
    icon: <FaAward />,
    title: "Quality",
    desc: "Service and products we are proud to stand behind.",
    color: "#FBC02D"
  },
  {
    icon: <FaFire />,
    title: "Passion",
    desc: "Perform our roles with enthusiasm, purpose, pride, and a positive attitude with a commitment to succeed.",
    color: "#E64A19"
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    desc: "Forward thinking to make a difference to people and also expand our horizons.",
    color: "#1976D2"
  },
  {
    icon: <FaUsers />,
    title: "Teamwork",
    desc: "Coming, sharing, working and succeeding together.",
    color: "#7B1FA2"
  },
  {
    icon: <FaLeaf />,
    title: "Dignity & Respect",
    desc: "Treat others better than you expect to be treated.",
    color: "#00897B"
  }
];

const ObjectivesCoreValues = () => {
  const [activeValue, setActiveValue] = useState(null);

  return (
    <div className="ocv-page">

      {/* HERO */}
      <ScrollReveal direction="down">
        <section className="page-banner" style={{ backgroundImage: `url(${objectandcore2})` }}>
          <div className="page-banner-overlay"></div>
          <div className="page-banner-content">
            <h1 className="page-banner-title">
              Objectives & Core <span className="text-red">Values</span>
            </h1>
            <p className="page-banner-subtitle">
              Driven by integrity to build a stable and transparent housing finance ecosystem.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* OBJECTIVES CARDS */}
      <section className="ocv-section">
        <ScrollReveal direction="up">
          <h2 className="section-title">Our Objectives</h2>
        </ScrollReveal>

        <div className="objectives-cards">
          {objectivesList.map((item, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={index * 0.1} 
              distance={30}
              className={index === objectivesList.length - 1 ? "full-width-reveal" : ""}
            >
              <div
                className={`objective-card ${index === objectivesList.length - 1 ? "last-card" : ""
                  }`}
              >
                <p>{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CORE VALUES GRID */}
      <section className="ocv-section light">
        <ScrollReveal direction="up">
          <h2 className="section-title">Our Core Values</h2>
        </ScrollReveal>

        <div className="cv-modern-grid">
          {coreValues.map((val, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={0.1 + (index * 0.05)}
            >
              <div 
                className="cv-horizontal-card"
                style={{ 
                  "--accent-color": index % 2 === 0 ? "#E32125" : "#7EB542" 
                }}
              >
                <div className="cv-icon-container">
                  {val.icon}
                </div>
                <div className="cv-content-container">
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ObjectivesCoreValues;


