import React from "react";
import "./BoardOfDirectors.css";
import rao from "../../../assets/images/director/rao (1).jpg";
import sunilb from "../../../assets/images/director/sunilb.jpeg";
import koticha from "../../../assets/images/director/koticha.jpg";
import debanshi from "../../../assets/images/director/debanshi-photo.png";
import jayaraman from "../../../assets/images/director/nivara.jpg";
import krishna from "../../../assets/images/director/mr. krishna gopalaraman.jpg";
import shreyas from "../../../assets/images/director/shreyas.jpg";
import userPlaceholder from "../../../assets/images/user2.jpg";
import maninder from "../../../assets/images/directors/maninder singh juneja.png";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import { AnimatePresence, motion } from "framer-motion";

const boardMembers = [
  {
    name: "Mr. Sunil Rohokale",
    role: "Founder & Chairman",
    modalRole: "Founder & Chairman, Nivara Home Finance Limited",
    desc: "Sunil Rohokale is a distinguished leader in India’s banking and financial services industry, with over 32 years of experience in building and scaling high-performing financial institutions.",
    longDesc: "Recognized for his strategic vision and execution excellence, he has consistently created customer-centric, governance-driven businesses that have delivered sustainable growth and long-term stakeholder value.\n\nAs Founder and Chairman of Nivara Home Finance Limited, Mr. Rohokale is leading a new generation housing finance institution focused on advancing financial inclusion. Nivara leverages technology and innovative underwriting models to expand access to affordable home finance for self-employed individuals and underserved households.\n\nPrior to founding Nivara, he was Co-Founder, CEO and Managing Director of ASK Asset & Wealth Management Group, where he helped build one of India’s leading financial services platforms with over ₹78,000 crore (US$10 billion) in assets under management and advisory. Earlier, as Managing Director and CEO of ICICI Home Finance, he played a pivotal role in establishing ICICI Bank’s mortgage financing business of Rs 83,000 cr. As an industry leader creating one of India’s pioneering housing finance platforms.\n\nBeyond business, Mr. Rohokale is Co-Chair of the Geetanjali and Sunil Rohokale Foundation, which supports initiatives in education, healthcare, women’s empowerment, senior citizen welfare, and farmer livelihoods. A Mechanical Engineering graduate from Government College of Engineering, Pune, with a management degree from Symbiosis Institute of Management, he is also a mentor to entrepreneurs and young leaders, reflecting his enduring commitment to institution building and inclusive nation-building.",
    color: "red",
    img: sunilb,
  },
  {
    name: "Mr. C. V. Rao",
    role: "Founder, Managing Director & CEO",
    desc: "Brings over 30 years of leadership experience in banking and financial services, with deep expertise in retail lending and portfolio risk management.",
    longDesc: "Mr. C. V. Rao is the Founder, Managing Director & Chief Executive Officer of the Company. He brings over 30 years of leadership experience in banking and financial services, with deep expertise in retail lending, portfolio risk management, and building scalable businesses across economic and credit cycles.\n\nHe holds an M.Com from Andhra University and an MBA from Osmania University, Hyderabad. Early in his career, he served as a Research Assistant in Finance and Accounting at IIM Ahmedabad, where he also published research in reputed academic journals.\n\nMr. Rao has held senior leadership roles with leading private sector banks, including ICICI Bank, IndusInd Bank, and ING Vysya Bank (now Kotak Mahindra Bank). At ICICI Bank, he was part of the core team that scaled the mortgage business into a ₹20,000+ crore portfolio, contributing to market leadership. At ING Vysya Bank, he led national portfolios in Agriculture & Rural Banking and Consumer Assets.\n\nUnder his founding leadership, the Company has built resilience, strengthened its market position, and continues to focus on sustainable, long‑term value creation.",
    color: "green",
    img: rao,
  },
  {
    name: "Mr. Monik Koticha",
    role: "Founder and Director",
    desc: "Non-Executive Director and Promoter with over 20 years of experience in secondary markets and growth assets.",
    longDesc: "Mr. Monik Koticha is a Non-Executive Director of our Company and is also one of the Promoters. As a part of the promoter family of ASK Group – a renowned financial services group and a leading industry player in asset & wealth management, he has contributed significantly to the Company’s growth by providing strategic guidance and trusted leadership.\n\nHe also serves as CIO & Managing director at Fortress Holdings Pvt Ltd (Family Office of the Koticha family). An avid investor with over 20 years of experience. Mr. Koticha focuses on bottom-up investments in the secondary markets and other growth assets. He also serves on the boards of some of the companies where he has invested to help in a strategic manner to build scale.\n\nBeyond his business interests, Mr. Koticha leads the family and corporate philanthropic initiatives and is actively engaged in causes related to education, housing, and nation building.",
    color: "red",
    img: koticha,
  },
  {
    name: "Mr. Shreyas Ramanathan",
    role: "Executive Director & Chief Business Officer",
    desc: "Chartered Accountant and MBA with over 20+ years of experience across retail banking and financial services.",
    longDesc: "Shreyas Ramanathan serves as Executive Director on the Board of Nivara and Chief Business Officer of the Company. A Chartered Accountant, he holds an MBA from the Asian Institute of Management, Manila, and brings over 20+ years of experience across retail banking and financial services. In his current role, he is instrumental in advancing Nivara's mission of \"Housing for All\" by pioneering lending solutions tailored to the unserved and underserved segments of India's informal economy.\n\nDrawing on deep expertise in credit underwriting and portfolio management, and a proven track record of scaling businesses, Shreyas has developed sustainable lending models for self-employed professionals and micro-entrepreneurs in the EWS and LIG segments, many of whom are first-time borrowers. He also oversees collections and asset quality, ensuring Nivara upholds the highest standards of responsible lending while expanding access to affordable housing finance across urban and semi-urban markets.\n\nEarlier in his career, Shreyas built Ola Cabs leasing business from inception to over 10,000 vehicles with zero credit cost, establishing it as the country's largest captive leasing company in a record timeframe. Prior to that, he spent 12 years at ICICI Bank, where his final role was Policy Head for a ₹1.25 trillion secured assets portfolio. During his tenure at the bank, he held diverse roles across sales, credit, and risk in multiple geographies, spanning the retail, mid-corporate, and agri-business verticals.\n\nHis career reflects a consistent commitment to building transformative financial services businesses that serve underserved communities. Shreyas brings deep expertise in credit policy, risk management, and portfolio optimization, guided by the conviction that access to home finance is a fundamental enabler of dignified living and sustainable development for communities across India.",
    color: "green",
    img: shreyas,
  },
  {
    name: "Ms. Debanshi Basu",
    role: "Nominee Director",
    desc: "Partner at Baring Private Equity India with over 21 years of experience spanning private equity, investment banking, and audit.",
    longDesc: "Ms. Debanshi Basu serves as a Nominee Director representing Baring Private Equity India and is also a partner in the firm, leading investments and portfolio management in sectors including financial services, fintech, and agri-in-puts. She joined Baring in 2009 after being part of the founding investment banking team at Goldman Sachs India, where she worked on cross-sector M&A and capital market transactions. Earlier in her career, she was with Ernst & Young, overseeing statutory audits and internal control reviews.\n\nWith over 21 years of experience spanning private equity, investment banking, and audit, Ms. Basu has played a pivotal role in the investment and governance of companies such as SK Finance, Acko, Manappuram Finance, and Muthoot Fincorp. She also serves on the boards of SK Finance and Nehat Technologies, among others.\n\nMs. Basu is a Chartered Accountant and holds a Bachelor’s degree in Commerce from Osmania University.",
    color: "red",
    img: debanshi,
  },
  {
    name: "Mr. Maninder Singh Juneja",
    role: "Nominee Director",
    desc: "Over 30 years of professional experience in managing businesses in the financial services sector.",
    longDesc: "Mr. Maninder Singh Juneja serves as Nominee Director on the Board of Nivara on behalf of Greentribe Consumer Care LLP (True North) and is a Partner at the firm. He brings over 30 years of overall professional experience in managing businesses in the financial service sector.\n\nAt True North since 2016, Maninder works closely with portfolio companies and their leadership teams to drive strategic growth, operational excellence, and long-term value creation. His approach combines strong execution discipline with a sharp focus on customer-centric digital transformation.\n\nPrior to joining True North, he has set up and exponentially grown businesses in retail assets, deposit franchise, and third-party fees in his role of Retail Business Head at ICICI Bank. He has gained deep insights into digital transformation with customer-centricity at the core. He has overseen the evolution of retail financial services in India as a board member of CIBIL, NPCI, IARC, ICICI Home Finance Company Limited, and ICICI Merchant Services Limited.\n\nHe holds a bachelor’s degree in civil engineering from MS University and a Post Graduate Diploma in Management from IIM Lucknow.",
    color: "green",
    img: maninder,
  },
  {
    name: "Mr. Muthuswamy Venkata Jayaraman",
    role: "Independent Director",
    desc: "Over 39 years of extensive experience in risk management, retail and corporate banking, and branch operations.",
    longDesc: "Mr. Muthuswamy Venkata Jayaraman is an independent director of our Company. He brings over 39 years of extensive experience in risk management, retail and corporate banking, branch operations, and foreign exchange services. He served as the Chief Risk Officer at Fincare Small Finance Bank.\n\nThroughout his career, Mr. Jayaraman has held senior leadership positions at leading financial institutions including Kotak Mahindra Bank (formerly ING Vysya), ICICI Bank, Corporation Bank, and Andhra Bank.\n\nHe holds a Master of Business Law from the National Law School, Bangalore, postgraduate diplomas in Personnel Management and Banking from Annamalai University, and is a Certified Associate of the Indian Institute of Bankers (CAIIB). He has further strengthened his leadership capabilities through executive education at IIM Bangalore.",
    color: "red",
    img: jayaraman,
  },
  {
    name: "Mr. Krishna Gopalaraman",
    role: "Independent Director",
    desc: "Over 35 years of diverse cross-sector experience in consulting, manufacturing, and financial services operations.",
    longDesc: "Mr. Krishna Gopalaraman is an independent director of our Company and has over 35 years of diverse cross-sector experience and has held senior roles in reputed organizations such as Deloitte and Tech Mahindra. His consulting expertise spans manufacturing and financial services operations, supply chain management, and the execution of capital projects and plant turnarounds.\n\nHe has successfully led consulting engagements for prominent clients including IDBI, Tata Exports, Cholamandalam Finance, Shasun Pharma, Mahindra & Mahindra, and ACC. In addition, he has driven strategic initiatives in business intelligence, data analytics, and IT-enabled transformation for global Fortune 500 companies such as General Electric and ArcelorMittal.\n\nSince 2020, Mr. Gopalaraman has been on secondment to The Global Fund in Geneva, where he supports key data and analytics initiatives from India.\n\nHe holds a degree in Mechanical Engineering from Bombay University, a postgraduate qualification in Management from IRMA, Anand, is an Associate Member of the Institute of Cost Accountants of India (ICMAI), and a Chartered Financial Analyst (CFA) from ICFAI.",
    color: "green",
    img: krishna,
  },
];

const BoardOfDirectors = () => {
  const [selectedMember, setSelectedMember] = React.useState(null);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <>
      <section className="board-section">
        <ScrollReveal direction="up">
          <div className="board-header">
            <span className="board-tag">Board of Directors</span>
            {/* <h2>Our Visionary Leadership</h2> */}
            <p>Guiding our mission to provide affordable housing finance to every Indian family</p>
          </div>
        </ScrollReveal>

        <div className="board-grid">
          {boardMembers
            .filter((item) => !item.hidden)
            .map((item, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={0.1 + (index % 3) * 0.15}
              distance={40}
              scale={0.9}
            >
              <div
                className={`board-card ${item.color} ${item.name.includes("Shreyas") ? "shreyas-card" : ""}`}
                onClick={() => {
                  setSelectedMember(item);
                  setIsExpanded(false);
                }}
              >
                <div className="image-wrapper">
                  <img src={item.img} alt={item.name} />
                  <span className={`role-tag ${item.name.includes("Shreyas") ? "shreyas-tag" : ""}`}>{item.role}</span>
                </div>

                <div className="board-content">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <button className="view-bio-btn" onClick={() => {
                    setSelectedMember(item);
                    setIsExpanded(false);
                  }}>View Details</button>
                </div>

                <div className="leadership-strip-animated"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        {/* <p className="board-updated-date" style={{ textAlign: "center", marginTop: "40px", color: "#211F1F", fontSize: "18px" }}>
          Updated 30.04.2026
        </p> */}
      </section>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="unique-leadership-modal-overlay"
            onClick={() => {
              setSelectedMember(null);
              setIsExpanded(false);
            }}
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
                onClick={() => {
                  setSelectedMember(null);
                  setIsExpanded(false);
                }}
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
                  fontSize: "28px",
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
                  <h2 style={{ fontWeight: 700, fontSize: "36px", margin: '0 0 5px 0', color: '#211F1F', lineHeight: '1.1' }}>
                    {selectedMember.name}
                  </h2>
                  <span style={{ display: 'block', fontSize: "17px", textTransform: 'uppercase', fontWeight: 600, letterSpacing: '1.2px', color: '#B3191F', marginBottom: '20px' }}>
                    {selectedMember.modalRole || selectedMember.role}
                  </span>
                  <div style={{ width: '60px', height: '6px', backgroundColor: '#B3191F', marginBottom: '30px', borderRadius: '3px' }}></div>
                  <p style={{ fontSize: "20px", fontWeight: 600, color: '#211F1F', marginBottom: '25px', lineHeight: '1.5' }}>
                    {selectedMember.desc}
                  </p>
                  <div>
                    <p style={{ fontSize: "18px", lineHeight: '1.8', color: "#211F1F", fontWeight: 400, textAlign: 'justify', whiteSpace: 'pre-line' }}>
                      {isExpanded ? selectedMember.longDesc : `${selectedMember.longDesc.substring(0, 200)}...`}
                    </p>
                    {selectedMember.longDesc.length > 200 && (
                      <button
                        onClick={toggleReadMore}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#B3191F',
                          fontWeight: 700,
                          cursor: 'pointer',
                          padding: '0',
                          marginTop: '10px',
                          fontSize: "19px",
                          textDecoration: 'underline'
                        }}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>
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
