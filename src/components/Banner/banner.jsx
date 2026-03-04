import "./banner.css";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

// slide images
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="banner">
      <Carousel fade controls={false} indicators={true} interval={3000}>
        
        {/* SLIDE 1 */}
        <Carousel.Item>
          <div
            className="banner-slide"
            style={{ backgroundImage: `url(${slide1})` }}
          >
            <div className="banner-content">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Your Trusted Partner for <br />
                <span>Housing Finance</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Affordable home loans with transparent processes.
              </motion.p>

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
            style={{ backgroundImage: `url(${slide2})` }}
          >
            <div className="banner-content">
              <h1>Fast & Easy Home Loans</h1>
              <p>Quick approvals with minimum documentation</p>

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
            style={{ backgroundImage: `url(${slide3})` }}
          >
            <div className="banner-content">
              <h1>Your Family, Your Home</h1>
              <p>Quick Approvals</p>

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