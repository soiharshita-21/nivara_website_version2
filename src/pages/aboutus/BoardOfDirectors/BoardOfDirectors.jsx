import React, { useEffect } from "react";
import "./BoardOfDirectors.css";
import rao from "../../../assets/images/director/Rao (1).jpg";
import rohokale from "../../../assets/images/director/Rohokale (1).jpg";
import koticha from "../../../assets/images/director/Koticha.jpg";
import debanshi from "../../../assets/images/director/Debanshi-Photo.png";
import jayaraman from "../../../assets/images/director/Nivara.jpg";
import krishna from "../../../assets/images/director/Nivara-2.jpg";

const boardMembers = [
  {
    name: "Mr. C V Rao",
    role: "MD & CEO",
    desc: "Brings over 30 years of leadership experience in banking and financial services, with deep expertise in portfolio risk management and retail lending.",
    color: "rose",
    img: rao,
  },
  {
    name: "Mr. Sunil Rohokale",
    role: "Director",
    desc: "Over 29 years of experience in banking, lending, and asset management. Sets the vision for the ASK Asset & Wealth Management Group.",
    color: "orange",
    img: rohokale,
  },
  {
    name: "Mr. Monik Koticha",
    role: "Director",
    desc: "Part of the promoter family of the ASK Group and responsible for the corporate philanthropic initiatives of the group.",
    color: "green",
    img: koticha,
  },
  {
    name: "Ms. Debanshi Basu",
    role: "Nominee Director",
    desc: "Partner at Baring Private Equity India and a qualified Chartered Accountant with over 21 years of experience in private equity and investment banking.",
    color: "yellow",
    img: debanshi,
  },
  {
    name: "Mr. Muthuswamy Venkata Jayaraman",
    role: "Independent Director",
    desc: "39 years of experience in risk management, retail/corporate banking, and foreign exchange.",
    color: "purple",
    img: jayaraman,
  },
  {
    name: "Mr. Krishna Gopalaraman",
    role: "Independent Director",
    desc: "Mechanical Engineer and CFA with over 35 years of experience in manufacturing, financial services, and IT-enabled transformation.",
    color: "pink",
    img: krishna,
  },
];

const BoardOfDirectors = () => {
  const [selectedMember, setSelectedMember] = React.useState(null);

  useEffect(() => {
    console.log("Leadership Modal Layout Version 3.0 Loaded");
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
      <section className="board-section animate-pop-up">
        <div className="board-header animate-pop-up">
          <span className="board-tag">Board of Directors</span>
          <h2 className="animate-pop-up">Our Leadership & Board</h2>
          <p>Meet the professionals guiding our vision, growth, and governance</p>
        </div>

        <div className="board-grid">
          {boardMembers.map((item, index) => (
            <div
              className={`board-card ${item.color} animate-pop-up`}
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              key={index}
              onClick={() => setSelectedMember(item)}
            >
              <div className="image-wrapper">
                <img src={item.img} alt={item.name} />
                <span className="role-tag">{item.role}</span>
              </div>

              <div className="board-content animate-pop-up">
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
          <div
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
                  With years of experience in the industry, {selectedMember.name} has played a pivotal role in shaping Nivara's mission. Their expertise in {selectedMember.role} continues to drive our excellence in housing finance solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BoardOfDirectors;