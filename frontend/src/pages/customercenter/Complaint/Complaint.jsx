import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Complaint.css";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import termsImage from "../../../assets/images/terms.png";
import { FaBuilding, FaPhoneAlt, FaEnvelope, FaPencilAlt, FaGlobe, FaInbox, FaWheelchair } from "react-icons/fa";

const Complaint = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="complaint-page">
      {/* Banner */}
      <section className="page-banner no-image-banner">
        <ScrollReveal direction="down">
          <div className="page-banner-content">
            <h1 className="page-banner-title">Grievance & Complaint</h1>
            <p className="page-banner-subtitle">Customer Complaint Redressal Process</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Content Section */}
      <section className="complaint-content-section">
        <div className="complaint-container">
          <ScrollReveal direction="up" distance={30}>
            <div className="flowchart">
              <h1 className="flowchart-title">Nivara Home Finance Ltd.<br />Customer Complaint Redressal Process</h1>

              {/* Main Box 1 */}
              <div className="flow-box main">
                <h2>CUSTOMER COMPLAINT / GRIEVANCE</h2>
              </div>

              <div className="flow-arrow">↓</div>

              {/* Box 2 */}
              <div className="flow-box">
                <h3>Submit Complaint Through Any Channel</h3>
              </div>

              <div className="flow-arrow">↓</div>

              {/* Channels Grid */}
              <div className="flow-channels-grid">
                <div className="channel-box">
                  <div className="channel-icon">
                    <FaBuilding />
                  </div>
                  <h3>Visit Branch</h3>
                  <p className="channel-details">
                    Complaint Register Available<br /><br />
                    <strong>Monday to Friday</strong><br />
                    10:00 AM – 5:00 PM<br /><br />
                    <strong>Saturday</strong><br />
                    10:00 AM – 1:00 PM<br />
                    <span className="note-text">(except 2nd Saturday, Sunday & Public Holidays)</span>
                  </p>
                </div>

                <div className="channel-box">
                  <div className="channel-icon">
                    <FaPhoneAlt />
                  </div>
                  <h3>Call Us</h3>
                  <p className="channel-details">
                    <strong>+91 80 2655 2822</strong><br /><br />
                    <strong>Monday to Friday</strong><br />
                    10:00 AM – 5:00 PM<br /><br />
                    <strong>Saturday</strong><br />
                    10:00 AM – 1:00 PM<br />
                    <span className="note-text">(except 2nd Saturday, Sunday & Public Holidays)</span>
                  </p>
                </div>

                <div className="channel-box">
                  <div className="channel-icon">
                    <FaEnvelope />
                  </div>
                  <h3>Email Us</h3>
                  <p className="channel-details">
                    <strong>Chief of Quality & Customer Retention</strong><br /><br />
                    <strong>Name:</strong> Rajesh CA<br />
                    <strong>Email:</strong> contact@nivarahousing.com<br />
                    <strong>Phone:</strong> +91 80 2655 2822
                  </p>
                </div>

                <div className="channel-box">
                  <div className="channel-icon">
                    <FaPencilAlt />
                  </div>
                  <h3>Write To Us</h3>
                  <p className="channel-details write-details">
                    <strong>Chief of Quality Control and Customer Retention</strong><br /><br />
                    Nivara Home Finance Ltd.<br />
                    22, 23, 24, 25/101/3, 3rd Floor,<br />
                    BNR Complex, Sri Rama Layout,<br />
                    Opp. RBI Layout, 7th Phase,<br />
                    JP Nagar, Bangalore - 560078
                  </p>
                </div>
              </div>

              <div className="flow-arrow">↓</div>

              {/* Box 3 */}
              <div className="flow-box">
                <h3>Complaint Review & Response</h3>
              </div>

              <div className="flow-arrow">↓</div>

              {/* Decision Box 1 */}
              <div className="flow-box decision">
                <h3>Is the Issue Resolved Satisfactorily?</h3>
              </div>

              {/* First Split */}
              <div className="flow-split-container parent-split">
                <div className="split-path">
                  <div className="flow-arrow split-label">↓ YES</div>
                  <div className="flow-box success path-box">
                    <h3>✅ CASE CLOSED</h3>
                  </div>
                </div>

                <div className="split-path">
                  <div className="flow-arrow split-label">↓ NO</div>
                  <div className="flow-box warning path-box">
                    <h3>Escalate to Managing Director</h3>
                    <p className="escalation-md-details">
                      Nivara Home Finance Ltd.<br />
                      <strong>Email:</strong> md@nivarahousing.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector row pointing from NO to the next centered box */}
              <div className="flow-connector-row">
                <div className="connector-path-right">
                  <div className="flow-arrow diagonal-arrow-left">↓</div>
                </div>
              </div>

              <div className="flow-box">
                <h3>Review & Final Response</h3>
              </div>

              <div className="flow-arrow">↓</div>

              <div className="flow-box decision">
                <h3>Is the Customer Satisfied?</h3>
              </div>

              {/* Second Split */}
              <div className="flow-split-container parent-split">
                <div className="split-path">
                  <div className="flow-arrow split-label">↓ YES</div>
                  <div className="flow-box success path-box">
                    <h3>✅ CASE CLOSED</h3>
                  </div>
                </div>

                <div className="split-path">
                  <div className="flow-arrow split-label">
                    ↓ NO / NO RESPONSE
                    <span className="time-limit-label">(within one month)</span>
                  </div>
                  <div className="flow-box warning path-box">
                    <h3>Approach National Housing Bank (NHB)</h3>
                  </div>
                </div>
              </div>

              {/* Connector row pointing from NO to NHB channels grid */}
              <div className="flow-connector-row">
                <div className="connector-path-right">
                  <div className="flow-arrow diagonal-arrow-left">↓</div>
                </div>
              </div>

              {/* NHB Channels Grid */}
              <div className="flow-nhb-grid">
                <div className="channel-box">
                  <div className="channel-icon">
                    <FaGlobe />
                  </div>
                  <h3>Online Complaint</h3>
                  <p className="channel-details">
                    File complaint through NHB Grievance Portal<br /><br />
                    <a href="https://grids.nhbonline.org.in" target="_blank" rel="noopener noreferrer" className="nhb-portal-btn">
                      Open NHB Portal
                    </a>
                  </p>
                </div>

                <div className="channel-box">
                  <div className="channel-icon">
                    <FaInbox />
                  </div>
                  <h3>Offline Complaint</h3>
                  <p className="channel-details nhb-offline-details">
                    <strong>Complaint Redressal Cell</strong><br />
                    Department of Regulation & Supervision<br />
                    National Housing Bank<br />
                    4th Floor, Core 5A, India Habitat Centre<br />
                    Lodhi Road, New Delhi - 110003
                  </p>
                </div>
              </div>

              <div className="flow-arrow">↓</div>

              <div className="flow-box main">
                <h2>NHB COMPLAINT RESOLUTION</h2>
              </div>

              {/* PwD Support Section */}
              <div className="flow-pwd-section">
                <div className="pwd-icon-box">
                  <FaWheelchair />
                </div>
                <div className="pwd-content-box">
                  <h3>Important Note – Persons with Disabilities</h3>
                  <p>
                    In case the Customer is a <strong>Person with Disabilities (PwD)</strong>,
                    the above prescribed modes can be used by the <strong>Authorized Person / Representative</strong> to file grievances on behalf of such customer.
                  </p>
                  <p>
                    Necessary assistance will be provided by the concerned branch to such customers visiting the branch. The Company shall ensure that grievances of such customers are addressed appropriately through the prescribed Grievance Redressal Mechanism.
                  </p>
                </div>
              </div>

              {/* Open Redressal Procedure Button */}
              <div className="procedure-btn-wrapper">
                <Link to="/customercenter/description-of-grievance-redressal-procedure" className="procedure-btn">
                  <span>Open Grievance Redressal Procedure</span>
                  <span className="btn-arrow">→</span>
                </Link>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Complaint;
