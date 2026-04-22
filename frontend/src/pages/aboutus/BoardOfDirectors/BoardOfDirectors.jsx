import React from "react";
import "./BoardOfDirectors.css";
import rao from "../../../assets/images/Director/Rao (1).jpg";
import rohokale from "../../../assets/images/Director/Rohokale (1).jpg";
import koticha from "../../../assets/images/Director/Koticha.jpg";
import debanshi from "../../../assets/images/Director/Debanshi-Photo.png";
import jayaraman from "../../../assets/images/Director/Nivara.jpg";
import krishna from "../../../assets/images/Director/Nivara-2.jpg";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import { AnimatePresence, motion } from "framer-motion";

const boardMembers = [
  {
    name: "Mr. C V Rao",
    role: "MD & CEO",
    desc: "Brings over 30 years of leadership experience in banking and financial services, with deep expertise in portfolio risk management and retail lending.",
    longDesc: "Mr. C. V. Rao brings over 30 years of leadership experience in banking and financial services, with deep expertise in portfolio risk management and retail lending across economic cycles. His career spans the full breadth of retail banking, encompassing secured and unsecured lending, investment and liability products, financial inclusion, and key functions such as product design, business development and marketing, sales and distribution, underwriting, credit risk strategy, and debt management. CV has held senior leadership roles with leading private sector banks in India, including ICICI Bank, IndusInd Bank, and ING Vysya Bank. At ICICI Bank (1992–2008), he was part of the core team that launched and scaled the mortgage business. At ING Vysya Bank (2009–2014), he headed Agriculture & Rural Banking and Consumer Assets. He holds an M.Com and MBA from Osmania University and served as a Research Assistant at IIM Ahmedabad.",
    color: "red",
    img: rao,
  },
  {
    name: "Mr. Sunil Rohokale",
    role: "Director",
    desc: "Over 29 years of experience in banking, lending, and asset management. Sets the vision for the ASK Asset & Wealth Management Group.",
    longDesc: "Mr. Sunil Rohokale has over 29 years of experience in banking and financial services, encompassing lending, asset, and wealth management. He is responsible for setting the vision for ASK Asset & Wealth Management Group. He was instrumental in driving ASK’s foray into Alternates and previously credited with setting up ICICI Bank’s Mortgage Financing Business and served as the MD & CEO of ICICI Home Finance Co. Ltd. He serves as a Board Director at the Association of Portfolio Managers of India (APMI) and holds a degree in Mechanical Engineering from the Government College of Engineering, Pune, and a master’s degree in management from Symbiosis Institute of Management.",
    color: "green",
    img: rohokale,
  },
  {
    name: "Mr. Monik Koticha",
    role: "Director",
    desc: "Part of the promoter family of the ASK Group and responsible for the corporate philanthropic initiatives of the group.",
    longDesc: "Mr. Monik Koticha is the Co-founder and CEO of ASK Capital Management. He has over 30 years of experience in the investment management industry and has played a pivotal role in establishing ASK as a premier investment management house. He is responsible for the overall strategy and business development of ASK Capital Management and is actively involved in philanthropy in Education, Housing, and Nation Building.",
    color: "red",
    img: koticha,
  },
  {
    name: "Ms. Debanshi Basu",
    role: "Nominee Director",
    desc: "Partner at Baring Private Equity India and a qualified Chartered Accountant with over 21 years of experience in private equity and investment banking.",
    longDesc: "Ms. Debanshi Basu is a qualified Chartered Accountant with over 21 years of experience across private equity, investment banking, and audit. A Partner at Baring Private Equity India, she leads investments and portfolio management in sectors including financial services and fintech. She serves on the boards of Nivara Home Finance, SK Finance, and Nehat Technologies. Previously, she was part of the founding investment banking team at Goldman Sachs India and worked with Ernst & Young.",
    color: "green",
    img: debanshi,
  },
  {
    name: "Mr. Muthuswamy Venkata Jayaraman",
    role: "Independent Director",
    desc: "39 years of experience in risk management, retail/corporate banking, and foreign exchange.",
    longDesc: "Mr. Muthuswamy Venkata Jayaraman is an Independent Director with nearly 40 years of experience in retail, MSME, corporate banking, and risk management. He holds a Master of Business Law from NLS, Bangalore, and is a Certified Associate of the Indian Institute of Bankers (CAIIB). He recently served as the Chief Risk Officer at Fincare Small Finance Bank and has held senior roles at Kotak Mahindra Bank, ICICI Bank, Corporation Bank, and Andhra Bank.",
    color: "red",
    img: jayaraman,
  },
  {
    name: "Mr. Krishna Gopalaraman",
    role: "Independent Director",
    desc: "Mechanical Engineer and CFA with over 35 years of experience in manufacturing, financial services, and IT-enabled transformation.",
    longDesc: "Mr. Krishna Gopalaraman is an Independent Director with over 35 years of experience in management consulting, data analytics, and digital transformation. He holds a degree in Electronics and Communication Engineering from Anna University and a postgraduate degree in Management from IIM Bangalore. He has led consulting engagements for clients like IDBI, Tata Exports, and Cholamandalam, and has driven strategic initiatives for General Electric and ArcelorMittal. Since 2020, he has been on secondment to The Global Fund in Geneva.",
    color: "green",
    img: krishna,
  },
];

const BoardOfDirectors = () => {
  const [selectedMember, setSelectedMember] = React.useState(null);

  return (
    <>
      <section className="board-section">
        <ScrollReveal direction="up">
          <div className="board-header">
            <span className="board-tag">Board of Directors</span>
            <h2>Our Visionary Leadership</h2>
            <p>Guiding our mission to provide affordable housing finance to every Indian family</p>
          </div>
        </ScrollReveal>

        <div className="board-grid">
          {boardMembers.map((item, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={0.1 + (index % 3) * 0.15} 
              distance={40}
              scale={0.9}
            >
              <div
                className={`board-card ${item.color}`}
                onClick={() => setSelectedMember(item)}
              >
                <div className="image-wrapper">
                  <img src={item.img} alt={item.name} />
                  <span className="role-tag">{item.role}</span>
                </div>

                <div className="board-content">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <button className="view-bio-btn" onClick={() => setSelectedMember(item)}>View Details</button>
                </div>

                <div className="leadership-strip-animated"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="unique-leadership-modal-overlay"
            onClick={() => setSelectedMember(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(10px)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="unique-leadership-modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex',
                flexDirection: 'row',
                maxWidth: '1000px',
                height: '550px',
                width: '100%',
                borderRadius: '30px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                position: 'relative',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
              }}
            >
              <button
                onClick={() => setSelectedMember(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  zIndex: 100,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: 'none',
                  background: '#f3f4f6',
                  cursor: 'pointer',
                  fontSize: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                &times;
              </button>

              <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
                <div style={{ flex: '0 0 45%', height: '100%', overflow: 'hidden' }}>
                  <img
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ flex: '0 0 55%', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: '#fff', overflowY: 'auto' }}>
                  <h2 style={{ fontWeight: 900, fontSize: '42px', margin: '0 0 5px 0', color: '#1a1a1a', lineHeight: '1.1' }}>
                    {selectedMember.name}
                  </h2>
                  <span style={{ display: 'block', fontSize: '14px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1.5px', color: '#d32f2f', marginBottom: '20px' }}>
                    {selectedMember.role}
                  </span>
                  <div style={{ width: '60px', height: '6px', backgroundColor: '#d32f2f', marginBottom: '30px', borderRadius: '3px' }}></div>
                  <p style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.5' }}>
                    {selectedMember.desc}
                  </p>
                  <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#4b5563', fontWeight: 400 }}>
                    {selectedMember.longDesc}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BoardOfDirectors;