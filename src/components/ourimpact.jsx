import "./ourimpact.css";
import { FaChartLine, FaBuilding, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

const OurImpact = () => {
  return (
    <section className="impact-section">
      <h6 className="impact-heading">Our Impact</h6>  
      <h2 className="impact-title">Building Dreams Across India</h2>
      <p className="impact-subtitle">
        Transforming lives and empowering communities with accessible and
        affordable housing finance solutions
      </p>

      <div className="impact-cards">
        <div className="impact-card pink">
          <div className="impact-icon">
            <FaChartLine />
          </div>
          <h3>50,000+</h3>
          <p>Loans Disbursed</p>
        </div>

        <div className="impact-card red">
          <div className="impact-icon">
            <FaBuilding />
          </div>
          <h3>150+</h3>
          <p>Branches</p>
        </div>

        <div className="impact-card teal">
          <div className="impact-icon">
            <FaMapMarkerAlt />
          </div>
          <h3>12</h3>
          <p>States Covered</p>
        </div>

        <div className="impact-card yellow">
          <div className="impact-icon">
            <FaHeart />
          </div>
          <h3>98%</h3>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </section> 
  );
};

export default OurImpact;
