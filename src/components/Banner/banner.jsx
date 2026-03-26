import "./banner.css";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

// slide images
import slide1 from "../../assets/images/slide1.jpg";
import ban2 from "../../assets/images/ban2.png";
import ban3 from "../../assets/images/ban3.png";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="banner">
    <Carousel
  fade
  controls={false}
  indicators={true}
  interval={2500}   // slightly increased for smooth feel
  pause={false}     // IMPORTANT → keeps looping without stopping
  wrap={true}       // ensures infinite looping
>
        
        {/* SLIDE 1 */}
        <Carousel.Item>
          <div
            className="banner-slide"
            style={{ backgroundImage: `url(${slide1})` }}
          >
            <div className="banner-content">
              <div className="trusted-badge">
                <span className="green-dot"></span> Trusted by 50,000+ Happy Families
              </div>
 <h1>
  Your{" "}
  <span className="flip-wrapper">
    <span className="flip-inner">Trusted</span>
  </span>{" "}
  Partner for <br />
  <span>Housing Finance</span>
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

        {/* SLIDE 2 */}
        <Carousel.Item>
          <div
            className="banner-slide"
            style={{ backgroundImage: `url(${ban2})` }}
          >
             <div className="banner-content">
              <div className="trusted-badge">
                <span className="green-dot"></span> Trusted by 50,000+ Happy Families
              </div>
  <h1>
  Your{" "}
  <span className="flip-wrapper">
    <span className="flip-inner">Trusted</span>
  </span>{" "}
  Partner for <br />
  <span>Housing Finance</span>
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
                  onClick={() => navigate("/emi-calculator")}
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

        {/* SLIDE 3 */}
        <Carousel.Item>
          <div
            className="banner-slide"
            style={{ backgroundImage: `url(${ban3})` }}
          >
             <div className="banner-content">
              <div className="trusted-badge">
                <span className="green-dot"></span> Trusted by 50,000+ Happy Families
              </div>
  <h1>
  Your{" "}
  <span className="flip-wrapper">
    <span className="flip-inner">Trusted</span>
  </span>{" "}
  Partner for <br />
  <span>Housing Finance</span>
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
                  onClick={() => navigate("/emi-calculator")}
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