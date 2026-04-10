import React, { useEffect } from "react";
import "./ManagementTeam.css";


import cbo from "../../../assets/images/blogimg1.png";
import hr from "../../../assets/images/hr.jpg";
import collections from "../../../assets/images/collections.jpg";
import credit from "../../../assets/images/credit.jpg";
import legal from "../../../assets/images/legal.jpg";
import cs from "../../../assets/images/cs.jpg";

const managementTeam = [
  {
    name: "Rakesh Iyer",
    role: "Chief Business Officer",
    desc: "Drives business growth, partnerships, strategy execution, and market expansion initiatives.",
    color: "rose",
    img: cbo,
  },
  {
    name: "Meera Kulkarni",
    role: "Head of HR",
    desc: "Leads talent strategy, culture building, leadership development, and employee engagement.",
    color: "pink",
    img: hr,
  },
  {
    name: "Amit Deshpande",
    role: "Head of Collections",
    desc: "Oversees collections strategy, recovery operations, and portfolio health management.",
    color: "orange",
    img: collections,
  },
  {
    name: "Vikram Rao",
    role: "National Credit Manager",
    desc: "Manages national credit policy, underwriting standards, and risk governance.",
    color: "purple",
    img: credit,
  },
  {
    name: "Pooja Menon",
    role: "Legal Head",
    desc: "Leads legal compliance, regulatory governance, and corporate legal strategy.",
    color: "green",
    img: legal,
  },
  {
    name: "Sanjay Khanna",
    role: "Company Secretary",
    desc: "Ensures corporate governance, statutory compliance, and board governance frameworks.",
    color: "yellow",
    img: cs,
  },
];

const ManagementTeam = () => {
  const [selectedMember, setSelectedMember] = React.useState(null);

  useEffect(() => {
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
        <div className="team-modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="team-modal-content animate-pop-up visible" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedMember(null)}>&times;</button>
            
            <div className="modal-body">
              <div className={`modal-image-side ${selectedMember.color}`}>
                <img src={selectedMember.img} alt={selectedMember.name} />
              </div>
              <div className="modal-info-side">
                <span className="modal-role">{selectedMember.role}</span>
                <h2>{selectedMember.name}</h2>
                <div className="modal-divider"></div>
                <p className="modal-desc">{selectedMember.desc}</p>
                <p className="modal-bio-placeholder">
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
