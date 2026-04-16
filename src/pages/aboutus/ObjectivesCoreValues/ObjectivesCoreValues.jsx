import React, { useState, useEffect } from "react";
import "./ObjectivesCoreValues.css";
import house2 from "../../../assets/images/objectives.jpg";
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
    color: "#2E7D32"
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll(".slide-up, .animate-pop-up");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="ocv-page">

      {/* HERO */}
      <section className="ocv-hero-modern animate-pop-up">
        <div className="ocv-huge-title-container">
          <div className="ocv-overlapping-image slide-up">
            <img src={house2} alt="Objectives & Core Values" />
            <h1 className="ocv-huge-title">OBJECTIVES & CORE VALUES</h1>
          </div>
        </div>
      </section>

      {/* OBJECTIVES CARDS */}
      <section className="ocv-section slide-up">
        <h2 className="section-title">Our Objectives</h2>

        <div className="objectives-cards">
          {objectivesList.map((item, index) => (
            <div
              key={index}
              className={`objective-card animate-pop-up ${index === objectivesList.length - 1 ? "last-card" : ""
                }`}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="ocv-section light animate-pop-up">
        <h2 className="section-title">Our Core Values</h2>

        <div className="cv-wheel-wrapper">
          <div className="cv-wheel">
            <div className="cv-wheel-center">
              {activeValue ? (
                <div 
                  className="cv-center-content fade-in"
                  style={{ "--node-color": activeValue.color }}
                >
                  <span className="cv-center-emoji">{activeValue.icon}</span>
                  <h3>{activeValue.title}</h3>
                  <p>{activeValue.desc}</p>
                </div>
              ) : (
                <div className="cv-center-content default-content fade-in">
                  <span className="cv-center-emoji"><FaBullseye /></span>
                  <h3>Core Values</h3>
                </div>
              )}
            </div>

            {coreValues.map((val, index) => {
              const angle = (index * (360 / coreValues.length)) - 90;
              return (
                <div
                  key={index}
                  className="cv-wheel-node"
                  style={{
                    "--angle": `${angle}deg`,
                    "--node-color": val.color
                  }}
                  onMouseEnter={() => setActiveValue(val)}
                  onMouseLeave={() => setActiveValue(null)}
                >
                  <span className="cv-node-emoji">{val.icon}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ObjectivesCoreValues;