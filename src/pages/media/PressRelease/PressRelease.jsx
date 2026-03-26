import React from "react";
import "./PressRelease.css";

// Banner
import home2 from "../../../assets/images/home2.png";

// Card Images (you will import real images)
import slide1 from "../../../assets/images/slide1.jpg";
import slide2 from "../../../assets/images/slide2.jpg";
import slide3 from "../../../assets/images/slide3.jpg";
import slide5 from "../../../assets/images/slide5.jpeg";
import slide4 from "../../../assets/images/slide4.jpg";

const pressData = [
  {
    img: slide1,
    title: "True North leads Series B funding in Nivara Home Finance",
    meta: "Series B Funding",
    desc: "True North, via its seventh fund, invested Rs 170 crore while existing investor Baring PE India chipped in with Rs 50 crore...",
  },
  {
    img: slide2,
    title: "Bankers, the frontline warriors in India’s coming fintech revolution",
    meta: "24 Jun 2018 – Economic Times",
    desc: "CV Rao, a banker with more than two decades of experience, took the old-fashioned route with his venture, Nivara Home Finance...",
  },
  {
    img: slide3,
    title: "Sub-prime borrowers fuel affordable housing boom for lenders, HFCs",
    meta: "3 July 2018 – Business Standard",
    desc: "Our typical clients are workers such as carpenters, drivers, barbers or domestic helps...",
  },
  {
    img: slide5,
    title: "Micro housing finance companies choke on acute fund crunch post DHFL crisis",
    meta: "10 Jun 2019 – Business Standard",
    desc: "Micro housing finance companies are finding it increasingly difficult to raise funds...",
  },
  {
    img: slide4,
    title: "Baring Private Equity invests $10 mn in Nivara Home Finance",
    meta: "Updated Apr 05, 2024",
    desc: "Founded in 2015, Nivara Home Finance is focused on providing affordable housing finance...",
  },
];

const PressRelease = () => {
  return (
    <div className="press-page">

      {/* Banner */}
      <div className="press-banner animate-pop-up">
        <img src={home2} alt="Press Release" />
        <h1 className="press-title animate-pop-up">Press Release</h1>
      </div>

      {/* Cards */}
      <div className="press-container animate-pop-up">
        {pressData.map((item, index) => (
          <div className="press-card animate-pop-up" key={index}>

            <div className="press-img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="press-content animate-pop-up">
              <h3 className="animate-pop-up">{item.title}</h3>
              <span className="press-meta">{item.meta}</span>
              <p>{item.desc}</p>
              <button className="press-read">Read More</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default PressRelease;