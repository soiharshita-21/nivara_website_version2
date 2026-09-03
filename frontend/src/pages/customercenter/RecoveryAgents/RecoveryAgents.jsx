import React from "react";
import "./RecoveryAgents.css";
import { ShieldCheck, UserCheck } from "lucide-react";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import { FaFilePdf, FaDownload } from "react-icons/fa";

const RecoveryAgents = () => {
  return (
    <div className="about-page">
      <section className="page-banner no-image-banner">
        <ScrollReveal direction="down" distance={30} className="recovery-container">
          <h1 className="page-banner-title">Recovery Agents</h1>
          <p className="page-banner-subtitle">
            Details of agencies engaged by Nivara for recovery of dues as per RBI guidelines.
          </p>
        </ScrollReveal>
      </section>

      <section className="recovery-details-section">
        <div className="recovery-details-container">
          <div className="recovery-text-card">
            <ScrollReveal direction="up" distance={30}>
              <span className="text-red">Recovery Agents</span>
              <br />   <br />
              <p>
                The term recovery agents refer to agencies and the employees of these agencies engaged by Nivara for recovery of dues from its borrowers.
              </p>
              <p>
                Nivara has engaged recovery agents for few districts/cities and the details of which are disclosed below. For all other districts/cities not included in the list, recovery operations are managed directly in-house.
              </p>
            </ScrollReveal>
          </div>

          <div className="recovery-download-card">
            <ScrollReveal direction="up" distance={30} delay={0.15}>
              <div className="download-icon">
                <FaFilePdf />
              </div>
              <h3>List of Empanelled Recovery Agents</h3>
              <p>Click below to view or download the complete list of empanelled recovery agents.</p>
              <a
                href="/files/recovery-agents.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >
                <FaDownload /> Open Document
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecoveryAgents;
