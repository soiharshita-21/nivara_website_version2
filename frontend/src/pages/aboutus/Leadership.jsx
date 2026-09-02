import React, { useState } from "react";
import BoardOfDirectors from "./BoardOfDirectors/BoardOfDirectors";
import ManagementTeam from "./ManagementTeam/ManagementTeam";
import Investors from "./Investors";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import about from "../../assets/images/about_us.png";
import "./Leadership.css";

const Leadership = () => {
  const [activeTab, setActiveTab] = useState("board");

  return (
    <div className="leadership-page">
      <ScrollReveal direction="down">
        <section className="page-banner about-banner" style={{ backgroundImage: `url(${about})` }}>
          <div className="page-banner-overlay"></div>
          {/* <div className="page-banner-content">
            <h1 className="page-banner-title">
              Our <span className="text-red">Leadership</span>
            </h1>
            <p className="page-banner-subtitle">
              Experienced professionals guiding our mission of "Housing for All".
            </p>
          </div> */}
        </section>
      </ScrollReveal>

      <div className="leadership-tabs-container">
        <div className="leadership-tabs">
          <button 
            className={`tab-btn ${activeTab === "board" ? "active" : ""}`}
            onClick={() => setActiveTab("board")}
          >
            Board of Directors
          </button>
          <button 
            className={`tab-btn ${activeTab === "management" ? "active" : ""}`}
            onClick={() => setActiveTab("management")}
          >
            Management Team
          </button>
          <button 
            className={`tab-btn ${activeTab === "investors" ? "active" : ""}`}
            onClick={() => setActiveTab("investors")}
          >
            Our Investors
          </button>
        </div>
      </div>

      <div className="leadership-tab-content">
        {activeTab === "board" && <BoardOfDirectors />}
        {activeTab === "management" && <ManagementTeam />}
        {activeTab === "investors" && <Investors hideBanner={true} />}
      </div>
    </div>
  );
};

export default Leadership;
