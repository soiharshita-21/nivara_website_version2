import React from "react";
import "./ManagementTeam.css";
import shreyas from "../../../assets/images/CET/Shreyas_Ramanathan (1).jpg";
import srinivasan from "../../../assets/images/CET/Srinivasan-CV_NEW (1).jpg";
import suresh from "../../../assets/images/CET/Suresh (2).jpg";
import aditya from "../../../assets/images/CET/Aditya (2).jpg";
import sidharth from "../../../assets/images/CET/Mr Sidharth Vij.jpg";
import nagesh from "../../../assets/images/CET/Nagesh (1).jpg";
import venkat from "../../../assets/images/CET/Mr. Venkat Sharma Konduri.jpeg";
import babu from "../../../assets/images/CET/Babu-Abraham (1).png";
import raina from "../../../assets/images/CET/Raina DSilva.jpg";
import bonojit from "../../../assets/images/CET/Mr. Bonojit Ukil.jpg";
import thimmaiah from "../../../assets/images/CET/C-G-Thimmah.jpg";
import raja from "../../../assets/images/CET/Mr. Raja Shankarasubramanian.webp";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import { AnimatePresence, motion } from "framer-motion";

const managementTeamData = [
  {
    name: "Mr. Shreyas Ramanathan",
    role: "Chief Business Officer",
    desc: "Over 18 years of experience in Retail and SME lending, having worked extensively in credit underwriting and policy at ICICI Bank and OLA.",
    longDesc: "Mr. Shreyas Ramanathan is a Chartered Accountant and holds an MBA from Asian Institute of Management, Manila. He has more than 18 years of work experience in Retail and SME lending, having worked at ICICI Bank for 12 years and later managing the leasing portfolio at OLA.",
    color: "red",
    img: shreyas,
  },
  {
    name: "Mr. Srinivasan C V",
    role: "Chief Financial Officer",
    desc: "Chartered Accountant with 25+ years of experience across financial services, manufacturing, and IT sectors, previously CFO at Chaitanya India.",
    longDesc: "Mr. Srinivasan CV is a Chartered Accountant and a Cost Accountant with more than 25 years of experience. He completed the AGMP from IIM Ahmedabad. Previously, he was CFO at Chaitanya India Fin Credit Pvt. Ltd and has experience in diverse industries such as financial services, manufacturing, and IT distribution.",
    color: "green",
    img: srinivasan,
  },
  {
    name: "Mr. Suresh G",
    role: "Head of Collections",
    desc: "22 years of experience in Risk and Debt management, specializing in Collections, Recovery, and Process Improvement.",
    longDesc: "Mr. Suresh G has about 21 years of experience in Financial services and Telecom. He specializes in Collections and Recovery and has worked with Karvy Financial Services (now SBFC) as Head – Collections for AP and Telangana, as well as ICICI Bank and Bharti Airtel.",
    color: "red",
    img: suresh,
  },
  {
    name: "Mr. Aditya PVN",
    role: "Head of HR",
    desc: "20+ years of experience in HR across BFSI and Telecom, with previous leadership roles at Jana Small Finance Bank and Tata Teleservices.",
    longDesc: "Mr. Aditya PVN holds an MBA in HR with about 14 years of experience in the BFSI sector. He previously worked with Karvy Financial Services Ltd. (now SBFC) as HR-Manager for AP & Telangana, focusing on talent acquisition, performance management, and employee relations.",
    color: "green",
    img: aditya,
  },
  {
    name: "Mr. Sidharth Vij",
    role: "National Credit Manager",
    desc: "Two decades of experience in Strategic Credit Solutions and Risk Management, with a proven track record in establishing mortgage businesses.",
    longDesc: "Mr. Sidharth Vij is an MBA in Finance with over 13 years of experience in Retail Lending (HL, LAP, and Mortgage loans). He was previously Area Credit Manager at Piramal Capital and has worked with DHFL and ICICI Bank.",
    color: "red",
    img: sidharth,
  },
  {
    name: "Mr. Nagesh H S",
    role: "State Head – Karnataka",
    desc: "Nearly 20 years of experience in Banking and Mortgage industries, expert in setting up retail branch networks and distribution channels.",
    longDesc: "Mr. Nagesh H S is an MBA graduate with nearly 20 years of experience in banking and finance. A founder member of Nivara, he has also worked with Karvy Financial Services, Aviom India Housing Finance, and IDFC First Bank.",
    color: "green",
    img: nagesh,
  },
  {
    name: "Mr. Venkat Sharma Konduri",
    role: "State Head – AP & Telangana",
    desc: "24 years of experience in Sales Distribution, Home Loans, and Mortgages, with expertise in building businesses from scratch.",
    longDesc: "Mr. Venkat Sharma Konduri has 24 years of experience in Sales Distribution in Home Loans and Mortgages. He holds an MBA from IIM Amritsar and has worked at Adani Capital, Vistaar Finance, and Karvy Financial services.",
    color: "red",
    img: venkat,
  },
  {
    name: "Mr. Babu Abraham",
    role: "Legal Head",
    desc: "In-house Legal Counsel with 20+ years of experience in corporate law, litigation, and regulatory compliance.",
    longDesc: "Mr. Babu Abraham has over 20 years of experience as an In-house Legal Counsel. He holds LLB and MBA degrees and is skilled in litigation, regulatory compliance, and legal recovery. He previously worked with Mantri Developers, Tata Motor Finance, and Fullerton.",
    color: "green",
    img: babu,
  },
  {
    name: "Mrs. Raina D’ Silva",
    role: "Company Secretary",
    desc: "CS and Law graduate with 10 years of experience in secretarial compliance and corporate governance.",
    longDesc: "Mrs. Raina D' Silva is a CS and Law graduate with 10 years of experience. She previously worked with Fineotex Chemical Ltd and HSBC Electronic Data Processing India Pvt. Ltd and is well-versed in the Companies Act and RBI/SEBI directions.",
    color: "red",
    img: raina,
  },
  {
    name: "Mr. Bonojit Ukil",
    role: "Chief Compliance Officer",
    desc: "Four decades of experience in policy formulation and process management within the Banking and Financial Services space.",
    longDesc: "Mr. Bonojit Ukil has four decades of experience in banking and finance. Previously, he worked at UCO Bank, Bank of Punjab, Ujjivan Small Finance Bank, and Aye Finance, specializing in policy formulation and compliance risk.",
    color: "green",
    img: bonojit,
  },
  {
    name: "Mr. C. G. Thimmaiah",
    role: "Head – Audit",
    desc: "30+ years of experience in Retail Asset management, credit appraisal, and audit across multiple states in India.",
    longDesc: "Mr. C. G. Thimmaiah has about 12 years of experience in internal audit within the BFSI sector. He previously worked at Karvy Financial Services (now SBFC), HDB Financial Services, and ICICI Bank.",
    color: "red",
    img: thimmaiah,
  },
  {
    name: "Mr. Raja Shankarasubramanian",
    role: "Head – IT & Digital",
    desc: "Techno Ops leader with 30 years of experience in transforming IT into a core business enabler through digital initiatives.",
    longDesc: "Mr. Raja Shankarasubramanian is an IT professional with over 13 years of experience. He was previously Manager-IT at Karvy Financial Services and has worked with Tata Business Support Services and TVS Sundaram Iyengar & Sons.",
    color: "green",
    img: raja,
  },
];

const ManagementTeam = () => {
  const [selectedMember, setSelectedMember] = React.useState(null);

  return (
    <>
      <section className="management-section">
        <ScrollReveal direction="up">
          <div className="management-header">
            <span className="management-heading">Management Team</span>
            <h2>Our Management Leadership</h2>
            <p>Experienced professionals managing operations, governance, and business excellence</p>
          </div>
        </ScrollReveal>

        <div className="management-grid">
          {managementTeamData.map((item, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={0.1 + (index % 4) * 0.1} 
              distance={40}
              scale={0.9}
            >
              <div
                className={`management-card ${item.color}`}
                onClick={() => setSelectedMember(item)}
              >
                <div className="management-image">
                  <img src={item.img} alt={item.name} />
                </div>

                <div className="management-content">
                  <span className="management-role">{item.role}</span>
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
            className="unique-management-modal-overlay"
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
              className="unique-management-modal-content"
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

export default ManagementTeam;
