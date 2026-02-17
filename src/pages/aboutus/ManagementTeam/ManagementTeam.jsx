import React from "react";
import "./ManagementTeam.css"; 


import cbo from "../../../assets/images/cbo.jpg";
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
  return (
    <section className="management-section">
      <div className="management-header">
        <span className="management-heading">Management Team</span>
        <h2>Our Management Leadership</h2>
        <p>Experienced professionals managing operations, governance, and business excellence</p>
      </div>

      <div className="management-grid">
        {managementTeam.map((item, index) => (
          <div className={`management-card ${item.color}`} key={index}>
            <div className="management-image">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="management-content">
              <span className="management-role">{item.role}</span>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManagementTeam;
