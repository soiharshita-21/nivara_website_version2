import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, Home } from "lucide-react";
import "./AccessDenied.css";

const AccessDenied = () => {
  return (
    <div className="accessdenied-container">
      <div className="accessdenied-glass-card">
        <div className="accessdenied-icon-badge">
          <ShieldAlert size={48} className="accessdenied-icon" />
        </div>
        <h1 className="accessdenied-code">403</h1>
        <h2 className="accessdenied-title">Access Denied / Restricted Document</h2>
        <div className="accessdenied-divider"></div>
        <p className="accessdenied-message">
          You do not have permission to view this resource. Access to these specific Investor Relations documents is restricted to authorized stakeholders and compliance officers.
        </p>
        <p className="accessdenied-submessage">
          If you are an active investor or shareholder and require access to these materials, please contact the compliance officer directly at <a href="mailto:info@nivarahousing.com">info@nivarahousing.com</a>.
        </p>
        <div className="accessdenied-actions">
          <Link to="/" className="btn-primary-action">
            <Home size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
