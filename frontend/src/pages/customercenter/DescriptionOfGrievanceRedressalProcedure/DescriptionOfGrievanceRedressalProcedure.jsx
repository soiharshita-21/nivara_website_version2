import React, { useEffect } from "react";
import "./DescriptionOfGrievanceRedressalProcedure.css";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import termsImage from "../../../assets/images/terms.png";
import { FaBuilding, FaPhoneAlt, FaEnvelope, FaPencilAlt, FaGlobe, FaInbox, FaWheelchair } from "react-icons/fa";

const DescriptionOfGrievanceRedressalProcedure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="desc-grievance-page">
      {/* Banner */}
      <section className="page-banner" style={{ backgroundImage: `url(${termsImage})` }}>
        <div className="page-banner-overlay"></div>
        <ScrollReveal direction="down">
          <div className="page-banner-content">
            <h1 className="page-banner-title">Description of Grievance Redressal Procedure</h1>
            <p className="page-banner-subtitle">Customer Grievance Redressal Mechanism</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Content Section */}
      <section className="desc-grievance-content-section">
        <div className="desc-grievance-container">
          <ScrollReveal direction="up" distance={30}>
            <div className="desc-grievance-main-card">
              <h2 className="desc-grievance-main-title">Modes of receiving &amp; registering the Grievances</h2>
              <p className="desc-grievance-intro-text">
                In case of any complaint, grievances or any other service related issue, the customer may reach us through any of the following modes:
              </p>

              {/* Modes Grid */}
              <div className="desc-modes-container">
                {/* Mode 1 */}
                <div className="desc-mode-card">
                  <div className="desc-mode-badge">Mode 1</div>
                  <div className="desc-mode-icon">
                    <FaBuilding />
                  </div>
                  <h3>Physical Visiting the Branch</h3>
                  <p>
                    By way of physically visiting the branch and posting a complaint in the Complaint register maintained at our branches. Customers can visit our branch during visiting hours between <strong>10:00 AM and 5:00 PM (Monday to Friday)</strong> &amp; between <strong>10:00 AM and 1:00 PM (Saturday)</strong> (except on public holidays).
                  </p>
                </div>

                {/* Mode 2 */}
                <div className="desc-mode-card">
                  <div className="desc-mode-badge">Mode 2</div>
                  <div className="desc-mode-icon">
                    <FaPhoneAlt />
                  </div>
                  <h3>Over Phone</h3>
                  <p>
                    Customers can contact us over phone at <strong>+91 80 2655 2822</strong> between <strong>10:00 AM and 5:00 PM (Monday to Friday)</strong> &amp; between <strong>10:00 AM and 1:00 PM (Saturday)</strong> (except on public holidays).
                  </p>
                </div>

                {/* Mode 3 */}
                <div className="desc-mode-card">
                  <div className="desc-mode-badge">Mode 3</div>
                  <div className="desc-mode-icon">
                    <FaEnvelope />
                  </div>
                  <h3>Via E-mail</h3>
                  <p>
                    Customers can reach us via email at: contact@nivarahousing.com
                  </p>
                </div>

                {/* Mode 4 */}
                <div className="desc-mode-card">
                  <div className="desc-mode-badge">Mode 4</div>
                  <div className="desc-mode-icon">
                    <FaPencilAlt />
                  </div>
                  <h3>Written Letter to Registered Office</h3>
                  <p>
                    Customers can make a complaint by way of a written letter addressed to the registered office of the company:
                  </p>
                  <div className="desc-address-sub-box">
                    <strong>To: Chief of Quality Control and Customer Retention</strong><br />
                    Mr. Rajesh C A<br />
                    Nivara Home Finance Ltd., 22, 23, 24, 25/101/3, 3rd Floor,<br />
                    BNR Complex, Sri Rama Layout, Opp. RBI Layout, 7th Phase,<br />
                    JP Nagar, Bangalore – 560078.
                  </div>
                </div>

                {/* Mode 5 */}
                <div className="desc-mode-card desc-highlight-card">
                  <div className="desc-mode-badge desc-escalation-badge">Mode 5</div>
                  <div className="desc-mode-icon">
                    <FaBuilding />
                  </div>
                  <h3>Direct Approach to Managing Director</h3>
                  <p>
                    In case of delay, unsatisfactory response, or non-response through the above modes, the customer may escalate the pending complaint, grievance, or service request to:
                  </p>
                  <div className="desc-md-details-box">
                    <strong>The Managing Director</strong><br />
                    Nivara Home Finance Limited,<br />
                    22, 23, 24, 25/101/3, 3rd Floor, BNR Complex,<br />
                    Sri Rama Layout, Opp. RBI Layout, 7th Phase,<br />
                    JP Nagar, Bangalore - 560078<br />
                    <strong>Email:</strong> <a href="mailto:md@nivarahousing.com" className="desc-md-email-link">md@nivarahousing.com</a>
                  </div>
                </div>

                {/* Mode 6 */}
                <div className="desc-mode-card desc-nhb-card">
                  <div className="desc-mode-badge desc-nhb-badge">Mode 6</div>
                  <div className="desc-mode-icon">
                    <FaBuilding />
                  </div>
                  <h3>Approach Complaint Redressal Cell of NHB</h3>
                  <p>
                    In case the complainant does not receive a response from the Company within a period of one month or is dissatisfied with the response received, they may approach the <strong>Complaint Redressal Cell of National Housing Bank (NHB)</strong>:
                  </p>
                  
                  <div className="desc-nhb-channels">
                    <div className="desc-nhb-sub-channel">
                      <strong>Option A: Online Complaint</strong><br />
                      Through Grievance Registration &amp; Information Database System (GRIDS):<br />
                      <a href="https://grids.nhbonline.org.in" target="_blank" rel="noopener noreferrer" className="desc-nhb-btn">
                        Open NHB GRIDS Portal
                      </a>
                    </div>

                    <div className="desc-nhb-sub-channel">
                      <strong>Option B: Offline Complaint</strong><br />
                      Submit complaint in writing in the prescribed format available at:<br />
                      <a href="http://nhb.org.in/citizencharter/NHB%20Grievance%20Redressal%20Policy.pdf" target="_blank" rel="noopener noreferrer" className="desc-nhb-pdf-link">
                        Download NHB Grievance Format (PDF)
                      </a>
                      <p className="desc-nhb-address">
                        <strong>Send to:</strong><br />
                        National Housing Bank<br />
                        Complaint Redressal Cell,<br />
                        Department of Regulation and Supervision,<br />
                        Core - 5A, India Habitat Centre,<br />
                        Lodhi Road, New Delhi - 110 003
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Persons with Disabilities Section */}
              <div className="desc-grievance-pwd-alert">
                <div className="desc-pwd-alert-icon">
                  <FaWheelchair />
                </div>
                <div className="desc-pwd-alert-content">
                  <h3>Important Note – Persons with Disabilities</h3>
                  <p>
                    In case the Customer is a <strong>Person with Disabilities (PwD)</strong>, the above prescribed modes can be used by an <strong>Authorized Person / Representative</strong> to file grievances on behalf of such customer.
                  </p>
                  <p>
                    Necessary assistance will be provided by the concerned branch to such customers visiting the branch. The Company shall ensure that grievances of such customers are addressed appropriately through the prescribed Grievance Redressal Mechanism.
                  </p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default DescriptionOfGrievanceRedressalProcedure;
