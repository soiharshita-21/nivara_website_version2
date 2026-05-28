import React, { useState, useEffect } from "react";
import "./Mitc.css";
import { ShieldCheck, ChevronDown, ChevronUp, FileText, Percent, Calendar, Shield, ClipboardCheck, RefreshCw, AlertCircle, Headset, MessageSquare } from "lucide-react";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const Mitc = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const sections = [
    {
      title: "Loan Parameters",
      icon: <FileText size={24} />,
      content: (
        <div className="terms-detail">
          <h4>1. Loan</h4>
          <p>Sanctioned Amount: As mentioned in the sanction letter.</p>

          <h4>2. Interest</h4>
          <ul className="terms-sub-list">
            <li><strong>Type:</strong> Fixed or Floating as per the agreement.</li>
            <li><strong>Interest rate Chargeable:</strong> As specified in the sanction letter.</li>
            <li><strong>Moratorium or Subsidy:</strong> As per the specific loan scheme.</li>
            <li><strong>Date of Reset of Interest:</strong> Periodic resets for floating rate loans.</li>
            <li><strong>Modes of Communication:</strong> Through our website and offices by displaying on the notice boards from time to time.</li>
          </ul>

          <h4>3. Instalment types: Monthly (EMI)</h4>
          <h4>4. Loan Tenure: As specified in the sanction letter.</h4>
          <h4>5. Purpose of Loan: Purchase, Construction, Extension, or Improvement of residential property.</h4>
        </div>
      )
    },
    {
      title: "Fees and Other Charges",
      icon: <Percent size={24} />,
      content: (
        <div className="terms-detail">
          <p>Processing Fees, Documentation Charges, and other applicable fees are mentioned in the schedule of charges and the sanction letter.</p>
          <ul className="terms-sub-list">
            <li><strong>Part-Prepayment / Foreclosure:</strong> NIL for floating rate loans from own sources.</li>
            <li><strong>Charges for NHL:</strong> 4% + taxes if closed within 12 months; 3% + taxes after 12 months.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Security for the Loan",
      icon: <Shield size={24} />,
      content: (
        <div className="terms-detail">
          <p>Generally, the Security of the loan will be the equitable mortgage of the property being financed. Nivara may require additional collateral or interim security from time to time.</p>
        </div>
      )
    },
    {
      title: "Insurance of the property / Borrowers",
      icon: <ClipboardCheck size={24} />,
      content: (
        <div className="terms-detail">
          <p><strong>Property Insurance:</strong> The borrower shall ensure the property is properly insured for fire, earthquake, and other perils. The policy must be assigned in favor of Nivara Home Finance Ltd.</p>
          <p><strong>Borrower Insurance:</strong> Borrowers are advised to keep their life insured to the extent of the loan outstanding with Nivara as the sole beneficiary.</p>
        </div>
      )
    },
    {
      title: "Conditions for Disbursement of the Loan",
      icon: <RefreshCw size={24} />,
      content: (
        <div className="terms-detail">
          <p>Disbursement is subject to:</p>
          <ul className="terms-sub-list">
            <li>Fulfilment of all conditions in the sanction letter and loan agreement.</li>
            <li>Submission of a written disbursement request.</li>
            <li>Absolute, clear, and marketable title to the property.</li>
            <li>Approved construction plans and proof of own contribution.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Repayment of the Loan and Interest",
      icon: <Calendar size={24} />,
      content: (
        <div className="terms-detail">
          <p>EMIs are payable on a fixed due date every month. Pre-EMI interest is payable until final disbursement.</p>
        </div>
      )
    },
    {
      title: "Brief procedure for Recovery of Overdues",
      icon: <AlertCircle size={24} />,
      content: (
        <div className="terms-detail">
          <p>In case of default, Nivara will send reminders via telephone, SMS, email, or third-party agencies. Legal action under the SARFAESI Act, Negotiable Instruments Act, or Civil Suit may be initiated as a last resort.</p>
        </div>
      )
    },
    {
      title: "Customer Services",
      icon: <Headset size={24} />,
      content: (
        <div className="terms-detail">
          <p>Customers can visit branches between 10 a.m. and 5 p.m. (Mon-Fri) or 10 a.m. and 1 p.m. (Saturdays). Reach us at <strong>1800-309-1516</strong> or <strong>info@nivarahousing.com</strong>.</p>
        </div>
      )
    },
    {
      title: "Grievance Redressal",
      icon: <MessageSquare size={24} />,
      content: (
        <div className="terms-detail">
          <p>Complaints can be posted in the branch register or emailed. Escalations can be made to the Managing Director or the Complaint Redressal Cell of the National Housing Bank (NHB).</p>
        </div>
      )
    },
    {
      title: "MITC",
      icon: <ShieldCheck size={24} />,
      content: (
        <div className="terms-detail">
          <ul className="mitc-dropdown-list">
            <li className="mitc-dropdown-item">
              <a href="/files/MITC-English copy.pdf" target="_blank" rel="noopener noreferrer" className="mitc-dropdown-link mitc-link-red">
                MITC_English
              </a>
            </li>
            <li className="mitc-dropdown-item">
              <a href="/files/MITC-Kannada-updated-1.pdf" target="_blank" rel="noopener noreferrer" className="mitc-dropdown-link mitc-link-red">
                MITC_Kannada
              </a>
            </li>
            <li className="mitc-dropdown-item">
              <a href="/files/MITC-Telugu-updated-1.pdf" target="_blank" rel="noopener noreferrer" className="mitc-dropdown-link mitc-link-red">
                MITC_Telugu
              </a>
            </li>
            <li className="mitc-dropdown-item">
              <a href="/files/MITC-Tamil-updated-1.pdf" target="_blank" rel="noopener noreferrer" className="mitc-dropdown-link mitc-link-red">
                MITC_Tamil
              </a>
            </li>
            <li className="mitc-dropdown-item">
              <a href="/files/MITC_Marathi-updated.pdf" target="_blank" rel="noopener noreferrer" className="mitc-dropdown-link mitc-link-red">
                MITC_Marathi
              </a>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="terms-page">
      <section className="page-banner" style={{ backgroundImage: "url(/src/assets/images/terms.png)" }}>
        <div className="page-banner-overlay"></div>
        <ScrollReveal direction="down">
          <div className="page-banner-content">

            <h1 className="page-banner-title">MITC</h1>
            <p className="page-banner-subtitle">Most Important Terms and Conditions (MITC) for Nivara Home Loans</p>
          </div>
        </ScrollReveal>
      </section>

      <section className="terms-intro-section">
        <div className="terms-container">
          <p className="mitc-intro">
            The Most Important Terms and Conditions (MITC) of Loan between a Borrower and Nivara Home Finance Limited, having its registered office at No. 22, 23, 24, 25/101/3, 3rd Floor, BNR Complex, Sri Rama Layout, Opp. RBI Layout, 7th Phase, JP Nagar, Bangalore – 560078 (hereinafter referred as “NIVARA”) are agreed upon and mentioned below. Please note that the MITC document is to be read and understood in conjunction with the terms and conditions mentioned in the sanction letter, loan agreement and any other documents as prescribed by Nivara as the loan shall be governed by all these documents put together. The MITC document provided in below mentioned paragraphs is indicative and not exhaustive.
          </p>
        </div>
      </section>

      <section className="terms-accordion-section">
        <div className="terms-accordion-container">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`accordion-item ${activeAccordion === index ? "active" : ""}`}
            >
              <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                <div className="header-left">
                  <span className="icon-box">{section.icon}</span>
                  <h3>{section.title}</h3>
                </div>
                {activeAccordion === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              <div className="accordion-content">
                <div className="content-inner">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mitc;
