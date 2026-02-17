
import React from "react";
import "./ObjectivesCoreValues.css";
import  hero from "../../../assets/images/hero.jpeg";

const objectivesText = `Nivara seeks to further its mission by catering to the housing finance needs of the un-served and under-served segments of urban and semi-urban Indian markets. The company provides organized home loan solutions to the unorganized sector, especially to the lower and middle income households. It focuses on delivering innovative credit delivery mechanisms for purchase of homes, construction of homes and undertaking home improvements. Nivara also provides mortgage solutions to the micro, small and medium enterprises including micro-entrepreneurs and small developers, and offers loans against property for either business or personal consumption.`;

const coreValues = [
  {
    icon: "🛡️",
    title: "Integrity",
    desc: "Be open and transparent. Fairness in all our dealings, honesty and harmony in what we say, do and think.",
  },
  {
    icon: "🤝",
    title: "Trust",
    desc: "Honour our commitments – be trusting, yet prudent.",
  },
  {
    icon: "🏆",
    title: "Quality",
    desc: "Service and products we are proud to stand behind.",
  },
  {
    icon: "🔥",
    title: "Passion",
    desc: "Perform our roles with enthusiasm, purpose, pride, and a positive attitude with a commitment to succeed.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "Forward thinking to make a difference to people and also expand our horizons.",
  },
  {
    icon: "👥",
    title: "Teamwork",
    desc: "Coming, sharing, working and succeeding together.",
  },
  {
    icon: "🌱",
    title: "Dignity & Respect",
    desc: "Treat others better than you expect to be treated. Respect the knowledge, skills, ideas and capabilities of each employee.",
  },
];

const ObjectivesCoreValues = () => {
  return (
    <div className="ocv-page">
      
      <section className="ocv-hero">
          <img src={hero} className="hero-img" alt="Hero"  />
           <div  className="ocv-overlay">
        <h1>Objectives & Core Values</h1>
        <p>Driven by purpose. Guided by values.</p>
        </div>
      </section>

      
      <section className="ocv-section">
        <h2 className="section-title">Our Objectives</h2>

        <div className="objectives-paragraph">
          <p>{objectivesText}</p>
        </div>
      </section>

      
      <section className="ocv-section light">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          {coreValues.map((val, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">{val.icon}</div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ObjectivesCoreValues;
