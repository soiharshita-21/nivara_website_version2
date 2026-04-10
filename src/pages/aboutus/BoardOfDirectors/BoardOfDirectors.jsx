import React, { useEffect } from "react";
import "./BoardOfDirectors.css";
import exe from "../../../assets/images/exe.jpg";
import fin from "../../../assets/images/fin.jpg";
import cus from "../../../assets/images/cus.jpg";
import hum from "../../../assets/images/hum.jpg";
import op from "../../../assets/images/op.jpg";
import cre from "../../../assets/images/cre.jpg";

const boardMembers = [
  {
    name: "Arjun Mehta",
    role: "Chief Executive Officer",
    desc: "Visionary leader driving company growth, strategy, and long-term success.",
    color: "rose",
    img: exe,
  },
  {
    name: "Neha Sharma",
    role: "Chief Financial Officer",
    desc: "Oversees financial planning, risk management, and sustainable profitability.",
    color: "orange",
    img: fin,
  },
  {
    name: "Rohit Verma",
    role: "Chief Operations Officer",
    desc: "Manages operations, execution, and business process excellence.",
    color: "green",
    img: op,
  },
  {
    name: "Priya Pillai",
    role: "Head of Customer Relations",
    desc: "Leads customer experience and service excellence initiatives.",
    color: "yellow",
    img: cus,
  },
  {
    name: "Suresh Varma",
    role: "Head of Credit & Risk",
    desc: "Drives credit assessment, compliance, and portfolio risk control.",
    color: "purple",
    img: cre,
  },
  {
    name: "Anitha Nambiar",
    role: "Head of Human Resources",
    desc: "Builds culture, leadership, and talent development strategies.",
    color: "pink",
    img: hum,
  },
];

const BoardOfDirectors = () => {
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
              style={{transitionDelay: `${0.1 + index * 0.1}s` }} 
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
