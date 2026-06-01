import React, { useEffect } from "react";
import "./GrievanceRedressal.css";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const GrievanceRedressal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grievance-page">
      {/* Banner */}
      <section className="page-banner" style={{ backgroundImage: "url(/src/assets/images/terms.png)" }}>
        <div className="page-banner-overlay"></div>
        <ScrollReveal direction="down">
          <div className="page-banner-content">
            <h1 className="page-banner-title">Grievance Redressal</h1>
            <p className="page-banner-subtitle">Customer Grievance Redressal Mechanism</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Content */}
      <section className="grievance-content-section">
        <div className="grievance-container">
          <ScrollReveal direction="up">
            <div className="grievance-card">
              <h2>Grievance Redressal</h2>
              <p className="intro-text">
                In case of any complaint, grievance or any other service related issue, the borrower may reach us through any of the following modes:
              </p>

              <ul className="grievance-list">
                <li>
                  By way of physically visiting the Branch and post a complaint in the Complaint Register maintained at our branches. Customers can visit our branch during visiting hours between 10 a.m. and 5 p.m. from Monday to Friday &amp; from 10 a.m. to 1 p.m. on Saturdays (except on public holidays)
                </li>
                <li>
                  Customers can contact us at <strong>+91-80-2655 2822</strong> between 10 a.m. and 5 p.m. from Monday to Friday &amp; from 10 a.m. to 1 p.m. on Saturdays (except on public holidays)
                </li>
                <li>
                  Customers can also reach us vide E-mail: <a href="mailto:contact@nivarahousing.com" className="red-link">contact@nivarahousing.com</a>
                </li>
                <li>
                  By way of written letter addressed to Registered office of the company – <strong>To The Customer Service Manager – Home Loans</strong>, Nivara Home Finance Ltd., 22, 23, 24, 25/101/3, 3rd Floor, BNR Complex, Sri Rama Layout, Opp. RBI Layout, 7th Phase, JP Nagar, Bangalore – 560078.
                </li>
              </ul>

              <div className="grievance-divider"></div>

              <p className="escalation-heading">
                In case of delay or unsatisfactory response or non-response through the above modes, the borrower(s) may escalate the pending complaint, grievance or any other service request to:
              </p>

              <div className="md-escalation-box">
                <h3>The Managing Director,</h3>
                <strong>Nivara Home Finance Limited,</strong>
                <p className="address-detail">
                  22, 23, 24, 25/101/3, 3rd Floor, BNR Complex,<br />
                  Sri Rama Layout, Opp. RBI Layout,<br />
                  7th Phase, JP Nagar, Bangalore – 560078
                </p>
                <p className="email-detail">
                  E-mail: <a href="mailto:md@nivarahousing.com" className="red-link">md@nivarahousing.com</a>
                </p>
              </div>

              <div className="grievance-divider"></div>

              <p className="nhb-intro">
                If the borrower(s) is still dissatisfied with the response received/or where no response is received, the borrower(s) may approach the complaint Redressal Cell of National Housing Bank (NHB) by lodging their complaints within one month.
              </p>

              <ul className="grievance-list secondary-list">
                <li>
                  <strong>Online mode</strong> at the link <a href="https://grids.nhbonline.org.in/(S(gb1kgrqjt2rwhpdfezlqziwr))/default.aspx" target="_blank" rel="noopener noreferrer" className="red-link inline-link">https://grids.nhbonline.org.in/(S(gb1kgrqjt2rwhpdfezlqziwr))/default.aspx</a>
                </li>
                <li className="or-divider">
                  <strong>OR</strong>
                </li>
                <li>
                  <strong>Offline mode</strong> by post, in prescribed format available at link <a href="http://www.nhb.org.in/Grievance-Redressal-System/Lodging-Complaint-Against-HFCs-NHB%E2%80%93Physical-Mode.pdf" target="_blank" rel="noopener noreferrer" className="red-link inline-link">Download Physical Form PDF</a>, to Complaint Redressal Cell, Department of Regulation &amp; Supervision, National Housing Bank, 4th Floor, Core 5A, India Habitat Centre, Lodhi Road, New Delhi – 110 003.
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default GrievanceRedressal;
