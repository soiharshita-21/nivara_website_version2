import React from "react";
import "./Policy.css";
import pol from "../../assets/images/pol.png";

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
      <section className="policy-banner animate-pop-up">
        <div className="policy-banner-container animate-pop-up">
          <div className="policy-left">

            <h1 className="animate-pop-up">COMPANY POLICIES, ACCESSIBLE AND CLEAR</h1>
            <p>
              Our policies define the standards of governance, ethics, and
              compliance that guide Nivara Home Finance. They ensure transparency,
              accountability, and responsible business practices across all
              operations.
            </p>



          </div>

          <div className="policy-right">
            <div className="policy-image-wrapper">
              <img src={pol} alt="Company Policies" className="policy-image" />
            </div>
          </div>
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
