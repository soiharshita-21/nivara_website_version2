import React from "react";
import { Link } from "react-router-dom";
import "./PressRelease.css";

// Banner
import media2 from "../../../assets/images/media2.png";

// Card Images (you will import real images)
// import slide1 from "../../../assets/images/slide1.jpg";
// import slide2 from "../../../assets/images/slide2.jpg";
// import slide3 from "../../../assets/images/slide3.jpg";
// import slide5 from "../../../assets/images/slide5.jpeg";
// import slide4 from "../../../assets/images/slide4.jpg";
import pressrelease1 from "../../../assets/images/pressrelease1.png";
import pressrelease2 from "../../../assets/images/pressrelease2.jpg";
import pressrelease3 from "../../../assets/images/pressrelease3.png";
import pressrelease4 from "../../../assets/images/pressrelease4.png";
import pressrelease5 from "../../../assets/images/pressrelease5.png";

export const pressData = [

  {
    img: pressrelease1,
    title: "True North leads Series B funding in Nivara Home Finance",
    meta: "Series B Funding",
    desc: "True North, via its seventh fund, invested Rs 170 crore while existing investor Baring PE India chipped in with Rs 50 crore...",
  },
  {
    img: pressrelease2,
    title: "Bankers, the frontline warriors in India’s coming fintech revolution",
    meta: "24 Jun 2018 – Economic Times",
    desc: "CV Rao, a banker with more than two decades of experience, took the old-fashioned route with his venture, Nivara Home Finance...",
  },
  {
    img: pressrelease3,
    title: "Sub-prime borrowers fuel affordable housing boom for lenders, HFCs",
    meta: "3 July 2018 – Business Standard",
    desc: "Our typical clients are workers such as carpenters, drivers, barbers or domestic helps...",
  },
  {
    img: pressrelease4,
    title: "Micro housing finance companies choke on acute fund crunch post DHFL crisis",
    meta: "10 Jun 2019 – Business Standard",
    desc: "Micro housing finance companies are finding it increasingly difficult to raise funds...",
  },
  {
    img: pressrelease5,
    title: "Baring Private Equity invests $10 mn in Nivara Home Finance",
    meta: "Updated Apr 05, 2024",
    desc: "Founded in 2015, Nivara Home Finance is focused on providing affordable housing finance...",
  },
];

import axios from "axios";

const PressRelease = () => {
  const [allNews, setAllNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPress = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/press");
        const formattedData = response.data.map(n => ({
          img: n.image_url || n.image,
          title: n.title,
          meta: n.meta || new Date(n.date).toLocaleDateString() || n.date,
          desc: n.content || n.desc
        }));
        setAllNews(formattedData);
      } catch (error) {
        console.error("Error fetching press releases:", error);
        // Fallback
        const saved = JSON.parse(localStorage.getItem("nivara_news"));
        if (saved && saved.length > 0) {
          const formattedSaved = saved.map(n => ({
            img: n.image,
            title: n.title,
            meta: n.meta || n.date,
            desc: n.desc
          }));
          setAllNews(formattedSaved);
        } else {
          setAllNews(pressData);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPress();
  }, []);


  return (
    <div className="press-page">

      {/* Banner */}
      <section className="page-banner" style={{ backgroundImage: `url(${media2})` }}>
        <div className="page-banner-overlay"></div>
        <div className="page-banner-content">
          <h1 className="page-banner-title">
            Press <span className="text-red">Release</span>
          </h1>
          <p className="page-banner-subtitle">
            Official announcements and major milestones from Nivara.
          </p>
        </div>
      </section>

      {/* Cards */}
      <div className="press-container animate-pop-up">
        {allNews.map((item, index) => (
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