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
          <span>1800-309-1516 (Toll Free)</span>
        </a>

        {/* Email */}
        <a href="mailto:info@nivara.com" className="topbar-link">
          <FaEnvelope />
          <span>info@nivarahousing.com</span>
        </a>

        <a className="topbar-link">
          <span>Credit Rating:: A-; Stable
          </span>
        </a>
      </div>

      {/* Find a Branch */}
      <Link to="/contactus/branch/branch" className="topbar-link">
        <FaMapMarkerAlt className="location-icon" />
        <span>Find a Branch</span>
      </Link>
    </div>
  );
};

export default TopBar;
