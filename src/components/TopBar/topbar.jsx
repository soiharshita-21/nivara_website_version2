import "./topbar.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        {/* Phone */}
        <a href="tel:1800XXXXXXX" className="topbar-link">
          <FaPhoneAlt />
          <span>1800-XXX-XXXX (Toll Free)</span>
        </a>

        {/* Email */}
        <a href="mailto:info@nivara.com" className="topbar-link">
          <FaEnvelope />
          <span>info@nivara.com</span>
        </a>
      </div>

      {/* Find a Branch */}
      <Link to="/branches" className="topbar-link">
        <FaMapMarkerAlt className="location-icon" />
        <span>Find a Branch</span>
      </Link>
    </div>
  );
};

export default TopBar;

