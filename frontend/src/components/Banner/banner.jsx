import { useState, useEffect } from "react";
import "./banner.css";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

// slide images
import h1 from "../../assets/images/homepage__img1.png";
import h2 from "../../assets/images/homepage__img2.png";
import h3 from "../../assets/images/homepage__img3.png";

const Banner = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    setIndex(0);
  }, []);

  return (
    <section className="banner">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        fade
        controls={false}
        indicators={true}
        interval={6000}   // Slowed down for smooth premium feel
        pause={false}     // IMPORTANT → keeps looping without stopping
        wrap={true}       // ensures infinite looping
      >
        
        {/* SLIDE 1 */}
        <Carousel.Item>
          <div className="banner-slide">
            <div className="banner-slide-bg" style={{ backgroundImage: `url(${h1})` }}></div>
            <div className="banner-content">
              <div className="trusted-badge">
                <span className="green-dot"></span> Trusted by 19,300+ Happy Families
              </div>
 <h1>
  Your{" "}
  <span className="flip-wrapper">
    <span className="flip-inner">Reliable</span>
  </span>{" "}
  Partner
  in <br/><span>Home Finance</span>
</h1>
              <p>
                Affordable home loans with transparent processes.
              </p>

              <div className="banner-buttons">
                <button
                  className="primary-btn"
                  onClick={() => navigate("/apply-home-loan")}
                >
                  Apply Now
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => navigate("/customercenter/calculator")}
                >
                  Loan Calculator
                </button>

                {/* <button
                  className="thrid-btn"
                  onClick={() => navigate("/contactus/branch/branch")}
                >
                  Find Your Branch
                </button> */}
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* SLIDE 2 */}
        <Carousel.Item>
          <div className="banner-slide">
            <div className="banner-slide-bg" style={{ backgroundImage: `url(${h2})` }}></div>
             <div className="banner-content">
              <div className="trusted-badge">
                <span className="green-dot"></span> Trusted by 19,300+ Happy Families
              </div>
  <h1>
  Your{" "}
  <span className="flip-wrapper">
    <span className="flip-inner">Reliable</span>
  </span>{" "}
  Partner
  in <br/><span>Home Finance</span>
</h1>

              <p>
                Affordable home loans with transparent processes.
              </p>

              <div className="banner-buttons">
                <button
                  className="primary-btn"
                  onClick={() => navigate("/apply-home-loan")}
                >
                  Apply Now
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => navigate("/customercenter/calculator")}
                >
                  Loan Calculator
                </button>

                {/* <button
                  className="thrid-btn"
                  onClick={() => navigate("/contactus/branch/branch")}
                >
                  Find Your Branch
                </button> */}
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* SLIDE 3 */}
        <Carousel.Item>
          <div className="banner-slide">
            <div className="banner-slide-bg" style={{ backgroundImage: `url(${h3})` }}></div>
             <div className="banner-content">
              <div className="trusted-badge">
                <span className="green-dot"></span> Trusted by 19,300+ Happy Families
              </div>
 <h1>
  Your{" "}
  <span className="flip-wrapper">
    <span className="flip-inner">Reliable</span>
  </span>{" "}
  Partner
  in <br/><span>Home Finance</span>
</h1>
              <p>
                Affordable home loans with transparent processes.
              </p>

              <div className="banner-buttons">
                <button
                  className="primary-btn"
                  onClick={() => navigate("/apply-home-loan")}
                >
                  Apply Now
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => navigate("/customercenter/calculator")}
                >
                  Loan Calculator
                </button>

                <button
                  className="thrid-btn"
                  onClick={() => navigate("/contactus/branch/branch")}
                >
                  Find Your Branch
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>

      </Carousel>
    </section>
  );
};

export default Banner;