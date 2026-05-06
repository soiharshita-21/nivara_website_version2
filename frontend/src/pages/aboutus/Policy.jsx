import React from "react";
import "./Policy.css";
import policy2 from "../../assets/images/policy2.png";

const policies = [
  { name: "POSH Policy", link: "/policies/posh.pdf" },
  { name: "Whistle Blower Policy", link: "/policies/whistle-blower.pdf" },
  { name: "KYC & AML Policy", link: "/policies/kyc-aml.pdf" },
  { name: "Nomination & Remuneration Policy", link: "/policies/nomination-remuneration.pdf" },
  { name: "Conversion Policy", link: "/policies/conversion.pdf" },
  { name: "Code of Conduct for Independent Directors", link: "/policies/code-independent-directors.pdf" },
  { name: "Technical Valuation Policy", link: "/policies/technical-valuation.pdf" },
  { name: "Related Party Transaction Policy", link: "/policies/related-party.pdf" },
  { name: "Equal Opportunity Policy", link: "/policies/equal-opportunity.pdf" },
  { name: "Corporate Social Responsibility", link: "/policies/csr.pdf" },
  { name: "Social Media Policy", link: "/policies/social-media.pdf" },
  { name: "Anti Bribery and Anti Corruption Policy", link: "/policies/anti-bribery.pdf" },
];

const PolicyPage = () => {
  return (
    <section className="policy-section animate-pop-up">
      <section className="page-banner animate-pop-up" style={{ backgroundImage: `url(${policy2})` }}>
        <div className="page-banner-overlay"></div>
        <div className="page-banner-content">
          <h1 className="page-banner-title">
            Public <span className="text-red">Disclosure</span>
          </h1>
          <p className="page-banner-subtitle">
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
