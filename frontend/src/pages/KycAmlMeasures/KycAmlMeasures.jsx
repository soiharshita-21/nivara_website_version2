import React, { useEffect } from "react";
import { FileText, ShieldCheck, UserCheck, Eye, AlertTriangle } from "lucide-react";
import "./KycAmlMeasures.css";
import amlBanner from "../../assets/images/kyc.png";

const KycAmlMeasures = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="kyc-aml-page">
      {/* Hero Section */}
      <section className="kyc-hero">
        <img src={amlBanner} alt="KYC AML Banner" className="kyc-hero-img" />
        <div className="kyc-hero-overlay"></div>
        <div className="kyc-hero-content animate-on-scroll">
          <h1>KYC & AML Measures</h1>
          <p>Ensuring transparency and safety in all our financial dealings.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="kyc-content-section">
        <div className="kyc-container">
          <div className="policy-card animate-on-scroll">
            <div className="policy-header">
              <FileText className="policy-icon" />
              <h2>Overview of KYC & AML Policies</h2>
            </div>
            <div className="policy-body">
              <p>
                NHB guidelines on <strong>‘KNOW YOUR CUSTOMER’</strong> & <strong>‘ANTI MONEY LAUNDERING MEASURES’</strong>
                for HFCs issued vide circular no NHB/ND/DRS/Pol-No. 33/2010-11 dated 11th October 2010 and
                subsequent revisions are the basis for Nivara’s policies and processes.
              </p>
              <p>
                Our policy is built on four critical pillars to ensure the highest standards of integrity:
              </p>
              <ul className="pillars-list">
                <li><ShieldCheck size={20} /> Customer Acceptance Policy</li>
                <li><UserCheck size={20} /> Customer Identification Procedures</li>
                <li><Eye size={20} /> Monitoring of Transactions</li>
                <li><AlertTriangle size={20} /> Risk Management</li>
              </ul>
            </div>
          </div>

          <div className="policy-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="policy-header">
              <UserCheck className="policy-icon" />
              <h2>Definition of a 'Customer'</h2>
            </div>
            <div className="policy-body">
              <p>For the purposes of KYC policy, a ‘Customer’ is defined under the NHB guidelines as:</p>
              <ul className="definition-list">
                <li>
                  <div className="list-marker"></div>
                  <p>A person or entity that maintains an account and/or has a business relationship with Nivara.</p>
                </li>
                <li>
                  <div className="list-marker"></div>
                  <p>A person on whose behalf the account is maintained (i.e. the beneficial owner).</p>
                </li>
                <li>
                  <div className="list-marker"></div>
                  <p>Beneficiaries of transactions conducted by professional intermediaries, such as Stock Brokers, Chartered Accountants, Solicitors, etc. as permitted under the law.</p>
                </li>
                <li>
                  <div className="list-marker"></div>
                  <p>Any person or entity connected with a financial transaction which can pose significant reputational or other risks to the HFC (e.g., high-value wire transfers).</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="kyc-footer-note animate-on-scroll">
            <p>
              Interested in reading our full Fair Practice Code?
              <a href="/files/Fair-Practice-Code.pdf" target="_blank" rel="noopener noreferrer">
                Download PDF here
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KycAmlMeasures;
