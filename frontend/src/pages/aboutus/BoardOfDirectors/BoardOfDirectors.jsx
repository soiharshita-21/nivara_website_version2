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
    longDesc: "Mr. C. V. Rao is the Founder, Managing Director & Chief Executive Officer of the Company. He brings over 30 years of leadership experience in banking and financial services, with deep expertise in retail lending, portfolio risk management, and building scalable businesses across economic and credit cycles. \n\nHe holds an M.Com from Andhra University and an MBA from Osmania University, Hyderabad. Early in his career, he served as a Research Assistant in Finance and Accounting at IIM Ahmedabad, where he also published research in reputed academic journals. \n\nMr. Rao has held senior leadership roles with leading private sector banks, including ICICI Bank, IndusInd Bank, and ING Vysya Bank (now Kotak Mahindra Bank). At ICICI Bank, he was part of the core team that scaled the mortgage business into a ₹50,000+ crore portfolio, contributing to market leadership. At ING Vysya Bank, he led national portfolios in Agriculture & Rural Banking and Consumer Assets, driving growth while strengthening risk and governance frameworks. \n\nUnder his founding leadership, the Company has built resilience, strengthened its market position, and continues to focus on sustainable, long‑term value creation.",
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
    longDesc: "Mr. Monik Koticha is a Non-Executive Director of our Company and is also one of the Promoters. As a part of the promoter family of ASK Group – a renowned financial services group and a leading industry player in asset & wealth management, he has contributed significantly to the Company’s growth by providing strategic guidance and trusted leadership. \n\nHe also serves as CIO & Managing director at Fortress Holdings Pvt Ltd (Family Office of the Koticha family). An avid investor with over two decades of experience. Mr. Koticha focuses on bottom-up investments in the secondary markets and other growth assets. He also serves on the boards of some of the companies where he has invested to help in a strategic manner to build scale. \n\nBeyond his business interests, Mr. Koticha leads the family and corporate philanthropic initiatives and is actively engaged in causes related to education, housing, and nation building.",
    color: "red",
    img: koticha,
  },
  {
    name: "Ms. Debanshi Basu",
    role: "Nominee Director",
    desc: "Partner at Baring Private Equity India and a qualified Chartered Accountant with over 21 years of experience in private equity and investment banking.",
    longDesc: "Ms. Debanshi Basu serves as a Nominee Director representing Baring Private Equity India and is also a partner in the firm, leading investments and portfolio management in sectors including financial services, fintech, and agri-in-puts. She joined Baring in 2009 after being part of the founding investment banking team at Goldman Sachs India, where she worked on cross-sector M&A and capital market transactions. Earlier in her career, she was with Ernst & Young, overseeing statutory audits and internal control reviews. \n\nWith over 21 years of experience spanning private equity, investment banking, and audit, Ms. Basu has played a pivotal role in the investment and governance of companies such as SK Finance, Acko, Manappuram Finance, and Muthoot Fincorp. She also serves on the boards of SK Finance and Nehat Technologies, among others. \n\nMs. Basu is a qualified Chartered Accountant and holds a Bachelor’s degree in Commerce from Osmania University.",
    color: "green",
    img: debanshi,
  },
  {
    name: "Mr. Muthuswamy Venkata Jayaraman",
    role: "Independent Director",
    desc: "39 years of experience in risk management, retail/corporate banking, and foreign exchange.",
    longDesc: "Mr. Muthuswamy Venkata Jayaraman is an independent director of our Company. He brings over 39 years of extensive experience in risk management, retail and corporate banking, branch operations, and foreign exchange services. He served as the Chief Risk Officer at Fincare Small Finance Bank. \n\nThroughout his career, Mr. Jayaraman has held senior leadership positions at leading financial institutions including Kotak Mahindra Bank (formerly ING Vysya), ICICI Bank, Corporation Bank, and Andhra Bank. \n\nHe holds a Master of Business Law from the National Law School, Bangalore, postgraduate diplomas in Personnel Management and Banking from Annamalai University, and is a Certified Associate of the Indian Institute of Bankers (CAIIB). He has further strengthened his leadership capabilities through executive education at IIM Bangalore.",
    color: "red",
    img: jayaraman,
  },
  {
    name: "Mr. Krishna Gopalaraman",
    role: "Independent Director",
    desc: "Mechanical Engineer and CFA with over 35 years of experience in manufacturing, financial services, and IT-enabled transformation.",
    longDesc: "Mr. Krishna Gopalaraman is an independent director of our Company and has over 35 years of diverse cross-sector experience and has held senior roles in reputed organizations such as Deloitte and Tech Mahindra. His consulting expertise spans manufacturing and financial services operations, supply chain management, and the execution of capital projects and plant turnarounds. \nHe has successfully led consulting engagements for prominent clients including IDBI, Tata Exports, Cholamandalam Finance, Shasun Pharma, Mahindra & Mahindra, and ACC. In addition, he has driven strategic initiatives in business intelligence, data analytics, and IT-enabled transformation for global Fortune 500 companies such as General Electric and ArcelorMittal. \n\nSince 2020, Mr. Gopalaraman has been on secondment to The Global Fund in Geneva, where he supports key data and analytics initiatives from India. \n\nHe holds a degree in Mechanical Engineering from Bombay University, a postgraduate qualification in Management from IRMA, Anand, is an Associate Member of the Institute of Cost Accountants of India (ICMAI), and a Chartered Financial Analyst (CFA) from ICFAI.",
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
                  <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#4b5563', fontWeight: 400, textAlign: 'justify', whiteSpace: 'pre-line' }}>
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