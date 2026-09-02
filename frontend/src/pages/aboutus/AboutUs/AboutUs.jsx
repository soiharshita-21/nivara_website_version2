import React from "react";
import "./AboutUs.css";
import "../VisionMission/VisionMission.css";
import "../ObjectivesCoreValues/ObjectivesCoreValues.css";

import about from "../../../assets/images/about_us.png";
import { 
  FaMoneyBillWave, 
  FaHome, 
  FaFileAlt, 
  FaSyncAlt, 
  FaCogs, 
  FaHeadset, 
  FaGlobe,
  FaShieldAlt, 
  FaHandshake, 
  FaAward, 
  FaFire, 
  FaLightbulb, 
  FaUsers, 
  FaLeaf 
} from "react-icons/fa";
import { Eye, Target, Building2, TrendingUp } from "lucide-react";
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
    desc: "Be open and transparent. Fairness in all our dealings, honesty and harmony in what we say, do and think."
  },
  {
    icon: <FaHandshake />,
    title: "Trust",
    desc: "Honour our commitments – be trusting, yet prudent."
  },
  {
    icon: <FaAward />,
    title: "Quality",
    desc: "Service and products we are proud to stand behind."
  },
  {
    icon: <FaFire />,
    title: "Passion",
    desc: "Perform our roles with enthusiasm, purpose, pride, and a positive attitude with a commitment to succeed."
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    desc: "Forward thinking to make a difference to people and also expand our horizons."
  },
  {
    icon: <FaUsers />,
    title: "Teamwork",
    desc: "Coming, sharing, working and succeeding together."
  },
  {
    icon: <FaLeaf />,
    title: "Dignity & Respect",
    desc: "Treat others better than you expect to be treated. Respect the knowledge, skills, ideas and capabilities of each employee."
  }
];

const AboutUs = () => {
  return (
    <div className="about-page">
      <ScrollReveal direction="down">
        <section className="page-banner about-banner" style={{ backgroundImage: `url(${about})` }}>
          {/* <div className="page-banner-overlay"></div>
          <div className="page-banner-content">
            <h1 className="page-banner-title">
              About <span className="text-red">Nivara</span>
            </h1>
            <p className="page-banner-subtitle">
              Empowering families through accessible and affordable housing finance.
            </p>
          </div> */}
        </section>
      </ScrollReveal>

      {/* Purpose & Inspiration */}
      <div className="about-sections-group">
        <ScrollReveal direction="up">
          <section className="about-section about-justified-section">
            <h2>Our Purpose</h2>
            <p>
              <b>To make home ownership accessible, affordable, and achievable for every family.</b>
            </p>
            <p>
              We exist to empower individuals, especially from underserved and
              informal sectors, by providing transparent, ethical, and responsible
              housing finance solutions that improve quality of life and long-term
              stability.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <section className="about-section light about-justified-section">
            <h2>Our Inspiration</h2>
            <p>
              The name "Nivara" is derived from the Sanskrit roots <b style={{color:"#B3191F"}}>"नि + वृ" (Ni + Vru)</b>, meaning to cover, shelter, protect, and provide refuge.
            </p>
            <p>
              Shelter (निवारा) is one of the three fundamental human needs, along
              with food (अन्न) and clothing (वस्त्र). A home is not just a structure
              — it is a foundation for growth, stability, security, and human
              development.
            </p>
            <p>
              At Nivara, we believe that providing access to housing is not just a
              financial service — it is a contribution to building stronger
              families, communities, and futures.
            </p>
          </section>
        </ScrollReveal>
      </div>

      {/* Vision & Mission */}
      <section className="vm-container" style={{ padding: "60px 20px" }}>
        <ScrollReveal direction="up">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "40px", fontSize: "30px", color: "#B3191F" }}>Vision & Mission</h2>
        </ScrollReveal>
        <div className="vm-grid" style={{ marginBottom: "40px" }}>
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

        <div className="vm-impact-row" style={{ borderTop: "none" }}>
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

      {/* Objectives & Core Values */}
      <section className="ocv-section" style={{ padding: "60px 20px" }}>
        <ScrollReveal direction="up">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "40px", fontSize: "30px", color: "#B3191F" }}>Our Objectives</h2>
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
              <div className={`objective-card ${index === objectivesList.length - 1 ? "last-card" : ""}`}>
                <p>{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="ocv-section light" style={{ padding: "60px 20px" }}>
        <ScrollReveal direction="up">
          <h2 className="section-title" style={{ textAlign: "center", fontSize: "30px", color: "#B3191F" }}>Our Core Values</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15}>
          <p className="section-subtitle" style={{ textAlign: "center", marginBottom: "40px" }}>
            In all our actions, we are guided by strong values that define how we work, serve our customers, and grow responsibly with all stakeholders.
          </p>
        </ScrollReveal>

        <div className="cv-modern-grid">
          {coreValues.map((val, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={0.1 + (index * 0.05)}
              className={index === coreValues.length - 1 ? "full-width-reveal" : ""}
            >
              <div 
                className={`cv-horizontal-card ${index === coreValues.length - 1 ? "last-card" : ""}`}
                style={{ 
                  "--accent-color": "#B3191F" 
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

      {/* Features & Benefits */}
      <section className="features-section">
        <ScrollReveal direction="up" delay={0.1}>
          <h2>Features & Benefits</h2>
        </ScrollReveal>

        <div className="features-grid">
          {[
            { icon: <FaMoneyBillWave />, title: "No Hidden Charges", desc: "Transparent pricing with no surprises." },
            { icon: <FaHome />, title: "Doorstep Service", desc: "We come to you for a hassle-free experience." },
            { icon: <FaGlobe />, title: "Rural Accessibility", desc: "Easily available across rural and semi-urban areas." },
            { icon: <FaFileAlt />, title: "Easy Documentation", desc: "Minimal paperwork for faster approvals." },
            { icon: <FaSyncAlt />, title: "End-to-End Process", desc: "Complete support from application to disbursement." },
            { icon: <FaCogs />, title: "Flexible Repayment", desc: "Customized plans tailored to your needs." },
            { icon: <FaHeadset />, title: "24×7 Assistance", desc: "Always here to support you anytime." }
          ].map((feature, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * (index % 4)}>
              <div className="feature-card">
                <span className="icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Story (Genesis & Journey) */}
      <ScrollReveal direction="up">
        <section className="about-section">
          <h2>Our Genesis</h2>
          <p>
            The genesis of <b>Nivara Home Finance Limited </b>is traced to <b>C V Rao and Sunil Rohokale</b>, professional colleagues for two decades and veterans in the retail banking industry, primarily in the housing finance & real estate sectors.
            It all started over a telephonic conversation between the two during the Spring of 2014 where both felt the need to pursue their passion, leverage their experience and unique ideas to create a lasting, well-respected organization in the affordable housing finance business. Subsequently, the company Nivara Home Finance Limited was born and has as its promoters C V Rao, Sunil Rohokale and a group of like-minded professionals having decades of rich experience in this field.
          </p>
          <p>
            Founded on strong professional relationships, deep industry knowledge,
            and a shared passion for financial inclusion, Nivara was established
            to transform the way home loans are accessed and experienced in India.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up">
        <section className="about-section light">
          <h2>Our Journey</h2>
          <p>
            Nivara was incorporated on December 02, 2014 under The Companies Act, 2013 with an objective to provide home loans mainly to the informal sector of urban India. Later, the company commenced its operations in October 2015 after obtaining the necessary Certificate of Registration from the National Housing Bank (NHB) in September 2015.
            The company is driven by its strong values with compliance to the highest standards of Corporate Governance. With the experience and guidance of the Board, Nivara is committed to bring in revolutionary changes in the affordable housing finance segment. Nivara has its headquarters in Bengaluru and a strong presence in 5 states with 101 branches.
          </p>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default AboutUs;
