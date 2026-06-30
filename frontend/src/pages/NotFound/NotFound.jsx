import React from "react";
import { Link } from "react-router-dom";
import { FileX, ArrowLeft, Home } from "lucide-react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-glass-card">
        <div className="notfound-icon-badge">
          <FileX size={48} className="notfound-icon" />
        </div>
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Document Not Found / Access Restricted</h2>
        <div className="notfound-divider"></div>
        <p className="notfound-message">
          The requested document could not be retrieved. This resource might have been moved, archived, or is currently restricted to authorized personnel. 
        </p>
        <p className="notfound-submessage">
          If you are an active investor or shareholder and require access to these materials, please contact the compliance officer directly at <a href="mailto:contact@nivarahousing.com">contact@nivarahousing.com</a>.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn-primary-action">
            <Home size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
