import React from "react";
import "./Policy.css";
import policy2 from "../../assets/images/policy2.png";

const policies = [
  { name: "POSH Policy", link: "/files/policy-posh.pdf" },
  { name: "Whistle Blower Policy", link: "/files/policy-whistle-blower.pdf" },
  { name: "KYC & AML Policy", link: "/files/policy-kyc-aml.pdf" },
  { name: "Nomination & Remuneration Policy", link: "/files/policy-nomination-remuneration.pdf" },
  { name: "Conversion Policy", link: "/files/policy-conversion.pdf" },
  { name: "Code of Conduct for Independent Directors", link: "/files/policy-code-independent-directors.pdf" },

  { name: "Related Party Transaction Policy", link: "/files/policy-related-party.pdf" },
  { name: "Equal Opportunity Policy", link: "/files/policy-equal-opportunity.pdf" },
  { name: "Corporate Social Responsibility", link: "/files/policy-csr.pdf" },
  { name: "Social Media Policy", link: "/files/policy-social-media.pdf" },
  { name: "Anti Bribery and Anti Corruption Policy", link: "/files/policy-anti-bribery.pdf" },
  { name: "Trade Relief Policy", link: "/files/policy-trade-relief.pdf" },
  { name: "Internal Guidelines on Corporate Governance", link: "/files/policy-corporate-governance.pdf" },
];

const PolicyPage = () => {
  return (
    <section className="policy-section animate-pop-up">
      <section className="page-banner policy-page-banner animate-pop-up" style={{ backgroundImage: `url(${policy2})` }}>
        <div className="page-banner-overlay"></div>
        <div className="page-banner-content policy-page-banner-content">
          <h1 className="page-banner-title policy-page-banner-title">
            Policy
          </h1>
          <p className="page-banner-subtitle policy-page-banner-subtitle">
            Transparency and regulatory compliance in housing finance.
          </p>
        </div>
      </section>

      <div className="policy-links">
        <ul>
          {policies.map((policy, index) => (
            <li key={index}>
              <a
                href={policy.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {policy.name}
              </a>
            </li>
          ))}
        </ul>
      </div>



    </section>
  );
};

export default PolicyPage;
