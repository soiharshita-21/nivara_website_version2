import React, { useEffect } from "react";
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

const managementTeam = [
  {
    name: "Mr. Shreyas Ramanathan",
    role: "Chief Business Officer",
    desc: "Over 18 years of experience in Retail and SME lending, having worked extensively in credit underwriting and policy at ICICI Bank and OLA.",
    color: "rose",
    img: shreyas,
  },
  {
    name: "Mr. Srinivasan C V",
    role: "Chief Financial Officer",
    desc: "Chartered Accountant with 25+ years of experience across financial services, manufacturing, and IT sectors, previously CFO at Chaitanya India.",
    color: "orange",
    img: srinivasan,
  },
  {
    name: "Mr. Suresh G",
    role: "Head of Collections",
    desc: "22 years of experience in Risk and Debt management, specializing in Collections, Recovery, and Process Improvement.",
    color: "green",
    img: suresh,
  },
  {
    name: "Mr. Aditya PVN",
    role: "Head of HR",
    desc: "20+ years of experience in HR across BFSI and Telecom, with previous leadership roles at Jana Small Finance Bank and Tata Teleservices.",
    color: "yellow",
    img: aditya,
  },
  {
    name: "Mr. Sidharth Vij",
    role: "National Credit Manager",
    desc: "Two decades of experience in Strategic Credit Solutions and Risk Management, with a proven track record in establishing mortgage businesses.",
    color: "purple",
    img: sidharth,
  },
  {
    name: "Mr. Nagesh H S",
    role: "State Head – Karnataka",
    desc: "Nearly 20 years of experience in Banking and Mortgage industries, expert in setting up retail branch networks and distribution channels.",
    color: "pink",
    img: nagesh,
  },
  {
    name: "Mr. Venkat Sharma Konduri",
    role: "State Head – AP & Telangana",
    desc: "24 years of experience in Sales Distribution, Home Loans, and Mortgages, with expertise in building businesses from scratch.",
    color: "rose",
    img: venkat,
  },
  {
    name: "Mr. Babu Abraham",
    role: "Legal Head",
    desc: "In-house Legal Counsel with 20+ years of experience in corporate law, litigation, and regulatory compliance.",
    color: "orange",
    img: babu,
  },
  {
    name: "Mrs. Raina D’ Silva",
    role: "Company Secretary",
    desc: "CS and Law graduate with 10 years of experience in secretarial compliance and corporate governance.",
    color: "green",
    img: raina,
  },
  {
    name: "Mr. Bonojit Ukil",
    role: "Chief Compliance Officer",
    desc: "Four decades of experience in policy formulation and process management within the Banking and Financial Services space.",
    color: "yellow",
    img: bonojit,
  },
  {
    name: "Mr. C. G. Thimmaiah",
    role: "Head – Audit",
    desc: "30+ years of experience in Retail Asset management, credit appraisal, and audit across multiple states in India.",
    color: "purple",
    img: thimmaiah,
  },
  {
    name: "Mr. Raja Shankarasubramanian",
    role: "Head – IT & Digital",
    desc: "Techno Ops leader with 30 years of experience in transforming IT into a core business enabler through digital initiatives.",
    color: "pink",
    img: raja,
  },
];

const ManagementTeam = () => {
  const [selectedMember, setSelectedMember] = React.useState(null);

  useEffect(() => {
    console.log("Management Modal Layout Unique Loaded");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".animate-pop-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <section className="management-section animate-pop-up">
        <div className="management-header animate-pop-up">
          <span className="management-heading animate-pop-up">Management Team</span>
          <h2 className="animate-pop-up">Our Management Leadership</h2>
          <p>Experienced professionals managing operations, governance, and business excellence</p>
        </div>

        <div className="management-grid">
          {managementTeam.map((item, index) => (
            <div
              className={`management-card ${item.color} animate-pop-up`}
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              key={index}
              onClick={() => setSelectedMember(item)}
            >
              <div className="management-image">
                <img src={item.img} alt={item.name} />
              </div>

              <div className="management-content animate-pop-up">
                <span className="management-role">{item.role}</span>
                <h3 className="animate-pop-up">{item.name}</h3>
                <p>{item.desc}</p>
                <button className="view-bio-btn" onClick={() => setSelectedMember(item)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Profile Modal */}
      {selectedMember && (
        <div
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
          <div
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
              <div style={{ flex: '0 0 55%', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff', overflowY: 'auto' }}>
                <span style={{ display: 'block', fontSize: '14px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1.5px', color: '#d32f2f', marginBottom: '12px' }}>
                  {selectedMember.role}
                </span>
                <h2 style={{ fontWeight: 900, fontSize: '42px', margin: '0 0 15px 0', color: '#1a1a1a', lineHeight: '1.1' }}>
                  {selectedMember.name}
                </h2>
                <div style={{ width: '60px', height: '6px', backgroundColor: '#d32f2f', marginBottom: '30px', borderRadius: '3px' }}></div>
                <p style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.5' }}>
                  {selectedMember.desc}
                </p>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#4b5563', fontWeight: 400 }}>
                  As part of the core management team at Nivara, {selectedMember.name} brings extensive expertise in {selectedMember.role}. Their leadership is instrumental in our operational success and commitment to providing accessible home finance.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManagementTeam;