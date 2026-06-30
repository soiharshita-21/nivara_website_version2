import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./PressRelease.css";

// Banner
import media2 from "../../../assets/images/media2.png";

// Card Images
import pressrelease from "../../../assets/images/pressrelease.png";
import pressrelease1 from "../../../assets/images/pressrelease1.png";
import pressrelease2 from "../../../assets/images/pressrelease2.jpg";
import pressrelease3 from "../../../assets/images/pressrelease3.png";
import pressrelease4 from "../../../assets/images/pressrelease4.png";
import pressrelease5 from "../../../assets/images/pressrelease5.png";

export const pressData = [
  {
    img: pressrelease,
    title: "Nivara's 100th branch inauguration marks a significant milestone",
    meta: "Bangarpet, March 2026 - Kannada News Hub 24",
    desc: "Nivara has achieved a significant milestone in its decade-long journey of achievement by inaugurating its 100th branch in Bangarpet. Founded 10 years ago, Nivara is dedicated to helping low and middle-income families realize their dream of owning their own home.",
    link: "https://kannadanewshub24.com/niwaras-100th-branch-inaugurated/"
  },
  {
    img: pressrelease5,
    title: "Baring Private Equity invests $10 mn in Nivara Home Finance",
    meta: "Updated Apr 05, 2024 - Business Today",
    desc: "Founded in 2015, Nivara Home Finance is focused on providing affordable housing finance to micro-entrepreneurs and salaried customers; currently operates across five states—Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, and Maharashtra.",
    link: "https://www.businesstoday.in/latest/corporate/story/baring-private-equity-invests-10-mn-in-nivara-home-finance-424428-2024-04-05"
  },
  {
    img: pressrelease1,
    title: "True North leads Series B funding in Nivara Home Finance",
    meta: "Series B Funding - Business Standard",
    desc: "Nivara Home Finance Ltd said Monday it has raised fresh capital in a Series B funding round led by private equity firm True North. True North, via its seventh fund, invested Rs 170 crore while Baring PE India chipped in with Rs 50 crore.",
    link: "https://www.business-standard.com/companies/news/nivara-home-finance-raises-rs-245-cr-in-series-b-round-led-by-true-north-125031700468_1.html"
  },
  {
    img: pressrelease2,
    title: "Bankers, the frontline warriors in India’s coming fintech revolution",
    meta: "24 Jun 2018 - Economic Times by Rahul Sachitanand",
    desc: "CV Rao, a banker with more than two decades of experience, took the old-fashioned route with his venture, Nivara Home Finance. The former senior executive with ICICI Bank decided to avoid the crowded market serviced by large financial companies.",
    link: "https://economictimes.indiatimes.com/industry/banking/finance/bankers-the-frontline-warriors-in-indias-coming-fintech-revolution/articleshow/64713802.cms"
  },
  {
    img: pressrelease3,
    title: "Sub-prime borrowers fuel affordable housing boom for lenders, HFCs",
    meta: "3 July 2018 - Business Standard by Namrata Acharya",
    desc: "“Our typical clients are workers — such as carpenters, drivers, barbers or domestic helps — who possess some land from ancestral property. The growth in the segment is quite robust,” said C V Rao, managing director and CEO, Nivara.",
    link: "https://www.business-standard.com/article/finance/sub-prime-borrowers-fuel-affordable-housing-boom-for-lenders-hfcs-118070300371_1.html"
  },
  {
    img: pressrelease4,
    title: "Micro housing finance companies choke on acute fund crunch post DHFL crisis",
    meta: "10 Jun 2019 - Business Standard by Namrata Acharya",
    desc: "Micro housing finance companies are finding it increasingly difficult to raise funds with the crisis at Dewan Housing Finance Limited (DHFL) worsening. The push for affordable housing has led to the mushrooming of several micro housing finance firms.",
    link: "https://www.business-standard.com/article/finance/micro-housing-finance-companies-choke-on-acute-fund-crunch-post-dhfl-crisis-119061000574_1.html"
  }
];

const PressRelease = () => {
  const [allNews, setAllNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPress = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/press`);
        const dbNews = response.data.map(n => ({
          img: n.image_url || n.image,
          title: n.title,
          meta: n.meta || new Date(n.date).toLocaleDateString() || n.date,
          desc: n.content || n.desc,
          link: n.link_url || n.link || n.source_url
        }));

        // Merge backend database news with local pressData baseline
        const mergedNews = [...pressData];
        dbNews.forEach(dbItem => {
          const index = mergedNews.findIndex(localItem => 
            localItem.title.toLowerCase().trim() === dbItem.title.toLowerCase().trim()
          );
          if (index !== -1) {
            mergedNews[index] = {
              ...mergedNews[index],
              ...dbItem,
              img: dbItem.img || mergedNews[index].img,
              link: dbItem.link || mergedNews[index].link
            };
          } else {
            mergedNews.unshift(dbItem);
          }
        });
        setAllNews(mergedNews);
      } catch (error) {
        console.error("Error fetching press releases:", error);
        // Fallback
        const saved = JSON.parse(localStorage.getItem("nivara_news"));
        if (saved && saved.length > 0) {
          const formattedSaved = saved.map(n => ({
            img: n.image,
            title: n.title,
            meta: n.meta || n.date,
            desc: n.desc,
            link: n.link
          }));
          // Merge local storage items as well
          const mergedSaved = [...pressData];
          formattedSaved.forEach(sItem => {
            const index = mergedSaved.findIndex(localItem => 
              localItem.title.toLowerCase().trim() === sItem.title.toLowerCase().trim()
            );
            if (index !== -1) {
              mergedSaved[index] = {
                ...mergedSaved[index],
                ...sItem,
                img: sItem.img || mergedSaved[index].img,
                link: sItem.link || mergedSaved[index].link
              };
            } else {
              mergedSaved.unshift(sItem);
            }
          });
          setAllNews(mergedSaved);
        } else {
          setAllNews(pressData);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPress();
  }, []);


  React.useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".press-card.animate-pop-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [allNews, loading]);


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
      <div className="press-container">
        {allNews.map((item, index) => (
          <div 
            className="press-card animate-pop-up" 
            key={index}
            style={{ transitionDelay: `${(index % 3) * 150}ms` }}
          >

            <div className="press-img">
              <img src={item.img || pressrelease1} alt={item.title || "Press Release"} />
            </div>

            <div className="press-content animate-pop-up">
              <h3 className="animate-pop-up">{item.title}</h3>
              <span className="press-meta">{item.meta ? item.meta.toUpperCase() : ""}</span>
              <p>{item.desc}</p>
              {item.link ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="press-read"
                >
                  Read More
                </a>
              ) : (
                <button className="press-read">Read More</button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};


export default PressRelease;